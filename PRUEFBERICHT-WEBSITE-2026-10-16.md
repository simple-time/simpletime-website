# Prüfbericht simple-time.app – 16.10.2026

Systematische Prüfung der SimpleTime-Website auf Fehler, Risiken und Verbesserungsmöglichkeiten.
Geprüft wurden zwei Stände:

| Stand | Commit | Wo |
|---|---|---|
| **Live** (`main`) | `efea834` | https://simple-time.app – Byte für Byte identisch mit dem lokalen Build (Hash-Vergleich von 6 Dateien) |
| **Kandidat** (PR #11, Premium-Design) | `ca7a03c` | lokaler Build und Vorschau `ai-premium-design-simpletime-website.polished-resonance-9e49.workers.dev` |

Kennzeichnung: **bestätigt** = nachgestellt und belegt · **Verdacht** = Hinweise, nicht abschließend belegt ·
**nicht geprüft** = fehlender Zugang oder Werkzeug (Abschnitt 7).
Schweregrade: Hoch · Mittel · Niedrig · Info.

---

## 1. Kurzfassung

Die Website ist technisch solide:
- **Sicherheit:** strenge Content-Security-Policy ohne `unsafe-inline`, keine Cookies, keine Anfragen an Dritte (im Netzwerk nachgemessen).
- **Datenschutz:** Die Erklärung passt zur Wirklichkeit.
- **Barrierefreiheit:** 0 axe-Verstöße auf allen 108 Seiten, hell und dunkel, in beiden Ständen.
- **Navigation:** Alle 486 internen Links und Sprungmarken stimmen, die hreflang-Paare sind vollständig.

Die wichtigsten Risiken:

1. **Die automatische Veröffentlichung ist unterbrochen (Hoch).** Seit das Repo zu `simpletime-hq` umgezogen ist, hat Cloudflare keine GitHub-Verbindung mehr. Ein Merge von PR #11 ginge **nicht** live, und das würde nicht auffallen.
2. **Härtung von Server und DNS fehlt (Mittel/Niedrig).** TLS 1.0/1.1 sind noch erlaubt, es gibt keine HTTPS-Weiterleitung und kein HSTS, `www` liefert eine Kopie statt einer Weiterleitung. DNSSEC, CAA und eine durchgesetzte DMARC-Richtlinie fehlen.
3. **Tempo (Mittel).** Jede Seite lädt 71 KB blockierendes CSS, davon 81 % Schriftdefinitionen für Japanisch und Chinesisch.
4. **PR #11 vor dem Merge (Mittel/Niedrig).**
   - Hinter dem offenen Handy-Menü landet der Fokus in verdeckten Inhalten.
   - Einblend-Animationen verzögern auf Unterseiten das LCP um rund 1 s.
   - Armenisch läuft bei 400 % Zoom seitlich über.

Nicht vorhanden und damit nicht anwendbar: Registrierung, Anmeldung, Sitzungen, Zugriffsrechte, Formulare (außer der FAQ-Suche), Uploads, Checkout. Gekauft wird in der App über den App Store. Es gibt keine Datenbank, keine Nutzerinhalte und keine KI.

---

## 2. Zweck, Architektur, Seiten, Abläufe

- **Zweck:** Marketing und Support für die iOS/Mac-App SimpleTime. Store-Text Wort für Wort, FAQ, Pro, Kontakt, Datenschutz, Impressum.
- **Technik:**
  - Astro 7 (statisch) und Tailwind 4.
  - 18 Sprachen × 6 Seiten + 404 = 109 HTML-Seiten, die Sitemap listet 108.
  - Kein Framework-JavaScript: kleine Inline-Skripte für Thema, Menü, Einblenden, FAQ-Suche, Sprachmenü, im PR zusätzlich Galerie und Live-Aktivität.
  - Die Content-Security-Policy bekommt beim Build Hashes (`scripts/csp-headers.mjs`).
- **Betrieb:**
  - Cloudflare Workers mit statischen Assets im Konto `cloudflare@lacodea.com`, Zone `simple-time.app`.
  - Veröffentlichung über Workers Builds bei Push auf `main`.
  - CI auf GitHub mit Build, Header-Prüfung, npm audit, gitleaks und Playwright mit axe.
  - Ein Ruleset verlangt PR und grüne Prüfungen vor dem Merge.
- **Abläufe:**
  - Navigation und Sprachwechsel, die Seite bleibt dabei erhalten
  - Hell/Dunkel
  - FAQ-Suche und Direktlinks auf Antworten (`/faq/#id`)
  - Kontakt per `mailto:`
  - App-Store-Links
  - Links aus der App: `www.simple-time.app/<sprache>/contact/`, `/privacy/`, `/#faq`

---

## 3. Durchgeführte Tests

| Prüfung | Live | PR #11 |
|---|---|---|
| `check:content` (18 Sprachen, Schlüssel, Platzhalter, Links in Texten) | ✅ | ✅ |
| Build + `check-headers` (CSP-Hashes, Header live am lokalen Server) | ✅ | ✅ |
| Bestehende Playwright-Reihe (11 Seiten, Tastatur, Menüs, axe) | ✅ 18/18 | ✅ 18/18 |
| **Neu:** Crawl aller 108 Seiten: Status, `lang`/`dir`, Titel, Beschreibung, Canonical, og-Daten, eine `h1`, Überschriften-Stufen, Alt-Texte, JSON-LD, Platzhalter im Text, hreflang vollständig und gegenseitig, interne Links und Sprungmarken (486), Bilder in den Kopfdaten | ✅ (5 Hinweise S1) | ✅ (5 Hinweise S1) |
| **Neu:** 404 (Status, `noindex`, Sprache, Weg zurück) | ✅ | ✅ |
| **Neu:** ohne JavaScript (7 Seiten, nichts unsichtbar) | ✅ | ✅ |
| **Neu:** Speicher gesperrt, Schriften und Bilder fallen aus | ✅ | ✅ |
| **Neu:** Zurück/Vor/Neu laden, Thema bleibt, Sprachwechsel behält die Seite | ✅ | ✅ |
| **Neu:** axe auf allen 109 Seiten, hell **und** dunkel (218 Aufrufe) | ✅ 0 Verstöße | ✅ 0 Verstöße |
| **Neu:** Umbruch bei 320 px (= 400 % Zoom), Handy quer, 2560 px | ❌ 1 Seite (A2) | ❌ 2 Seiten (A2) |
| FAQ-Suche mit Schadeingaben (`<img onerror>`, `<script>`, Regex-Zeichen, 5000 Zeichen, Leerzeichen, Escape) | – | ✅ alles als Text, kein Dialog, kein Fehler |
| Netzwerk: Hosts, Cookies, Speicher beim Laden | ✅ nur eigener Host, 0 Cookies, nichts gespeichert | ✅ ebenso |
| Neue Live-Prüfung `check:live` (Server und DNS) | ❌ 12 Abweichungen (Abschnitt 4) | – |
| Lasttest (k6, 8 VUs, 40 s, Live) | ✅ 909 Abrufe, 0 Fehler, Median 41 ms, p95 97 ms, p99 196 ms | – |
| npm audit (voll und Produktion) | ✅ 0 | ✅ 0 |

**Geschwindigkeit** (Labor, Chromium, kalter Cache, Median aus 3 Läufen; Handy = langsames 4G mit 150 ms RTT, 1,6 Mbit/s und 4× CPU):

| Seite | Live Handy FCP / LCP | PR Handy FCP / LCP | Live Desktop LCP | PR Desktop LCP | CLS |
|---|---|---|---|---|---|
| `/` | 1,67 / 2,19 s | 1,32 / 1,32 s | 1,10 s | 0,77 s | 0 |
| `/de/` | 1,70 / 2,23 s | 1,28 / 1,28 s | 1,16 s | 0,61 s | 0 |
| `/de/faq/` | 1,63 / 1,63 s | 1,26 / **2,47 s** | 0,32 s | **1,85 s** | 0 |
| `/pro/` | 1,60 / 2,10 s | 1,60 / **3,27 s** | 1,19 s | **1,67 s** | 0 |
| `/ar/` | 1,80 / 2,65 s | 1,87 / 3,10 s | 1,18 s | 0,75 s | ≤ 0,003 |

TTFB lag bei 85–441 ms. Blockierende Rechenzeit (TBT) war 0, nur einmal 25 ms. Einschränkung: Der Mac war während der Messung sehr ausgelastet (Load bis 275, durch andere Sitzungen). Die netzgebundenen Werte sind belastbar, die rechenabhängigen eher zu hoch.

**Echte Besucher** (Cloudflare-Auswertung, Zone im neuen Konto, 13.–16.10.):
- **Aufkommen:** Am 13.10. waren es 7 510 Anfragen, darunter meine Tests, am 14.10. 2 504 Anfragen mit 356 Besuchern. Die meisten Anfragen kamen über Mobile Safari, US/DE.
- **Fehlercodes:** 72 % der Anfragen am 14.10. waren 404. Sie stammen fast ausschließlich von Scannern (`/.env`, `/wp-admin`, `/.aws/credentials`, `/mcp.json`), dazu 405 auf POST und 403 von der WAF.
- **Kaputte Links:** Keine 404 sieht nach einem echten kaputten Link aus.
- **Nicht verfügbar:** Felddaten zu LCP/INP gibt es nicht. Web Analytics ist bewusst aus, und das CrUX-Kontingent von PageSpeed war erschöpft (Abschnitt 7).

---

## 4. Befunde

### Betrieb

**B1 · Hoch · bestätigt – Automatische Veröffentlichung unterbrochen**
- **Betroffen:** Cloudflare Workers Builds `simpletime-website` (Konto lacodea), Repo `simpletime-hq/simpletime-website`
- **Auswirkung:** Ein Merge auf `main` – etwa von PR #11 – wird nicht veröffentlicht, und zwar ohne Fehlermeldung. Auch die Vorschau-Links in PRs entstehen nicht mehr im neuen Konto.
- **Beleg:**
  - GitHub API: `full_name` = `simpletime-hq/simpletime-website`, Organisation, zuletzt geändert am 13.10. um 19:00.
  - Cloudflare API: Die Trigger zeigen noch auf `simple-time/simpletime-website`, `pages/connections` ist leer `[]`, und der einzige Build stammt vom 12.10. um 23:24.
- **Nachstellen:** Cloudflare → Workers & Pages → simpletime-website → Settings → Builds. Dort fehlt eine verbundene Installation.
- **Vorschlag:**
  1. In der Organisation `simpletime-hq` die GitHub-App „Cloudflare Workers and Pages“ installieren, nur für `simpletime-website`.
  2. Im Worker unter Builds das Repo neu verbinden.
  3. Einen Build anstoßen und prüfen, dass auf dem PR wieder der Check „Workers Builds“ erscheint.

  **Das muss vor dem Merge von PR #11 passieren.**

**B2 · Niedrig · bestätigt – Keine Überwachung, keine automatischen Abhängigkeits-Hinweise**
- **Auswirkung:** Ausfall, Fehlkonfiguration oder ein Zertifikatsproblem fallen erst auf, wenn es jemand merkt. B1 ist genau so ein Fall. Sicherheitsupdates kommen nur von Hand.
- **Beleg:**
  - GitHub: „Dependabot alerts are disabled for this repository“.
  - Es gibt keine geplanten Workflows.
  - Die Node-Version ist nur in der CI fest (22.23.2), lokal läuft 24.13, in Workers Builds ist sie unbekannt.
- **Vorschlag:**
  - `npm run check:live` und `npm run test:site` wöchentlich als geplanten GitHub-Workflow laufen lassen. Bei Fehlschlag kommt eine E-Mail.
  - Dependabot einschalten: Alerts, Security-Updates und Versions-Updates für npm und GitHub Actions.
  - Eine Datei `.node-version` mit `22` anlegen.

**B3 · Niedrig · bestätigt – Öffentliche Kopien der Website auf workers.dev**
- **Betroffen:** `simpletime-website.white-bread-a79a.workers.dev` (neues Konto) und `simpletime-website.polished-resonance-9e49.workers.dev` (altes Konto, veraltet)
- **Auswirkung:** Doppelte Inhalte. Das Canonical mildert das ab, aber die alte Kopie veraltet und bleibt erreichbar.
- **Beleg:** Beide antworten mit 200 und ohne `X-Robots-Tag` (`check:live`). Die Branch-Vorschauen tragen korrekt `noindex`.
- **Vorschlag:**
  - In `wrangler.jsonc` `"workers_dev": false` setzen. Vorschau-URLs bleiben davon getrennt einstellbar.
  - Im alten Konto den Worker löschen, wie beim Kontoumzug ohnehin geplant.

### Sicherheit (Server, DNS, E-Mail)

**S-TLS · Mittel · bestätigt – TLS 1.0 und 1.1 werden noch angenommen**
- **Beleg:**
  - `openssl s_client -tls1 -cipher 'DEFAULT:@SECLEVEL=0'` ergibt „Protocol: TLSv1“, ebenso bei TLS 1.1.
  - Die Zonen-Einstellung lautet `min_tls_version: "1.0"`.
- **Auswirkung:** veraltete Protokolle (RFC 8996), betrifft Compliance-Prüfungen und Scanner-Bewertungen.
- **Vorschlag:** Cloudflare → SSL/TLS → Edge Certificates → Minimum TLS Version **1.2**.

**S-HTTPS · Niedrig · bestätigt – Kein Umschalten auf HTTPS, kein HSTS**
- **Beleg:**
  - `curl -I http://simple-time.app/` antwortet mit `200`, also mit Inhalt über unverschlüsseltes HTTP.
  - Ein `Strict-Transport-Security`-Header fehlt.
  - Zonen-Einstellungen: `always_use_https: off`, HSTS `enabled: false`.
- **Auswirkung:** Browser sind geschützt, weil `.app` in der HSTS-Preload-Liste steht. Andere Programme und manche Crawler bekommen die Seite aber unverschlüsselt.
- **Vorschlag:** „Always Use HTTPS“ einschalten und HSTS setzen: `max-age=31536000; includeSubDomains`, gern auch `preload`.

**S-DMARC · Mittel · bestätigt – E-Mail-Absender fälschbar**
- **Beleg:** `_dmarc` → `v=DMARC1; p=none;`, SPF `v=spf1 include:_spf-eu.ionos.com ~all`.
- **Auswirkung:** Mails, die angeblich von `contact@simple-time.app` kommen, werden nicht abgewiesen. Das ist ein Risiko für Phishing gegenüber Nutzern, die dir schreiben.
- **Vorschlag:**
  1. DMARC mit Berichten (`rua=`) einführen.
  2. Nach zwei bis vier Wochen auf `p=quarantine` gehen, dann auf `p=reject`.
  3. SPF auf `-all` umstellen.
  4. Danach dasselbe für `mylifeapp.app`.

**S-DNS · Niedrig · bestätigt – Kein DNSSEC, kein CAA**
- **Beleg:** keine DS-, DNSKEY- oder CAA-Einträge (`dig`, DoH).
- **Vorschlag:**
  - Bei Cloudflare DNSSEC aktivieren und den DS-Eintrag bei IONOS hinterlegen.
  - CAA nur für die Zertifizierungsstellen setzen, die Cloudflare nutzt (laut Cloudflare-Doku).

**S-TXT · Niedrig · bestätigt – Kein `/.well-known/security.txt`**
- **Vorschlag:** `public/.well-known/security.txt` anlegen, mit `Contact: mailto:contact@simple-time.app` und `Expires:`.

**S-POS · Info – Was gut ist** (live geprüft):
- CSP mit Hashes, `default-src 'self'`, `frame-ancestors 'none'`, `form-action 'none'`, `upgrade-insecure-requests`
- COOP, `X-Frame-Options: DENY`, `nosniff`, Referrer-Policy, Permissions-Policy
- keine Cookies, keine offenliegenden Dateien (`/.git/*`, `/.env`, `package.json`, `wrangler.jsonc`, `_headers`, `src/` → 404) und keine Source-Maps
- npm audit 0
- Actions per SHA gepinnt, gitleaks über die ganze Historie

Die Permissions-Policy enthält noch das veraltete `interest-cohort` (Info).

### Barrierefreiheit

**A1 · Mittel · bestätigt · nur PR – Fokus hinter dem offenen Handy-Menü**
- **Betroffen:** `src/components/Navbar.astro`, Handy-Menü als Vollbild
- **Auswirkung:** Tastatur- und Schaltersteuerung landet in Inhalten, die man nicht sieht. Das verstößt gegen WCAG 2.2 · 2.4.11 „Focus Not Obscured“ (AA).
- **Nachstellen:** 390 px breit → Menü per Tastatur öffnen → sechsmal Tab.
- **Beleg:** Fokusfolge `MENÜ:Funktionen … MENÜ:Im App Store` → `SEITE(verdeckt):Download on the App Store`, `SEITE(verdeckt):Funktionen ansehen` und so weiter. Im Live-Stand ist das kein Problem, weil das Menü dort kein Vollbild ist.
- **Vorschlag:** Bei offenem Menü `inert` auf `main` und `footer` setzen, oder den Fokus im Menü halten. Den Test in `browser-a11y.spec.mjs` um diese Prüfung ergänzen.

**A2 · Niedrig · bestätigt – Armenisch läuft bei 320 px seitlich über**
- **Betroffen:**
  - Live: `/hy/imprint/`, Überschrift „Պատասխանատվության հրաժարում“, 18 px Überlauf.
  - PR zusätzlich: `/hy/` mit der FAQ-Überschrift „Հարցեր և պատասխաններ։“, 35 px Überlauf, weil die Rasterspalte nicht schrumpft.
- **Auswirkung:** Bei 400 % Zoom muss man seitlich scrollen. Das verstößt gegen WCAG 1.4.10 „Reflow“.
- **Beleg:** `npm run test:site` → Prüfung „reflow“.
- **Vorschlag:**
  - `overflow-wrap: break-word` (dazu `hyphens: auto`) für `h1`–`h3`.
  - Im FAQ-Raster der Startseite `min-width: 0` für die Spalten.

**A3 · Niedrig · bestätigt – Hell/Dunkel-Schalter ohne Zustand**
- **Betroffen:** `#theme-toggle` in beiden Ständen.
- **Auswirkung:** Screenreader hören „Zwischen hell und dunkel wechseln“, erfahren aber nicht, was gerade aktiv ist (WCAG 4.1.2).
- **Vorschlag:** `aria-pressed` beim Laden und beim Umschalten setzen.

**A-POS · Info:** 0 axe-Verstöße auf allen Seiten, hell und dunkel, in beiden Ständen. Dazu kommen Sprunglink, sichtbarer Fokus, `lang` und `dir` je Sprache, das Sprachmenü als `<details>` (funktioniert ohne JavaScript), Alt-Texte überall und reduzierte Bewegung (nach dem Fix in PR #11).

### Geschwindigkeit

**P1 · Mittel · bestätigt – 71 KB blockierendes CSS auf jeder Seite, 81 % davon chinesische und japanische Schriften**
- **Betroffen:** `src/styles/fonts.css` (wird in jede Seite eingebunden), `dist/_astro/Layout.*.css`
- **Beleg:**
  - 235 KB roh, davon 191 KB `@font-face`: Noto Sans JP 121 Regeln (91 KB), Noto Sans SC 96 Regeln (88 KB), Inter 40 Regeln (11 KB).
  - Ohne `@font-face` wären es 44 KB roh bzw. 9 KB gzip.
  - Live-Messung: FCP 1,6–1,8 s auf langsamem 4G.
- **Vorschlag:** Die Schriftdefinitionen nach Schriftsystem aufteilen und die CJK-Regeln nur auf `/ja/` und `/zh/` einbinden, zum Beispiel über eine sprachabhängige CSS-Datei im Layout. Das spart auf 16 von 18 Sprachen rund 62 KB blockierendes CSS, geschätzt 0,3–0,5 s FCP auf langsamem 4G.

**P2 · Mittel · bestätigt · nur PR – Einblend-Animation verzögert das LCP auf Unterseiten**
- **Betroffen:** `PageHeader.astro` (`h1` und Untertitel mit `.reveal`), Pro-Kopf, `.js .reveal` mit `opacity: 0`
- **Auswirkung:** Das LCP-Element wird erst nach dem Einblenden gezählt. `/de/faq/` am Desktop: FCP 0,72 s, LCP 1,85 s (live: 0,32 s). `/pro/` am Handy: LCP 3,27 s, das liegt über der 2,5-s-Grenze von Core Web Vitals.
- **Vorschlag:** Kopfbereiche oberhalb der Falz nicht über die Deckkraft einblenden. Entweder sofort zeigen oder nur `transform` animieren.

**P-POS · Info:**
- **Caching:** HTML `max-age=0, must-revalidate` mit ETag, Assets `max-age=31536000, immutable`, Brotli, HTTP/3, durchgehend Cache-HIT.
- **Stabilität und Rechenzeit:** CLS ≈ 0, TBT ≈ 0.
- **Bilder:** WebP mit `srcset`.
- **Schriften:** Im PR lädt die Startseite keine Schriften mehr (Systemschrift), FCP etwa 0,4 s schneller.

### Suchmaschinen

**SEO1 · Niedrig · bestätigt – `www` ohne Weiterleitung**
- **Beleg:** `https://www.simple-time.app/` antwortet mit 200 (`check:live`). Die App verlinkt ausschließlich auf `www.` (`SimpleTime/Website.swift: base = "https://www.simple-time.app"`).
- **Auswirkung:** Zwei Hosts mit gleichem Inhalt. Das Canonical zeigt auf die nackte Domain und mildert das ab.
- **Vorschlag:** Bei Cloudflare eine Redirect Rule `www.simple-time.app/*` → `https://simple-time.app/${1}` mit 301. Die Links aus der App funktionieren weiter. In einer späteren App-Version kann `base` ohne `www` verwenden.

**S1 · Niedrig · bestätigt – Fünf Meta-Beschreibungen über 170 Zeichen**
- **Betroffen:** `/de/` (179), `/el/` (175), `/el/privacy/` (173), `/el/pro/` (172), `/fr/pro/` (171)
- **Vorschlag:** auf höchstens 155 Zeichen kürzen. Die Crawl-Prüfung meldet das als Warnung.

**S2 · Niedrig · bestätigt – Strukturierte Daten ohne Bewertung**
- **Beleg:** `SoftwareApplication` ohne `aggregateRating` oder `review`. Ohne eines davon zeigt Google kein Rich Result.
- **Vorschlag:** Nur ergänzen, wenn echte Bewertungen sichtbar auf der Seite stehen. Sonst so lassen.

**S3 · Info:**
- Die Sitemap hat kein `lastmod`.
- Die Schrägstrich-Weiterleitung ist `307` statt `301` (Cloudflare-Standard; alle internen Links haben den Schrägstrich bereits).
- `hreflang` und `lang` sind `pt` und `zh`, präziser wären `pt-PT` und `zh-Hans`.
- `/en/` antwortet mit 404.

**SEO-POS · Info:**
- Alle 108 Seiten sind indexierbar, haben ein korrektes Canonical, `og:url` und `og:image` je Sprache.
- hreflang ist vollständig mit `x-default` und gegenseitig.
- Die robots.txt verweist auf die Sitemap mit 108 URLs.
- Die 404-Seite antwortet mit `404` und `noindex`.
- Die Vorschauen tragen `noindex`.

### Inhalte und Vertrauen

**C1 · Niedrig · bestätigt – Kein Smart-App-Banner**
- **Beleg:** In keiner Seite steht `<meta name="apple-itunes-app" …>`.
- **Auswirkung:** iPhone-Besucher bekommen nicht den nativen „Laden/Öffnen“-Banner von Safari. Laut Cloudflare kommt der Großteil der Besuche über Mobile Safari.
- **Vorschlag:** `<meta name="apple-itunes-app" content="app-id=6755532037">` im Layout ergänzen.

**C2 · Niedrig · bestätigt – Kleinere Inhaltslücken**
- **App-Store-Links** zeigen fest auf den US-Store (`/us/app/…`). Besser ist `https://apps.apple.com/app/id6755532037`, das leitet in den Store des Besuchers.
- **Das Badge „Download on the App Store“** ist auf allen Sprachen englisch. Apple bietet lokalisierte Badges an.
- **Die 404-Seite** ist nur auf Deutsch, Französisch und Spanisch übersetzt, die anderen 15 Sprachen sehen Englisch.
- **Die FAQ** erklärt den CSV-Export mit Zeitraum (seit 4.6) nicht. Dabei ist das genau die Frage von Stundenzettel-Nutzern.

**C3 · Info:** Kontaktseite und Datenschutzerklärung sprechen von „wir/uns“, das Impressum nennt eine Einzelperson. Das zu bewerten ist deine Entscheidung.

**C4 · Info:** Die Neuerungen von 4.7 (Zeitzone der Erfassung, neutrale Anzeige außerhalb der App) stehen noch nicht auf der Website. Store-Beschreibung und Website zusammen mit dem Release anpassen. Heute sind sie Satz für Satz deckungsgleich, das habe ich geprüft.

**Positiv:** Die Datenschutzerklärung beschreibt korrekt Cloudflare (inklusive DPF und AV-Vertrag), NEL-Fehlerberichte, das mögliche `__cf_bm` und IONOS für E-Mail. Es gibt keine Platzhalter und keine widersprüchlichen Preise („Preise in der App“). Für jede Sprache existiert ein eigenes Vorschaubild (1200×630).

### Robustheit und Ausfälle

**R1 · Niedrig · bestätigt – Bei gesperrtem Speicher wird der Dunkelmodus ignoriert**
- **Betroffen:** `src/layouts/Layout.astro`, Inline-Skript vor dem ersten Zeichnen
- **Auswirkung:** Sind Website-Daten blockiert (etwa in Safari), wirft schon `localStorage.getItem` eine Ausnahme. Der `try`-Block bricht dann vor `matchMedia` ab, und Nutzer mit Dunkelmodus sehen die helle Seite.
- **Vorschlag:** `matchMedia` außerhalb des Speicherzugriffs auswerten.

**Positiv:**
- Ohne JavaScript ist alles sichtbar.
- Fallen Schriften oder Bilder aus, bleibt die Seite benutzbar und läuft nicht seitlich über.
- Es gibt keine Formulare. Doppelte Absendungen und verlorene Eingaben sind also nicht möglich, und es entstehen keine Fremddienst-Abhängigkeiten zur Laufzeit.

---

## 5. Neue wiederholbare Tests (in diesem Branch)

| Datei | Läuft | Inhalt |
|---|---|---|
| `tests/site-audit.spec.mjs` | in `npm run test:browser` (+5 Tests, etwa 15 s) | Crawl aller Seiten (Kopfdaten, hreflang, Links/Anker, Bilder, JSON-LD, Platzhalter, Konsolenfehler), 404, ohne JavaScript, gesperrter Speicher mit ausfallenden Schriften und Bildern, Zurück/Vor/Neu laden |
| dieselbe Datei | `npm run test:site` (`SITE_AUDIT=1`, etwa 4 min) | axe auf jeder Seite in hell und dunkel, Umbruch bei 320 px, quer und 2560 px |
| `scripts/check-live.mjs` | `npm run check:live` | Live-Server: HTTP→HTTPS, www→Apex, Sicherheits-Header inkl. HSTS, 404, security.txt, workers.dev-Kopien, TLS 1.0/1.1, DNSSEC, CAA, DMARC, SPF. **Heute: 11 ok, 12 Abweichungen.** |

Die schnelle Reihe ist grün (Warnungen: S1). `test:site` zeigt A2 an, `check:live` die Server-Befunde. Beide werden grün, sobald die Maßnahmen umgesetzt sind.

---

## 6. Maßnahmen in sinnvoller Reihenfolge

1. **B1:** GitHub-App für `simpletime-hq` installieren und den Worker neu verbinden. **Vor dem Merge von PR #11.**
2. **PR #11 vor dem Merge nachbessern:**
   - A1: Fokus hinter dem Menü
   - P2: keine Einblendung im Kopfbereich
   - A2: Armenisch umbrechen
   - nebenbei R1 und A3, beides wenige Zeilen
3. **Cloudflare-Zone härten** (etwa 15 Minuten):
   - Minimum TLS 1.2
   - Always Use HTTPS und HSTS
   - Redirect `www` → Apex
   - DNSSEC mit DS bei IONOS, dazu CAA
   - `workers_dev: false` und den alten Worker löschen
4. **E-Mail-Schutz:** DMARC mit Berichten, dann `quarantine`/`reject`, SPF `-all`. Danach dasselbe für `mylifeapp.app`.
5. **Tempo:** die CJK-Schriftdefinitionen nur noch auf `/ja/` und `/zh/` laden (P1).
6. **Inhalte und SEO:**
   - Smart-App-Banner (C1)
   - fünf Beschreibungen kürzen (S1)
   - App-Store-Link ohne US-Storefront
   - FAQ zum CSV-Export mit Zeitraum
   - 404 in allen Sprachen
   - `security.txt`
7. **Betrieb:** `check:live` und `test:site` wöchentlich planen, Dependabot einschalten, `.node-version` anlegen (B2).
8. **Mit dem 4.7-Release:** Store-Beschreibung und Website gemeinsam um die neuen Funktionen ergänzen (C4).

---

## 7. Nicht geprüft – braucht menschliche Bewertung oder weiteren Zugang

| Bereich | Warum nicht | Wie |
|---|---|---|
| **Safari/WebKit** (iPhone, iPad, Mac) | Playwright-WebKit ist nicht installiert. Der iOS-Simulator lieferte bei Load ~275 nur ein schwarzes Bild. | Auf echtem iPhone und Mac durchklicken (Start, Galerie, Menü, Dunkelmodus, Zoom). Alternativ den Download von Playwright-WebKit freigeben (etwa 80 MB). |
| **Firefox** | nicht installiert | Firefox-Stichprobe oder Playwright-Firefox freigeben (etwa 90 MB) |
| **Screenreader** (VoiceOver, TalkBack) und echte Vergrößerung | nur automatisch geprüft (axe, Struktur) | VoiceOver-Durchgang durch Start, FAQ-Suche und Sprachmenü |
| **Felddaten echter Besucher** (CrUX, INP) | PageSpeed-API-Kontingent erschöpft, Web Analytics bewusst aus | pagespeed.web.dev im Browser oder Search Console → Core Web Vitals |
| **Google Search Console** (Indexierung, hreflang-Fehler) | kein Zugang | Bericht „Seiten“ und „Sitemaps“ ansehen |
| **Rechtliche Prüfung** von Impressum und Datenschutz | keine Rechtsberatung | Rechtsanwalt oder Datenschutzberatung |
| **Gestaltung von PR #11** | Geschmack und Markenwirkung | deine Abnahme auf echten Geräten |
| **Einstellungen bei Cloudflare, IONOS und GitHub ändern** | nur lesend geprüft. Änderungen an DNS und Zone blockt der Auto-Modus; die GitHub-App für die Organisation braucht Owner-Rechte. | gemeinsam umsetzen, ich sage die Klicks an |
| **Hoher Lasttest** | bewusst nicht gegen das CDN. Ein Laptop als Quelle misst sich selbst. | nicht nötig für eine statische Seite. Bei Bedarf über einen Lastdienst. |

---

## 8. Annahmen und unklare Anforderungen

Was ich angenommen habe, weil es nirgends festgelegt ist:

| Annahme | Begründung | Wenn sie nicht stimmt |
|---|---|---|
| **Es gibt keine geschützten Bereiche.** | Der Worker liefert nur statische Dateien (`wrangler.jsonc`: nur `assets`, kein Skript). Es gibt keine Formulare, keine Anmelde-Routen, und jede unbekannte Adresse antwortet mit 404. | Dann bräuchte ich die Adresse und ein Testkonto. Zugriffsrechte und Sitzungen sind sonst ungeprüft. |
| **Maßstab Barrierefreiheit: WCAG 2.2 AA** | üblicher Standard. Ob eine gesetzliche Pflicht besteht (etwa nach BFSG), habe ich nicht geprüft. | Ein anderer Maßstab ändert die Einstufung von A1–A3, nicht die Befunde. |
| **Maßstab Tempo: Core Web Vitals „gut“** (LCP ≤ 2,5 s, CLS ≤ 0,1) im strengen Labor-Profil „langsames 4G“ | entspricht dem Mobilprofil von Lighthouse | Bei schnellem Netz sind alle Seiten unter 2 s. P1 und P2 bleiben trotzdem sinnvoll, wiegen dann aber leichter. |
| **Ziel-Browser:** aktuelles Safari (iOS, macOS), Chrome, Firefox | Laut Cloudflare kommt der Großteil der Besuche über Mobile Safari. | – |
| **Kein Tracking und keine Cookies sind gewollt.** | Datenschutzerklärung und CSP sind darauf ausgelegt. | Für Analysedienste müssten CSP, Datenschutzerklärung und gegebenenfalls ein Einwilligungsbanner angepasst werden. |
| **`simple-time.app` ohne `www` ist die Hauptadresse.** | Canonical, `og:url` und Sitemap nutzen sie. | Dann die Weiterleitung umgekehrt einrichten und die Canonicals anpassen. |
| **Der Umzug des Repos nach `simpletime-hq` war gewollt.** | Er fand am 13.10. um 19:00 statt, nach dem Cloudflare-Umzug. | Wenn nicht: Repo zurück zu `simple-time` übertragen. Ob die dortige App-Installation es dann wieder sieht, danach prüfen. |
| **PR #11 ist der nächste Stand.** | Darum sind beide Stände geprüft und PR-Befunde getrennt markiert. | – |

Offen und von dir zu entscheiden:
- **Ansprache:** „wir/uns“ auf Kontakt- und Datenschutzseite trotz Einzelunternehmer (C3)
- **US-Store:** ob der App-Store-Link bewusst auf den US-Store zeigt (C2)
- **404-Seite:** ob sie alle 18 Sprachen tragen soll (C2)
- **Härte der E-Mail-Regeln:** ob DMARC `reject` gewollt ist. Das setzt voraus, dass alle legitimen Absender, etwa IONOS und Kontaktformulare anderer Dienste, über SPF/DKIM abgedeckt sind (S-DMARC).

---

## 9. Umsetzung (Stand 16.10.2026, 4 Uhr)

| Befund | Stand | Wo |
|---|---|---|
| A1 Fokus hinter dem Menü | erledigt: Seite, Footer und Sprunglink sind bei offenem Menü `inert` | PR #11 `ff0578f` |
| P2 Seitenköpfe und LCP | erledigt: LCP fällt auf allen gemessenen Seiten auf das erste Zeichnen; `/pro/` am Handy 3,9 → 2,3 s | PR #11 `ff0578f` |
| A2 Armenisch bei 320 px | erledigt: `test:site` ohne Überlauf auf allen Seiten | PR #11 `ff0578f` |
| A3 Zustand des Schalters | erledigt: „Dunkelmodus“ (Apples Begriff) mit `aria-pressed` | PR #11 `ff0578f` |
| R1 Dunkelmodus ohne Speicher | erledigt | PR #11 `ff0578f` |
| P1 CJK-Schriften | erledigt: Layout-CSS 241 → 58 KB roh, etwa 12 KB gzip, auf 16 von 18 Sprachen | PR #11 `a741acf` |
| C1 Smart-App-Banner | erledigt | PR #11 `a741acf` |
| C2 Store-Link, 404, FAQ | erledigt: Link ohne `/us/`, 404 in 18 Sprachen, CSV-Zeitraum in der FAQ. Das lokalisierte Badge bleibt offen, weil es Apples Grafiken zum Herunterladen braucht. | PR #11 `a741acf` |
| S1 Beschreibungen | erledigt: Crawl ohne Warnung | PR #11 `a741acf` |
| S-TXT `security.txt` | erledigt, gültig bis 15.10.2027. `check:live` warnt 30 Tage vorher. | PR #11 `a741acf` |
| B3 workers.dev | `workers_dev: false` erledigt. Der Worker im alten Konto bleibt offen (löschen beim Schließen des Kontos). | PR #11 `a741acf` |
| B2 Betrieb | erledigt: `.node-version`, Dependabot (Konfiguration und Einstellungen), Secret Scanning mit Push-Schutz, wöchentliche Live-Prüfung | PR #12 und Repo-Einstellungen |
| B1 Workers Builds | offen: Die GitHub-App für `simpletime-hq` fehlt (geprüft: keine Installation in der Organisation) | Cloudflare und GitHub |
| S-TLS, S-HTTPS, SEO1, S-DNS, S-DMARC | offen: Einstellungen an Zone und DNS | Cloudflare und IONOS |
