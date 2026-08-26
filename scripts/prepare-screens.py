#!/usr/bin/env python3
"""Turn the App Store marketing images into clean device screens.

The marketing exports in src/assets/appstore are 1320x2868 canvases that
contain a blue background, a baked-in headline and a device mockup whose
bottom runs off the canvas. This script:

  1. crops the app UI out of the device mockup,
  2. extends it to the true iPhone screen ratio (1320:2868), fading the
     last rows of content into the screen's own background colour so the
     list reads as continuing below the fold,
  3. draws the home indicator that the crop cut away.

Run after replacing the App Store screenshots:

    python3 scripts/prepare-screens.py
"""

from collections import Counter
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src/assets/appstore"
OUT = ROOT / "src/assets/screens"

# Screen ratio of the App Store canvas these exports were rendered at.
SCREEN_RATIO = 1320 / 2868

# Where the app UI sits inside each single-device mockup. All five share
# the same layout, so one rectangle covers them.
SINGLE_CROP = (155, 966, 1163, 2868)

SOURCES = [
    ("1.png", "track", SINGLE_CROP),
    ("2.png", "customize", SINGLE_CROP),
    ("3.png", "overview", SINGLE_CROP),
    ("4.png", "timeline", SINGLE_CROP),
    ("5.png", "analyze", SINGLE_CROP),
    # 6.png stacks two devices; this is the front one.
    ("6.png", "reports", (540, 1538, 1241, 2868)),
]

# Home indicator geometry, in fractions of screen width (iPhone: 139x5pt
# on a 440pt-wide screen, sitting 8pt above the bottom edge).
INDICATOR_W = 139 / 440
INDICATOR_H = 5 / 440
INDICATOR_BOTTOM = 8 / 440


def background_colour(img: Image.Image) -> tuple[int, int, int]:
    """The most common colour in the lower third — the page background."""
    w, h = img.size
    lower = img.crop((0, int(h * 0.66), w, h))
    pixels = list(lower.resize((w // 6, (h - int(h * 0.66)) // 6)).get_flattened_data())
    return Counter(pixels).most_common(1)[0][0]


def extend(img: Image.Image) -> Image.Image:
    """Pad the bottom to the true screen ratio, fading content into the
    background so the cut never reads as a broken image."""
    w, h = img.size
    target_h = round(w / SCREEN_RATIO)
    if target_h <= h:
        return img

    bg = background_colour(img)
    canvas = Image.new("RGB", (w, target_h), bg)
    canvas.paste(img, (0, 0))

    # Fade the final rows of real content into the background colour.
    fade_h = round(w * 0.13)
    overlay = Image.new("RGB", (w, fade_h), bg)
    alpha = Image.new("L", (w, fade_h))
    draw = ImageDraw.Draw(alpha)
    for y in range(fade_h):
        draw.line([(0, y), (w, y)], fill=round(255 * (y / (fade_h - 1)) ** 1.4))
    canvas.paste(overlay, (0, h - fade_h), alpha)

    return canvas


def draw_indicator(img: Image.Image) -> None:
    w, h = img.size
    bar_w = round(w * INDICATOR_W)
    bar_h = max(2, round(w * INDICATOR_H))
    x0 = (w - bar_w) // 2
    y0 = h - round(w * INDICATOR_BOTTOM) - bar_h

    # Dark bar at ~30% on light backgrounds, matching iOS.
    bar = Image.new("RGB", (w, h), (0, 0, 0))
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [x0, y0, x0 + bar_w, y0 + bar_h], radius=bar_h / 2, fill=77
    )
    img.paste(bar, (0, 0), mask)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for filename, name, box in SOURCES:
        src = Image.open(SRC / filename).convert("RGB")
        screen = extend(src.crop(box))
        draw_indicator(screen)
        target = OUT / f"{name}.png"
        screen.save(target, optimize=True)
        w, h = screen.size
        print(f"{target.name:16} {w}x{h}  ratio={w / h:.4f}")


if __name__ == "__main__":
    main()
