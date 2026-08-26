#!/usr/bin/env python3
"""Render the Open Graph card for every locale.

The site spans four scripts and each font file holds only its own subset,
so a single string routinely needs several files: the Turkish headline
mixes Latin with latin-ext, and every non-Latin card keeps "iPhone",
"iPad", "Mac" and the SimpleTime wordmark in Latin.

Which file covers which character is read from the `unicode-range`
declarations Fontsource ships rather than guessed. Guessing got it wrong
once already — the Turkish dotless ı looks like a latin-ext character but
lives in the Latin subset, and rendering it from the wrong file produced
a NO GLYPH box in the middle of the headline.

Run after changing any hero copy:

    python3 scripts/og-images.py
"""

import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
INTER = ROOT / "node_modules/@fontsource/inter"
ARMENIAN = ROOT / "node_modules/@fontsource/noto-sans-armenian"
PUBLIC = ROOT / "public"
SCREEN = ROOT / "src/assets/screens/track.png"

W, H = 1200, 630

# Subset name -> file template. Order matters: the first subset whose range
# contains a character wins, so Latin is checked before latin-ext.
SUBSETS = [
    ("latin", INTER / "files/inter-latin-{w}-normal.woff2", INTER / "400.css", "latin"),
    ("latin-ext", INTER / "files/inter-latin-ext-{w}-normal.woff2", INTER / "400.css", "latin-ext"),
    ("cyrillic", INTER / "files/inter-cyrillic-{w}-normal.woff2", INTER / "400.css", "cyrillic"),
    (
        "armenian",
        ARMENIAN / "files/noto-sans-armenian-armenian-{w}-normal.woff2",
        ARMENIAN / "400.css",
        "armenian",
    ),
]

COPY = {
    "en": ("Track time", "effortlessly.", "A clean time tracker for iPhone, iPad and Mac.", "Free · No account · No tracking"),
    "de": ("Zeit erfassen,", "ganz einfach.", "Zeiterfassung für iPhone, iPad und Mac.", "Kostenlos · Kein Konto · Keine Werbung"),
    "fr": ("Votre temps,", "sans effort.", "Un suivi du temps clair pour iPhone, iPad et Mac.", "Gratuit · Sans compte · Sans pistage"),
    "es": ("Tu tiempo,", "sin esfuerzo.", "Un registro de tiempo claro para iPhone, iPad y Mac.", "Gratis · Sin cuenta · Sin rastreo"),
    "it": ("Il tuo tempo,", "senza sforzo.", "Un tracker del tempo chiaro per iPhone, iPad e Mac.", "Gratis · Nessun account · Nessun tracciamento"),
    "ru": ("Ваше время,", "без усилий.", "Понятный трекер времени для iPhone, iPad и Mac.", "Бесплатно · Без аккаунта · Без слежки"),
    "hy": ("Ժամանակը՝", "առանց ջանքի։", "Պարզ ժամանակի հաշվառում iPhone-ի, iPad-ի և Mac-ի համար։", "Անվճար · Առանց հաշվի · Առանց հետագծման"),
    "pt": ("O seu tempo,", "sem esforço.", "Um registo de tempo claro para iPhone, iPad e Mac.", "Gratuito · Sem conta · Sem rastreio"),
    "tr": ("Zamanın,", "zahmetsizce.", "iPhone, iPad ve Mac için sade bir zaman takibi.", "Ücretsiz · Hesap yok · İzleme yok"),
}


def parse_range(css_path: Path, subset: str) -> set[int]:
    """The codepoints Fontsource declares for one subset."""
    css = css_path.read_text(encoding="utf-8")
    stem = css_path.parent.name
    pattern = rf"/\* {re.escape(stem)}-{re.escape(subset)}-400-normal \*/\s*@font-face \{{(.*?)\}}"
    match = re.search(pattern, css, re.S)
    if not match:
        raise SystemExit(f"no @font-face for {subset} in {css_path}")
    declared = re.search(r"unicode-range:\s*([^;]+);", match.group(1))
    if not declared:
        raise SystemExit(f"{subset} in {css_path} has no unicode-range")

    points: set[int] = set()
    for part in declared.group(1).split(","):
        part = part.strip().removeprefix("U+")
        if "-" in part:
            lo, hi = part.split("-")
            points.update(range(int(lo, 16), int(hi, 16) + 1))
        else:
            points.add(int(part, 16))
    return points


RANGES = [(name, tmpl, parse_range(css, subset)) for name, tmpl, css, subset in SUBSETS]
_fonts: dict[tuple[str, int, int], ImageFont.FreeTypeFont] = {}


def font(subset: str, weight: int, size: int) -> ImageFont.FreeTypeFont:
    key = (subset, weight, size)
    if key not in _fonts:
        path = next(t for n, t, _ in RANGES if n == subset)
        _fonts[key] = ImageFont.truetype(str(path).format(w=weight), size)
    return _fonts[key]


def subset_for(ch: str) -> str:
    for name, _, points in RANGES:
        if ord(ch) in points:
            return name
    return "latin"  # spaces, digits and punctuation the ranges do not list


def runs(text: str) -> list[tuple[str, str]]:
    """Split into stretches that share one font file."""
    out: list[tuple[str, str]] = []
    current, buffer = None, ""
    for ch in text:
        sub = subset_for(ch)
        if sub != current:
            if buffer:
                out.append((current, buffer))
            current, buffer = sub, ch
        else:
            buffer += ch
    if buffer:
        out.append((current, buffer))
    return out


def measure(draw, text, weight, size) -> float:
    return sum(draw.textlength(seg, font=font(sub, weight, size)) for sub, seg in runs(text))


def draw_text(draw, x, y, text, weight, size, fill) -> None:
    for sub, seg in runs(text):
        face = font(sub, weight, size)
        draw.text((x, y), seg, font=face, fill=fill)
        x += draw.textlength(seg, font=face)


def rounded(size, radius) -> Image.Image:
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size[0] - 1, size[1] - 1], radius=radius, fill=255)
    return mask


def build(lang: str, out: Path) -> None:
    gradient = Image.new("RGB", (W, H))
    px = gradient.load()
    for y in range(H):
        for x in range(0, W, 4):
            t = x / W * 0.65 + y / H * 0.35
            colour = (
                int(0x0A + (0x2A - 0x0A) * t),
                int(0x19 + (0x4F - 0x19) * t),
                int(0x43 + (0xA8 - 0x43) * t),
            )
            for dx in range(4):
                if x + dx < W:
                    px[x + dx, y] = colour

    glow = Image.new("RGB", (W, H), "#000000")
    ImageDraw.Draw(glow).ellipse([620, -220, 1320, 380], fill="#4f76d8")
    base = Image.blend(gradient, Image.blend(gradient, glow.filter(ImageFilter.GaussianBlur(150)), 0.55), 0.55)

    screen = Image.open(SCREEN).convert("RGB")
    dev_w = 330
    sc_w = int(dev_w * 0.93)
    sc_h = int(screen.height * sc_w / screen.width)
    screen = screen.resize((sc_w, sc_h), Image.LANCZOS)
    dev_h = sc_h + int(dev_w * 0.07)
    device = Image.new("RGB", (dev_w, dev_h), "#0b0b0d")
    device.paste(screen, ((dev_w - sc_w) // 2, (dev_w - sc_w) // 2), rounded((sc_w, sc_h), int(sc_w * 0.10)))
    mask = rounded((dev_w, dev_h), int(dev_w * 0.115))

    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    shadow.paste((0, 0, 0, 150), (770, 120), mask)
    base = Image.alpha_composite(base.convert("RGBA"), shadow.filter(ImageFilter.GaussianBlur(28))).convert("RGB")
    base.paste(device, (762, 104), mask)

    draw = ImageDraw.Draw(base)
    logo = Image.open(PUBLIC / "logo.png").convert("RGBA").resize((60, 60), Image.LANCZOS)
    base.paste(logo, (80, 74), rounded((60, 60), 16))
    draw.text((156, 88), "SimpleTime", font=font("latin", 600, 30), fill="#ffffff")

    line1, line2, subtitle, meta = COPY[lang]

    # Shrink until the longest line clears the device.
    size = 74
    while size > 40 and max(measure(draw, line1, 800, size), measure(draw, line2, 800, size)) > 650:
        size -= 2
    draw_text(draw, 78, 196 + (74 - size) // 2, line1, 800, size, "#ffffff")
    draw_text(draw, 78, 286 + (74 - size) // 2, line2, 800, size, "#a9c0f0")

    sub_size = 27
    while sub_size > 16 and measure(draw, subtitle, 400, sub_size) > 650:
        sub_size -= 1
    draw_text(draw, 80, 410, subtitle, 400, sub_size, "#d3ddf5")

    draw.ellipse([82, 489, 94, 501], fill="#8ea9e3")
    meta_size = 23
    while meta_size > 14 and measure(draw, meta, 500, meta_size) > 600:
        meta_size -= 1
    draw_text(draw, 108, 481 + (23 - meta_size) // 2, meta, 500, meta_size, "#9fb3de")

    base.save(out, optimize=True)
    used = sorted({sub for sub, _ in runs(line1 + line2 + subtitle + meta)})
    print(f"{out.name:14} headline {size}px, subtitle {sub_size}px, subsets: {', '.join(used)}")


def main() -> None:
    for lang in COPY:
        build(lang, PUBLIC / ("og.png" if lang == "en" else f"og-{lang}.png"))


if __name__ == "__main__":
    main()
