export const languages = {
  en: 'English',
  de: 'Deutsch',
  nl: 'Nederlands',
  sv: 'Svenska',
  fr: 'Français',
  it: 'Italiano',
  es: 'Español',
  pt: 'Português',
  ru: 'Русский',
  uk: 'Українська',
  el: 'Ελληνικά',
  tr: 'Türkçe',
  hy: 'Հայերեն',
  ar: 'العربية',
  he: 'עברית',
  hi: 'हिन्दी',
  zh: '简体中文',
  ja: '日本語',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'meta.title': 'SimpleTime – Time Tracker for iOS',
    'meta.description':
      'Track time effortlessly. SimpleTime is a clean, intuitive time tracker for iPhone, iPad and Mac. No accounts, no tracking — your data stays with you.',

    'meta.contact.description':
      'Questions, feedback or a bug to report? Reach SimpleTime by email — every message is read and answered within a few working days.',
    'meta.privacy.description':
      'How SimpleTime handles your data: everything stays on your device, iCloud backup is optional and encrypted, and there is no analytics or tracking.',
    'meta.imprint.description':
      'Legal notice for simple-time.app under § 5 DDG — operator, contact details and liability information for the SimpleTime app and website.',

    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.contact': 'Contact',
    'nav.appstore': 'View on App Store',
    'nav.faq': 'FAQ',
    'nav.menu': 'Open menu',
    'nav.menu.close': 'Close menu',
    'nav.language': 'Language',
    'nav.theme': 'Switch between light and dark',
    'skip.content': 'Skip to content',

    'hero.eyebrow': 'Time Tracker for iOS',
    'hero.title.part1': 'Track time',
    'hero.title.part2': 'effortlessly.',
    'hero.subtitle':
      'SimpleTime helps you spend your time consciously and efficiently. Whether work, studies, training or personal projects — track your activities in a clear, structured way without unnecessary complexity.',
    'hero.cta.appstore': 'Download on the App Store',
    'hero.cta.features': 'See features',
    'hero.availability': 'Free · iPhone · iPad · Mac',
    'hero.proof.price': 'Free to download',
    'hero.proof.account': 'No account needed',
    'hero.proof.private': 'Data stays on your device',

    'features.title': 'Focus on what truly matters: your time.',
    'features.subtitle': 'Everything you need for conscious time tracking — nothing you don’t.',
    'features.instant.title': 'Start instantly',
    'features.instant.body':
      'One tap is all it takes to begin tracking. Fast, intuitive and distraction-free.',
    'features.structured.title': 'Structured tasks & subtasks',
    'features.structured.body':
      'Organize your activities hierarchically and accurately reflect work, study or project structures.',
    'features.timeline.title': 'Daily view & timeline',
    'features.timeline.body':
      'Keep your day in view at a glance — start and end times, duration and optional notes.',
    'features.stats.title': 'Automatic statistics',
    'features.stats.body':
      'Clear and insightful charts show your activities on a daily, weekly and monthly basis.',
    'features.icloud.title': 'Smart iCloud backup',
    'features.icloud.body':
      'Your data is automatically backed up to iCloud — daily or weekly — and syncs across your devices.',
    'features.export.title': 'CSV export',
    'features.export.body':
      'Export your time data for Excel, Numbers or external analysis tools.',
    'features.private.title': 'Private & secure',
    'features.private.body':
      'Your data belongs to you alone. SimpleTime collects no personal information and shares nothing with third parties.',
    'screenshots.track.title': 'Track',
    'screenshots.track.body': 'All your daily activities at a glance.',
    'screenshots.customize.title': 'Customize',
    'screenshots.customize.body': 'Personalize tasks with colors and categories.',
    'screenshots.overview.title': 'Overview',
    'screenshots.overview.body': 'See your entire day in one clear list.',
    'screenshots.timeline.title': 'Timeline',
    'screenshots.timeline.body': 'Visualize your day hour by hour.',
    'screenshots.analyze.title': 'Analyze',
    'screenshots.analyze.body': 'See exactly where your time goes.',
    'screenshots.reports.title': 'Reports',
    'screenshots.reports.body': 'A detailed breakdown per task.',

    'showcase.day.eyebrow': 'The daily view',
    'showcase.day.title': 'Your whole day, in one clear place.',
    'showcase.day.body':
      'Start a task with a single tap and let SimpleTime keep the record. Every entry carries its start and end time, its duration and an optional note — so your day reconstructs itself while you work.',
    'showcase.day.point1': 'One tap to start, one to stop',
    'showcase.day.point2': 'Favorites for what you track every day',
    'showcase.day.point3': 'An hour-by-hour timeline of your day',

    'showcase.insight.eyebrow': 'Statistics',
    'showcase.insight.title': 'See exactly where your time goes.',
    'showcase.insight.body':
      'Daily, weekly and monthly charts turn your entries into a picture you can act on. Need the raw numbers? Export any range as CSV and open it in Excel or Numbers.',
    'showcase.insight.point1': 'Charts by day, week and month',
    'showcase.insight.point2': 'Detailed reports for every task',
    'showcase.insight.point3': 'CSV export for external analysis',

    'showcase.personal.eyebrow': 'Your setup',
    'showcase.personal.title': 'Shaped around how you work.',
    'showcase.personal.body':
      'Give every task its own color, icon and category, and nest subtasks to mirror how a project is really structured. Mark what you use most as a favorite and it stays at the top.',
    'showcase.personal.point1': 'Colors, SF Symbols and emoji',
    'showcase.personal.point2': 'Categories, tasks and subtasks',
    'showcase.personal.point3': 'Favorites always within reach',

    'gallery.title': 'A closer look.',
    'gallery.subtitle': 'Every screen, exactly as it appears on your device.',

    'audience.title': 'Made for everyone who values their time.',
    'audience.subtitle':
      'Students, freelancers, employees, creatives, athletes — anyone who wants to understand how they truly spend their time.',
    'audience.work.title': 'Work & freelance',
    'audience.work.body':
      'Keep client work and projects apart, and export a clean record whenever you need one.',
    'audience.study.title': 'Studies & learning',
    'audience.study.body':
      'See how much time a subject really takes and plan the next week from actual numbers.',
    'audience.training.title': 'Training & habits',
    'audience.training.body':
      'Log sessions, sleep or practice and watch consistency build up over the weeks.',
    'audience.everyday.title': 'Everyday life',
    'audience.everyday.body':
      'Find out where the hours actually go — and decide for yourself what you want to change.',

    'faq.title': 'Questions, answered.',
    'faq.subtitle': 'Everything worth knowing before you download.',
    'faq.free.q': 'Is SimpleTime really free?',
    'faq.free.a':
      'Yes. SimpleTime is free to download from the App Store and runs on iPhone, iPad and Mac.',
    'faq.account.q': 'Do I need an account?',
    'faq.account.a':
      'No. There is no sign-up and no login. You open the app and start tracking straight away.',
    'faq.data.q': 'Where is my data stored?',
    'faq.data.a':
      'Exclusively on your device. If you turn on iCloud backup, your data is transferred encrypted to your own iCloud account. We have no access to it at any point.',
    'faq.sync.q': 'Does it sync across my devices?',
    'faq.sync.a':
      'Yes, through iCloud. Backups run daily or weekly, and your entries stay in sync across iPhone, iPad and Mac.',
    'faq.export.q': 'Can I get my data out again?',
    'faq.export.a':
      'At any time. SimpleTime exports your time data as CSV, ready for Excel, Numbers or any other analysis tool.',
    'faq.tracking.q': 'Does the app track me?',
    'faq.tracking.a':
      'No. SimpleTime contains no analytics SDKs, no advertising and no third-party crash reporting, and it creates no user profiles.',

    'cta.title': 'Ready to start tracking?',
    'cta.subtitle': 'Available free on iPhone, iPad and Mac.',
    'cta.button': 'Download on the App Store',

    'footer.tagline': 'Track time effortlessly.',
    'footer.legal': 'Legal',
    'footer.product': 'Product',
    'footer.appstore': 'App Store',
    'footer.contact': 'Contact',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',
    'footer.copyright': '© {year} Luca Efinger. All rights reserved.',

    'contact.title': 'Contact',
    'contact.subtitle': 'Questions, feedback or ideas? Get in touch.',
    'contact.email.label': 'Email',
    'contact.email.body':
      'Drop us a line at the address below — we read every message and reply as quickly as we can.',
    'contact.response':
      'We usually reply within a few working days. For bugs, please include your device model and iOS version.',

    'imprint.title': 'Imprint',
    'imprint.country': 'Germany',
    'imprint.according': 'Information according to § 5 DDG',
    'imprint.contact': 'Contact',
    'imprint.responsible': 'Responsible for content according to § 18 Abs. 2 MStV',
    'imprint.disclaimer.title': 'Disclaimer',
    'imprint.disclaimer.liability.title': 'Liability for content',
    'imprint.disclaimer.liability.body':
      'As a service provider we are responsible for our own content on these pages according to general law. According to Art. 8 DSA, however, we are not obliged to monitor transmitted or stored external information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected. A corresponding liability is only possible from the point in time of knowledge of a specific infringement. Upon becoming aware of corresponding infringements, we will remove such content immediately.',
    'imprint.disclaimer.links.title': 'Liability for links',
    'imprint.disclaimer.links.body':
      'Our offer contains links to external websites of third parties whose content we cannot influence. Therefore we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of an infringement. Upon becoming aware of any infringements, we will remove such links immediately.',
    'imprint.disclaimer.copyright.title': 'Copyright',
    'imprint.disclaimer.copyright.body':
      'The content and works on these pages created by the site operator are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.',

    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last updated',
    'privacy.intro.title': 'Overview',
    'privacy.intro.body':
      'The protection of your personal data is important to us. This privacy policy explains what data is processed when you use the SimpleTime app and this website, and how. In short: we collect as little as possible and share nothing with third parties.',
    'privacy.app.title': 'The SimpleTime App',
    'privacy.app.body':
      'SimpleTime does not collect any personal information. All data you enter — activities, tasks, categories, notes and times — is stored exclusively on your device. You can optionally enable iCloud backup; in that case your data is transferred encrypted via Apple’s iCloud infrastructure to your own iCloud account. We have no access to this data at any time.',
    'privacy.app.nocollect.title': 'No analytics, no tracking',
    'privacy.app.nocollect.body':
      'The app contains no analytics SDKs, no advertising, no crash reporting tools from third parties and no user tracking. No user profiles are created.',
    'privacy.website.title': 'This Website',
    'privacy.website.body':
      'This website is hosted on Cloudflare Workers. When you access it, your browser technically transmits an IP address and a user agent to the server, which is unavoidable for the delivery of any website. Cloudflare may temporarily store this information in server log files for security purposes. We ourselves do not collect, store or analyse any such data. This website uses no cookies, no analytics, no tracking and no third-party fonts — the Inter font is delivered from our own server.',
    'privacy.website.hosting.title': 'Hosting',
    'privacy.website.hosting.body':
      'Provider: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA. More information can be found in Cloudflare’s privacy policy at https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'Content Delivery Network',
    'privacy.website.cdn.body':
      'To deliver this website quickly and protect it against attacks, we use Cloudflare, a content delivery network and reverse proxy provided by Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA. When you access the site, your request passes through Cloudflare’s servers. Cloudflare processes technical connection data — in particular your IP address and user agent — to deliver content, detect security threats and block malicious traffic. For bot protection and session security Cloudflare may set technically necessary cookies (e.g. __cf_bm, _cfuvid); these are not used for tracking or analytics. The legal basis is our legitimate interest in a secure and performant website under Art. 6 (1) (f) GDPR. Cloudflare is certified under the EU-U.S. Data Privacy Framework, and a data processing agreement is in place. Further information can be found in Cloudflare’s privacy policy at https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'Your Rights',
    'privacy.rights.body':
      'Under the GDPR you have the right to information, correction, deletion, restriction of processing, data portability and to object to processing. You can reach us at any time using the contact details below.',
    'privacy.contact.title': 'Contact',
    'privacy.contact.body': 'For questions regarding data protection please contact:',
    'privacy.changes.title': 'Changes',
    'privacy.changes.body':
      'We may update this privacy policy from time to time to reflect changes in the app, the website or legal requirements. The current version is always available here.',
  },
  de: {
    'meta.title': 'SimpleTime – Zeiterfassung für iOS',
    'meta.description':
      'Zeit mühelos tracken. SimpleTime ist ein klarer, intuitiver Zeittracker für iPhone, iPad und Mac. Ohne Account, ohne Tracking — deine Daten bleiben bei dir.',

    'meta.contact.description':
      'Fragen, Rückmeldungen oder ein Fehler? Schreib SimpleTime eine E-Mail — jede Nachricht wird gelesen und innerhalb weniger Werktage beantwortet.',
    'meta.privacy.description':
      'Wie SimpleTime mit deinen Daten umgeht: Alles bleibt auf deinem Gerät, das iCloud-Backup ist optional und verschlüsselt, kein Analytics, kein Tracking.',
    'meta.imprint.description':
      'Impressum für simple-time.app nach § 5 DDG — Betreiber, Kontaktdaten und Haftungshinweise zur SimpleTime-App und zur Website.',

    'nav.features': 'Funktionen',
    'nav.screenshots': 'Screenshots',
    'nav.contact': 'Kontakt',
    'nav.appstore': 'Im App Store ansehen',
    'nav.faq': 'FAQ',
    'nav.menu': 'Menü öffnen',
    'nav.menu.close': 'Menü schließen',
    'nav.language': 'Sprache',
    'nav.theme': 'Zwischen hell und dunkel wechseln',
    'skip.content': 'Zum Inhalt springen',

    'hero.eyebrow': 'Zeiterfassung für iOS',
    'hero.title.part1': 'Zeit tracken —',
    'hero.title.part2': 'ganz mühelos.',
    'hero.subtitle':
      'SimpleTime hilft dir, deine Zeit bewusst und effizient zu nutzen. Ob Arbeit, Studium, Training oder persönliche Projekte — erfasse deine Aktivitäten klar und strukturiert, ganz ohne unnötige Komplexität.',
    'hero.cta.appstore': 'Im App Store laden',
    'hero.cta.features': 'Funktionen ansehen',
    'hero.availability': 'Kostenlos · iPhone · iPad · Mac',
    'hero.proof.price': 'Kostenlos laden',
    'hero.proof.account': 'Kein Konto nötig',
    'hero.proof.private': 'Daten bleiben auf dem Gerät',

    'features.title': 'Konzentrier dich auf das Wesentliche: deine Zeit.',
    'features.subtitle':
      'Alles, was du für bewusste Zeiterfassung brauchst — nichts, was du nicht brauchst.',
    'features.instant.title': 'Sofort starten',
    'features.instant.body':
      'Ein Tipp genügt — schon läuft die Zeit. Schnell, intuitiv und ablenkungsfrei.',
    'features.structured.title': 'Strukturierte Aufgaben & Unteraufgaben',
    'features.structured.body':
      'Organisiere deine Aktivitäten hierarchisch und bilde Arbeits-, Studien- oder Projektstrukturen präzise ab.',
    'features.timeline.title': 'Tagesansicht & Timeline',
    'features.timeline.body':
      'Behalte deinen Tag auf einen Blick im Überblick — Start- und Endzeiten, Dauer und optionale Notizen.',
    'features.stats.title': 'Automatische Statistiken',
    'features.stats.body':
      'Klare und aussagekräftige Charts zeigen deine Aktivitäten täglich, wöchentlich und monatlich.',
    'features.icloud.title': 'Smartes iCloud-Backup',
    'features.icloud.body':
      'Deine Daten werden automatisch in iCloud gesichert — täglich oder wöchentlich — und synchronisieren sich geräteübergreifend.',
    'features.export.title': 'CSV-Export',
    'features.export.body':
      'Exportiere deine Zeitdaten für Excel, Numbers oder externe Analyse-Tools.',
    'features.private.title': 'Privat & sicher',
    'features.private.body':
      'Deine Daten gehören dir. SimpleTime sammelt keine persönlichen Informationen und teilt nichts mit Dritten.',
    'screenshots.track.title': 'Tracken',
    'screenshots.track.body': 'Alle deine täglichen Aktivitäten auf einen Blick.',
    'screenshots.customize.title': 'Personalisieren',
    'screenshots.customize.body': 'Aufgaben mit Farben und Kategorien individualisieren.',
    'screenshots.overview.title': 'Überblick',
    'screenshots.overview.body': 'Dein ganzer Tag in einer klaren Liste.',
    'screenshots.timeline.title': 'Timeline',
    'screenshots.timeline.body': 'Visualisiere deinen Tag Stunde für Stunde.',
    'screenshots.analyze.title': 'Auswerten',
    'screenshots.analyze.body': 'Sieh genau, wohin deine Zeit fließt.',
    'screenshots.reports.title': 'Berichte',
    'screenshots.reports.body': 'Detaillierte Aufschlüsselung pro Aufgabe.',

    'showcase.day.eyebrow': 'Die Tagesansicht',
    'showcase.day.title': 'Dein ganzer Tag an einem Ort.',
    'showcase.day.body':
      'Ein Tipp startet eine Aufgabe, den Rest übernimmt SimpleTime. Jeder Eintrag hält Start- und Endzeit, Dauer und eine optionale Notiz fest — dein Tag schreibt sich nebenbei mit.',
    'showcase.day.point1': 'Ein Tipp zum Starten, einer zum Stoppen',
    'showcase.day.point2': 'Favoriten für alles, was du täglich trackst',
    'showcase.day.point3': 'Zeitstrahl deines Tages, Stunde für Stunde',

    'showcase.insight.eyebrow': 'Statistiken',
    'showcase.insight.title': 'Sieh genau, wohin deine Zeit fließt.',
    'showcase.insight.body':
      'Diagramme nach Tag, Woche und Monat machen aus deinen Einträgen ein Bild, mit dem du etwas anfangen kannst. Und wenn du die Rohdaten brauchst: als CSV exportieren und in Excel oder Numbers öffnen.',
    'showcase.insight.point1': 'Diagramme nach Tag, Woche und Monat',
    'showcase.insight.point2': 'Detaillierte Berichte je Aufgabe',
    'showcase.insight.point3': 'CSV-Export für externe Auswertungen',

    'showcase.personal.eyebrow': 'Deine Einrichtung',
    'showcase.personal.title': 'Passt sich an, wie du arbeitest.',
    'showcase.personal.body':
      'Jede Aufgabe bekommt eigene Farbe, eigenes Symbol und eine Kategorie. Mit Unteraufgaben bildest du ab, wie ein Projekt wirklich aufgebaut ist — und was du am häufigsten brauchst, bleibt als Favorit ganz oben.',
    'showcase.personal.point1': 'Farben, SF Symbols und Emoji',
    'showcase.personal.point2': 'Kategorien, Aufgaben und Unteraufgaben',
    'showcase.personal.point3': 'Favoriten immer in Reichweite',

    'gallery.title': 'Aus der Nähe.',
    'gallery.subtitle': 'Jeder Screen genau so, wie er auf deinem Gerät aussieht.',

    'audience.title': 'Für alle, die ihre Zeit wertschätzen.',
    'audience.subtitle':
      'Studierende, Freelancer, Angestellte, Kreative, Sportler — und alle, die verstehen wollen, wie sie ihre Zeit wirklich verbringen.',
    'audience.work.title': 'Beruf & Freelance',
    'audience.work.body':
      'Trenne Kundenarbeit und Projekte sauber voneinander und exportiere bei Bedarf einen klaren Nachweis.',
    'audience.study.title': 'Studium & Lernen',
    'audience.study.body':
      'Sieh, wie viel Zeit ein Fach wirklich kostet, und plane die nächste Woche mit echten Zahlen.',
    'audience.training.title': 'Training & Gewohnheiten',
    'audience.training.body':
      'Erfasse Einheiten, Schlaf oder Übungszeit und beobachte, wie über die Wochen Konstanz entsteht.',
    'audience.everyday.title': 'Alltag',
    'audience.everyday.body':
      'Finde heraus, wohin die Stunden tatsächlich gehen — und entscheide selbst, was du ändern willst.',

    'faq.title': 'Häufige Fragen.',
    'faq.subtitle': 'Alles Wissenswerte vor dem Download.',
    'faq.free.q': 'Ist SimpleTime wirklich kostenlos?',
    'faq.free.a':
      'Ja. SimpleTime lässt sich kostenlos im App Store laden und läuft auf iPhone, iPad und Mac.',
    'faq.account.q': 'Brauche ich ein Konto?',
    'faq.account.a':
      'Nein. Es gibt keine Registrierung und keinen Login. Du öffnest die App und legst direkt los.',
    'faq.data.q': 'Wo werden meine Daten gespeichert?',
    'faq.data.a':
      'Ausschließlich auf deinem Gerät. Wenn du das iCloud-Backup aktivierst, werden deine Daten verschlüsselt in deinen eigenen iCloud-Account übertragen. Wir haben zu keinem Zeitpunkt Zugriff darauf.',
    'faq.sync.q': 'Synchronisiert die App zwischen meinen Geräten?',
    'faq.sync.a':
      'Ja, über iCloud. Die Sicherung läuft täglich oder wöchentlich, deine Einträge bleiben auf iPhone, iPad und Mac synchron.',
    'faq.export.q': 'Komme ich wieder an meine Daten heran?',
    'faq.export.a':
      'Jederzeit. SimpleTime exportiert deine Zeitdaten als CSV — direkt nutzbar in Excel, Numbers oder jedem anderen Auswertungstool.',
    'faq.tracking.q': 'Trackt mich die App?',
    'faq.tracking.a':
      'Nein. SimpleTime enthält keine Analytics-SDKs, keine Werbung und kein Crash-Reporting von Drittanbietern. Es werden keine Nutzerprofile erstellt.',

    'cta.title': 'Bereit loszulegen?',
    'cta.subtitle': 'Kostenlos verfügbar auf iPhone, iPad und Mac.',
    'cta.button': 'Im App Store laden',

    'footer.tagline': 'Zeit mühelos tracken.',
    'footer.legal': 'Rechtliches',
    'footer.product': 'Produkt',
    'footer.appstore': 'App Store',
    'footer.contact': 'Kontakt',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.copyright': '© {year} Luca Efinger. Alle Rechte vorbehalten.',

    'contact.title': 'Kontakt',
    'contact.subtitle': 'Fragen, Feedback oder Ideen? Schreib uns.',
    'contact.email.label': 'E-Mail',
    'contact.email.body':
      'Schreib uns einfach an die untenstehende Adresse — wir lesen jede Nachricht und antworten so schnell wie möglich.',
    'contact.response':
      'In der Regel antworten wir innerhalb weniger Werktage. Bei Fehlern gib bitte dein Gerätemodell und die iOS-Version an.',

    'imprint.title': 'Impressum',
    'imprint.country': 'Deutschland',
    'imprint.according': 'Angaben gemäß § 5 DDG',
    'imprint.contact': 'Kontakt',
    'imprint.responsible': 'Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV',
    'imprint.disclaimer.title': 'Haftungsausschluss',
    'imprint.disclaimer.liability.title': 'Haftung für Inhalte',
    'imprint.disclaimer.liability.body':
      'Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach Art. 8 DSA sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
    'imprint.disclaimer.links.title': 'Haftung für Links',
    'imprint.disclaimer.links.body':
      'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
    'imprint.disclaimer.copyright.title': 'Urheberrecht',
    'imprint.disclaimer.copyright.body':
      'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',

    'privacy.title': 'Datenschutzerklärung',
    'privacy.lastUpdated': 'Zuletzt aktualisiert',
    'privacy.intro.title': 'Überblick',
    'privacy.intro.body':
      'Der Schutz deiner persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung erläutert, welche Daten bei der Nutzung der SimpleTime-App und dieser Website verarbeitet werden und wie. Kurz gesagt: Wir sammeln so wenig wie möglich und geben nichts an Dritte weiter.',
    'privacy.app.title': 'Die SimpleTime-App',
    'privacy.app.body':
      'SimpleTime erhebt keine personenbezogenen Daten. Alle Daten, die du eingibst — Aktivitäten, Aufgaben, Kategorien, Notizen und Zeiten — werden ausschließlich auf deinem Gerät gespeichert. Optional kannst du das iCloud-Backup aktivieren; in diesem Fall werden deine Daten verschlüsselt über Apples iCloud-Infrastruktur in deinen eigenen iCloud-Account übertragen. Wir haben zu keinem Zeitpunkt Zugriff auf diese Daten.',
    'privacy.app.nocollect.title': 'Kein Analytics, kein Tracking',
    'privacy.app.nocollect.body':
      'Die App enthält keine Analytics-SDKs, keine Werbung, keine Crash-Reporting-Tools von Drittanbietern und kein Nutzertracking. Es werden keine Nutzerprofile erstellt.',
    'privacy.website.title': 'Diese Website',
    'privacy.website.body':
      'Diese Website wird auf Cloudflare Workers gehostet. Beim Aufruf übermittelt dein Browser technisch bedingt eine IP-Adresse und einen User-Agent an den Server — dies ist für die Auslieferung jeder Website unvermeidbar. Cloudflare kann diese Informationen zu Sicherheitszwecken temporär in Server-Logfiles speichern. Wir selbst erheben, speichern und analysieren keine solchen Daten. Diese Website verwendet keine Cookies, kein Analytics, kein Tracking und keine Drittanbieter-Schriften — die Schriftart Inter wird vom eigenen Server ausgeliefert.',
    'privacy.website.hosting.title': 'Hosting',
    'privacy.website.hosting.body':
      'Anbieter: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA. Weitere Informationen findest du in der Datenschutzerklärung von Cloudflare unter https://www.cloudflare.com/de-de/privacypolicy/.',
    'privacy.website.cdn.title': 'Content Delivery Network',
    'privacy.website.cdn.body':
      'Zur schnellen Auslieferung und zum Schutz dieser Website vor Angriffen setzen wir Cloudflare ein, ein Content Delivery Network und Reverse-Proxy-Dienst der Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA. Beim Aufruf dieser Website wird deine Anfrage über die Server von Cloudflare geleitet. Cloudflare verarbeitet dabei technische Verbindungsdaten — insbesondere deine IP-Adresse und den User-Agent —, um Inhalte auszuliefern, Sicherheitsbedrohungen zu erkennen und schädlichen Datenverkehr zu blockieren. Zur Bot-Erkennung und Sitzungssicherheit kann Cloudflare technisch notwendige Cookies setzen (z. B. __cf_bm, _cfuvid); diese werden nicht zu Tracking- oder Analysezwecken verwendet. Rechtsgrundlage ist unser berechtigtes Interesse an einer sicheren und performanten Website gemäß Art. 6 Abs. 1 lit. f DSGVO. Cloudflare ist unter dem EU-U.S. Data Privacy Framework zertifiziert, und mit dem Anbieter wurde ein Auftragsverarbeitungsvertrag geschlossen. Weitere Informationen findest du in der Datenschutzerklärung von Cloudflare unter https://www.cloudflare.com/de-de/privacypolicy/.',
    'privacy.rights.title': 'Deine Rechte',
    'privacy.rights.body':
      'Nach der DSGVO hast du das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das Recht, der Verarbeitung zu widersprechen. Du erreichst uns jederzeit unter den unten angegebenen Kontaktdaten.',
    'privacy.contact.title': 'Kontakt',
    'privacy.contact.body': 'Bei Fragen zum Datenschutz wende dich bitte an:',
    'privacy.changes.title': 'Änderungen',
    'privacy.changes.body':
      'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen in der App, auf der Website oder an rechtlichen Anforderungen Rechnung zu tragen. Die jeweils aktuelle Fassung findest du immer hier.',
  },
  fr: {
    'meta.title': 'SimpleTime – Suivi du temps pour iOS',
    'meta.description':
      'Suivez votre temps sans effort. SimpleTime est un suivi du temps clair et intuitif pour iPhone, iPad et Mac. Sans compte, sans pistage — vos données restent chez vous.',
    'meta.contact.description':
      'Une question, un retour ou un bug à signaler ? Écrivez à SimpleTime par e-mail — chaque message est lu et reçoit une réponse sous quelques jours ouvrés.',
    'meta.privacy.description':
      'Comment SimpleTime traite vos données : tout reste sur votre appareil, la sauvegarde iCloud est facultative et chiffrée, sans analyse ni pistage.',
    'meta.imprint.description':
      'Mentions légales de simple-time.app selon le § 5 DDG — éditeur, coordonnées et informations de responsabilité pour l’app et le site SimpleTime.',

    'nav.features': 'Fonctionnalités',
    'nav.screenshots': 'Captures',
    'nav.contact': 'Contact',
    'nav.appstore': 'Voir sur l’App Store',
    'nav.faq': 'FAQ',
    'nav.menu': 'Ouvrir le menu',
    'nav.menu.close': 'Fermer le menu',
    'nav.language': 'Langue',
    'nav.theme': 'Basculer entre clair et sombre',
    'skip.content': 'Aller au contenu',

    'hero.eyebrow': 'Suivi du temps pour iOS',
    'hero.title.part1': 'Votre temps,',
    'hero.title.part2': 'sans effort.',
    'hero.subtitle':
      'SimpleTime vous aide à utiliser votre temps de façon consciente et efficace. Travail, études, entraînement ou projets personnels — suivez vos activités de façon claire et structurée, sans complexité inutile.',
    'hero.cta.appstore': 'Télécharger sur l’App Store',
    'hero.cta.features': 'Voir les fonctionnalités',
    'hero.availability': 'Gratuit · iPhone · iPad · Mac',
    'hero.proof.price': 'Téléchargement gratuit',
    'hero.proof.account': 'Aucun compte requis',
    'hero.proof.private': 'Les données restent sur l’appareil',

    'features.title': 'Concentrez-vous sur ce qui compte vraiment : votre temps.',
    'features.subtitle': 'Tout ce qu’il faut pour un suivi du temps conscient — et rien de superflu.',
    'features.instant.title': 'Démarrage immédiat',
    'features.instant.body':
      'Une seule touche suffit pour lancer le suivi. Rapide, intuitif et sans distraction.',
    'features.structured.title': 'Tâches et sous-tâches structurées',
    'features.structured.body':
      'Organisez vos activités de façon hiérarchique pour refléter fidèlement votre travail, vos études ou vos projets.',
    'features.timeline.title': 'Vue du jour et chronologie',
    'features.timeline.body':
      'Gardez votre journée en vue d’un coup d’œil — heures de début et de fin, durée et notes facultatives.',
    'features.stats.title': 'Statistiques automatiques',
    'features.stats.body':
      'Des graphiques clairs et parlants présentent vos activités par jour, par semaine et par mois.',
    'features.icloud.title': 'Sauvegarde iCloud intelligente',
    'features.icloud.body':
      'Vos données sont sauvegardées automatiquement sur iCloud — chaque jour ou chaque semaine — et synchronisées entre vos appareils.',
    'features.export.title': 'Export CSV',
    'features.export.body':
      'Exportez vos données de temps vers Excel, Numbers ou tout autre outil d’analyse.',
    'features.private.title': 'Privé et sécurisé',
    'features.private.body':
      'Vos données n’appartiennent qu’à vous. SimpleTime ne collecte aucune information personnelle et ne partage rien avec des tiers.',

    'screenshots.track.title': 'Suivre',
    'screenshots.track.body': 'Toutes vos activités du jour en un coup d’œil.',
    'screenshots.customize.title': 'Personnaliser',
    'screenshots.customize.body': 'Des couleurs et des catégories pour chaque tâche.',
    'screenshots.overview.title': 'Vue d’ensemble',
    'screenshots.overview.body': 'Toute votre journée dans une liste claire.',
    'screenshots.timeline.title': 'Chronologie',
    'screenshots.timeline.body': 'Visualisez votre journée heure par heure.',
    'screenshots.analyze.title': 'Analyser',
    'screenshots.analyze.body': 'Voyez exactement où passe votre temps.',
    'screenshots.reports.title': 'Rapports',
    'screenshots.reports.body': 'Un détail complet par tâche.',

    'showcase.day.eyebrow': 'La vue du jour',
    'showcase.day.title': 'Toute votre journée au même endroit.',
    'showcase.day.body':
      'Lancez une tâche d’une seule touche et laissez SimpleTime tenir le registre. Chaque entrée porte son heure de début et de fin, sa durée et une note facultative — votre journée se reconstitue pendant que vous travaillez.',
    'showcase.day.point1': 'Une touche pour démarrer, une pour arrêter',
    'showcase.day.point2': 'Des favoris pour vos activités quotidiennes',
    'showcase.day.point3': 'Une chronologie heure par heure',

    'showcase.insight.eyebrow': 'Statistiques',
    'showcase.insight.title': 'Voyez exactement où passe votre temps.',
    'showcase.insight.body':
      'Des graphiques par jour, par semaine et par mois transforment vos entrées en une image exploitable. Besoin des chiffres bruts ? Exportez n’importe quelle période en CSV et ouvrez-la dans Excel ou Numbers.',
    'showcase.insight.point1': 'Graphiques par jour, semaine et mois',
    'showcase.insight.point2': 'Rapports détaillés pour chaque tâche',
    'showcase.insight.point3': 'Export CSV pour vos analyses externes',

    'showcase.personal.eyebrow': 'Votre configuration',
    'showcase.personal.title': 'Adapté à votre façon de travailler.',
    'showcase.personal.body':
      'Donnez à chaque tâche sa couleur, son icône et sa catégorie, et imbriquez des sous-tâches pour refléter la structure réelle d’un projet. Ce que vous utilisez le plus reste en favori, tout en haut.',
    'showcase.personal.point1': 'Couleurs, SF Symbols et emoji',
    'showcase.personal.point2': 'Catégories, tâches et sous-tâches',
    'showcase.personal.point3': 'Les favoris toujours à portée de main',

    'gallery.title': 'De plus près.',
    'gallery.subtitle': 'Chaque écran exactement tel qu’il apparaît sur votre appareil.',

    'audience.title': 'Pour tous ceux qui tiennent à leur temps.',
    'audience.subtitle':
      'Étudiants, indépendants, salariés, créatifs, sportifs — et tous ceux qui veulent comprendre comment ils passent réellement leur temps.',
    'audience.work.title': 'Travail et freelance',
    'audience.work.body':
      'Séparez proprement le travail client et les projets, et exportez un relevé clair quand il le faut.',
    'audience.study.title': 'Études et apprentissage',
    'audience.study.body':
      'Voyez combien de temps une matière demande vraiment et planifiez la semaine suivante sur des chiffres réels.',
    'audience.training.title': 'Entraînement et habitudes',
    'audience.training.body':
      'Enregistrez vos séances, votre sommeil ou vos exercices et regardez la régularité s’installer au fil des semaines.',
    'audience.everyday.title': 'Vie quotidienne',
    'audience.everyday.body':
      'Découvrez où passent réellement les heures — et décidez vous-même de ce que vous voulez changer.',

    'faq.title': 'Vos questions, nos réponses.',
    'faq.subtitle': 'Tout ce qu’il faut savoir avant de télécharger.',
    'faq.free.q': 'SimpleTime est-il vraiment gratuit ?',
    'faq.free.a':
      'Oui. SimpleTime se télécharge gratuitement sur l’App Store et fonctionne sur iPhone, iPad et Mac.',
    'faq.account.q': 'Ai-je besoin d’un compte ?',
    'faq.account.a':
      'Non. Il n’y a ni inscription ni connexion. Vous ouvrez l’app et commencez immédiatement.',
    'faq.data.q': 'Où mes données sont-elles stockées ?',
    'faq.data.a':
      'Exclusivement sur votre appareil. Si vous activez la sauvegarde iCloud, vos données sont transférées chiffrées vers votre propre compte iCloud. Nous n’y avons accès à aucun moment.',
    'faq.sync.q': 'La synchronisation entre mes appareils fonctionne-t-elle ?',
    'faq.sync.a':
      'Oui, via iCloud. Les sauvegardes ont lieu chaque jour ou chaque semaine, et vos entrées restent synchronisées entre iPhone, iPad et Mac.',
    'faq.export.q': 'Puis-je récupérer mes données ?',
    'faq.export.a':
      'À tout moment. SimpleTime exporte vos données de temps au format CSV, prêtes pour Excel, Numbers ou tout autre outil d’analyse.',
    'faq.tracking.q': 'L’app me piste-t-elle ?',
    'faq.tracking.a':
      'Non. SimpleTime ne contient aucun SDK d’analyse, aucune publicité et aucun rapport de plantage tiers, et ne crée aucun profil d’utilisateur.',

    'cta.title': 'Prêt à suivre votre temps ?',
    'cta.subtitle': 'Disponible gratuitement sur iPhone, iPad et Mac.',
    'cta.button': 'Télécharger sur l’App Store',

    'footer.tagline': 'Suivez votre temps sans effort.',
    'footer.legal': 'Informations légales',
    'footer.product': 'Produit',
    'footer.appstore': 'App Store',
    'footer.contact': 'Contact',
    'footer.imprint': 'Mentions légales',
    'footer.privacy': 'Confidentialité',
    'footer.copyright': '© {year} Luca Efinger. Tous droits réservés.',

    'contact.title': 'Contact',
    'contact.subtitle': 'Une question, un retour ou une idée ? Écrivez-nous.',
    'contact.email.label': 'E-mail',
    'contact.email.body':
      'Écrivez-nous à l’adresse ci-dessous — nous lisons chaque message et répondons aussi vite que possible.',
    'contact.response':
      'Nous répondons généralement sous quelques jours ouvrés. Pour un bug, merci d’indiquer votre modèle d’appareil et votre version d’iOS.',

    'imprint.title': 'Mentions légales',
    'imprint.country': 'Allemagne',
    'imprint.according': 'Informations selon le § 5 DDG',
    'imprint.contact': 'Contact',
    'imprint.responsible': 'Responsable du contenu selon le § 18, al. 2 MStV',
    'imprint.disclaimer.title': 'Avertissement',
    'imprint.disclaimer.liability.title': 'Responsabilité concernant le contenu',
    'imprint.disclaimer.liability.body':
      'En tant que prestataire de services, nous sommes responsables de nos propres contenus sur ces pages conformément au droit commun. Selon l’art. 8 DSA, nous ne sommes toutefois pas tenus de surveiller les informations de tiers transmises ou stockées, ni de rechercher les circonstances révélant une activité illicite. Les obligations de retrait ou de blocage de l’utilisation d’informations en vertu du droit commun demeurent inchangées. Une responsabilité à ce titre n’est cependant engagée qu’à compter de la connaissance d’une infraction concrète. Dès que nous aurons connaissance de telles infractions, nous retirerons ces contenus sans délai.',
    'imprint.disclaimer.links.title': 'Responsabilité concernant les liens',
    'imprint.disclaimer.links.body':
      'Notre offre contient des liens vers des sites externes de tiers, dont nous ne pouvons influencer le contenu. Nous ne pouvons donc assumer aucune responsabilité pour ces contenus externes. Le fournisseur ou l’exploitant des pages liées est toujours responsable de leur contenu. Les pages liées ont été vérifiées quant à d’éventuelles infractions au moment de la mise en lien. Aucun contenu illicite n’était alors décelable. Une surveillance permanente du contenu des pages liées n’est cependant pas raisonnablement exigible sans indice concret d’infraction. Dès que nous aurons connaissance d’infractions, nous retirerons ces liens sans délai.',
    'imprint.disclaimer.copyright.title': 'Droit d’auteur',
    'imprint.disclaimer.copyright.body':
      'Les contenus et œuvres créés par l’exploitant du site sur ces pages sont soumis au droit d’auteur allemand. La reproduction, la modification, la diffusion et toute forme d’exploitation en dehors des limites du droit d’auteur requièrent l’accord écrit de leur auteur ou créateur respectif. Les téléchargements et copies de ce site ne sont autorisés qu’à des fins privées et non commerciales.',

    'privacy.title': 'Politique de confidentialité',
    'privacy.lastUpdated': 'Dernière mise à jour',
    'privacy.intro.title': 'Aperçu',
    'privacy.intro.body':
      'La protection de vos données personnelles nous tient à cœur. Cette politique de confidentialité explique quelles données sont traitées lorsque vous utilisez l’app SimpleTime et ce site, et de quelle manière. En résumé : nous collectons le strict minimum et ne partageons rien avec des tiers.',
    'privacy.app.title': 'L’app SimpleTime',
    'privacy.app.body':
      'SimpleTime ne collecte aucune information personnelle. Toutes les données que vous saisissez — activités, tâches, catégories, notes et durées — sont stockées exclusivement sur votre appareil. Vous pouvez activer la sauvegarde iCloud en option ; dans ce cas, vos données sont transférées chiffrées via l’infrastructure iCloud d’Apple vers votre propre compte iCloud. Nous n’avons à aucun moment accès à ces données.',
    'privacy.app.nocollect.title': 'Aucune analyse, aucun pistage',
    'privacy.app.nocollect.body':
      'L’app ne contient aucun SDK d’analyse, aucune publicité, aucun outil tiers de rapport de plantage et aucun pistage des utilisateurs. Aucun profil d’utilisateur n’est créé.',
    'privacy.website.title': 'Ce site web',
    'privacy.website.body':
      'Ce site est hébergé sur Cloudflare Workers. Lors de la consultation, votre navigateur transmet techniquement une adresse IP et un agent utilisateur au serveur, ce qui est inévitable pour la diffusion de tout site web. Cloudflare peut conserver temporairement ces informations dans des fichiers journaux à des fins de sécurité. Nous-mêmes ne collectons, ne stockons ni n’analysons de telles données. Ce site n’utilise aucun cookie, aucune analyse, aucun pistage et aucune police tierce — la police Inter est servie depuis notre propre serveur.',
    'privacy.website.hosting.title': 'Hébergement',
    'privacy.website.hosting.body':
      'Prestataire : Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis. Vous trouverez plus d’informations dans la politique de confidentialité de Cloudflare à l’adresse https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'Réseau de diffusion de contenu',
    'privacy.website.cdn.body':
      'Pour diffuser ce site rapidement et le protéger contre les attaques, nous utilisons Cloudflare, un réseau de diffusion de contenu et service de proxy inverse de Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis. Lors de la consultation du site, votre requête transite par les serveurs de Cloudflare. Cloudflare traite à cette occasion des données techniques de connexion — en particulier votre adresse IP et votre agent utilisateur — afin de diffuser les contenus, de détecter les menaces de sécurité et de bloquer le trafic malveillant. Pour la protection contre les robots et la sécurité des sessions, Cloudflare peut déposer des cookies techniquement nécessaires (p. ex. __cf_bm, _cfuvid) ; ceux-ci ne servent ni au pistage ni à l’analyse. La base juridique est notre intérêt légitime à un site sécurisé et performant au sens de l’art. 6, par. 1, point f) du RGPD. Cloudflare est certifié dans le cadre du EU-U.S. Data Privacy Framework, et un contrat de sous-traitance a été conclu. Vous trouverez plus d’informations dans la politique de confidentialité de Cloudflare à l’adresse https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'Vos droits',
    'privacy.rights.body':
      'En vertu du RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation du traitement, de portabilité des données ainsi que d’un droit d’opposition au traitement. Vous pouvez nous joindre à tout moment aux coordonnées indiquées ci-dessous.',
    'privacy.contact.title': 'Contact',
    'privacy.contact.body':
      'Pour toute question relative à la protection des données, veuillez vous adresser à :',
    'privacy.changes.title': 'Modifications',
    'privacy.changes.body':
      'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre afin de tenir compte des évolutions de l’app, du site ou des exigences légales. La version en vigueur est toujours disponible ici.',
  },
  es: {
    'meta.title': 'SimpleTime – Control de tiempo para iOS',
    'meta.description':
      'Controla tu tiempo sin esfuerzo. SimpleTime es un registro de tiempo claro e intuitivo para iPhone, iPad y Mac. Sin cuentas, sin rastreo: tus datos se quedan contigo.',
    'meta.contact.description':
      '¿Tienes una pregunta, un comentario o un fallo que informar? Escribe a SimpleTime por correo: leemos cada mensaje y respondemos en pocos días laborables.',
    'meta.privacy.description':
      'Cómo trata SimpleTime tus datos: todo permanece en tu dispositivo, la copia en iCloud es opcional y cifrada, sin analíticas ni rastreo.',
    'meta.imprint.description':
      'Aviso legal de simple-time.app según el § 5 DDG: titular, datos de contacto e información sobre responsabilidad de la app y el sitio de SimpleTime.',

    'nav.features': 'Funciones',
    'nav.screenshots': 'Capturas',
    'nav.contact': 'Contacto',
    'nav.appstore': 'Ver en el App Store',
    'nav.faq': 'Preguntas',
    'nav.menu': 'Abrir menú',
    'nav.menu.close': 'Cerrar menú',
    'nav.language': 'Idioma',
    'nav.theme': 'Cambiar entre claro y oscuro',
    'skip.content': 'Ir al contenido',

    'hero.eyebrow': 'Control de tiempo para iOS',
    'hero.title.part1': 'Tu tiempo,',
    'hero.title.part2': 'sin esfuerzo.',
    'hero.subtitle':
      'SimpleTime te ayuda a usar tu tiempo de forma consciente y eficiente. Trabajo, estudios, entrenamiento o proyectos personales: registra tus actividades de forma clara y estructurada, sin complicaciones innecesarias.',
    'hero.cta.appstore': 'Descargar en el App Store',
    'hero.cta.features': 'Ver funciones',
    'hero.availability': 'Gratis · iPhone · iPad · Mac',
    'hero.proof.price': 'Descarga gratuita',
    'hero.proof.account': 'Sin cuenta',
    'hero.proof.private': 'Los datos se quedan en tu dispositivo',

    'features.title': 'Céntrate en lo que de verdad importa: tu tiempo.',
    'features.subtitle': 'Todo lo necesario para registrar tu tiempo con conciencia, y nada más.',
    'features.instant.title': 'Empieza al instante',
    'features.instant.body':
      'Basta un toque para empezar a registrar. Rápido, intuitivo y sin distracciones.',
    'features.structured.title': 'Tareas y subtareas estructuradas',
    'features.structured.body':
      'Organiza tus actividades de forma jerárquica y refleja con precisión tu trabajo, tus estudios o tus proyectos.',
    'features.timeline.title': 'Vista diaria y cronología',
    'features.timeline.body':
      'Ten tu día a la vista de un vistazo: horas de inicio y fin, duración y notas opcionales.',
    'features.stats.title': 'Estadísticas automáticas',
    'features.stats.body':
      'Gráficos claros y reveladores muestran tus actividades por día, semana y mes.',
    'features.icloud.title': 'Copia inteligente en iCloud',
    'features.icloud.body':
      'Tus datos se respaldan automáticamente en iCloud, a diario o cada semana, y se sincronizan entre tus dispositivos.',
    'features.export.title': 'Exportación CSV',
    'features.export.body':
      'Exporta tus datos de tiempo a Excel, Numbers o cualquier otra herramienta de análisis.',
    'features.private.title': 'Privado y seguro',
    'features.private.body':
      'Tus datos son solo tuyos. SimpleTime no recopila información personal ni comparte nada con terceros.',

    'screenshots.track.title': 'Registrar',
    'screenshots.track.body': 'Todas tus actividades del día de un vistazo.',
    'screenshots.customize.title': 'Personalizar',
    'screenshots.customize.body': 'Colores y categorías para cada tarea.',
    'screenshots.overview.title': 'Resumen',
    'screenshots.overview.body': 'Todo tu día en una lista clara.',
    'screenshots.timeline.title': 'Cronología',
    'screenshots.timeline.body': 'Visualiza tu día hora a hora.',
    'screenshots.analyze.title': 'Analizar',
    'screenshots.analyze.body': 'Descubre exactamente adónde va tu tiempo.',
    'screenshots.reports.title': 'Informes',
    'screenshots.reports.body': 'Un desglose detallado por tarea.',

    'showcase.day.eyebrow': 'La vista diaria',
    'showcase.day.title': 'Todo tu día en un solo lugar.',
    'showcase.day.body':
      'Inicia una tarea con un toque y deja que SimpleTime lleve el registro. Cada entrada guarda su hora de inicio y fin, su duración y una nota opcional: tu día se reconstruye solo mientras trabajas.',
    'showcase.day.point1': 'Un toque para empezar, otro para parar',
    'showcase.day.point2': 'Favoritos para lo que registras a diario',
    'showcase.day.point3': 'Una cronología hora a hora de tu día',

    'showcase.insight.eyebrow': 'Estadísticas',
    'showcase.insight.title': 'Descubre exactamente adónde va tu tiempo.',
    'showcase.insight.body':
      'Los gráficos por día, semana y mes convierten tus entradas en una imagen con la que puedes actuar. ¿Necesitas los números en bruto? Exporta cualquier periodo en CSV y ábrelo en Excel o Numbers.',
    'showcase.insight.point1': 'Gráficos por día, semana y mes',
    'showcase.insight.point2': 'Informes detallados de cada tarea',
    'showcase.insight.point3': 'Exportación CSV para análisis externos',

    'showcase.personal.eyebrow': 'Tu configuración',
    'showcase.personal.title': 'Se adapta a tu forma de trabajar.',
    'showcase.personal.body':
      'Da a cada tarea su propio color, icono y categoría, y anida subtareas para reflejar cómo está montado un proyecto de verdad. Lo que más usas se queda como favorito, siempre arriba.',
    'showcase.personal.point1': 'Colores, SF Symbols y emojis',
    'showcase.personal.point2': 'Categorías, tareas y subtareas',
    'showcase.personal.point3': 'Favoritos siempre a mano',

    'gallery.title': 'Más de cerca.',
    'gallery.subtitle': 'Cada pantalla exactamente como se ve en tu dispositivo.',

    'audience.title': 'Para quienes valoran su tiempo.',
    'audience.subtitle':
      'Estudiantes, autónomos, empleados, creativos, deportistas y cualquiera que quiera entender en qué se le va realmente el tiempo.',
    'audience.work.title': 'Trabajo y autónomos',
    'audience.work.body':
      'Separa el trabajo de clientes de tus proyectos y exporta un registro claro cuando lo necesites.',
    'audience.study.title': 'Estudios y aprendizaje',
    'audience.study.body':
      'Comprueba cuánto tiempo te lleva de verdad una asignatura y planifica la semana siguiente con datos reales.',
    'audience.training.title': 'Entrenamiento y hábitos',
    'audience.training.body':
      'Registra sesiones, sueño o práctica y observa cómo se consolida la constancia semana a semana.',
    'audience.everyday.title': 'Día a día',
    'audience.everyday.body':
      'Descubre adónde van realmente las horas y decide tú mismo qué quieres cambiar.',

    'faq.title': 'Preguntas frecuentes.',
    'faq.subtitle': 'Todo lo que conviene saber antes de descargar.',
    'faq.free.q': '¿SimpleTime es realmente gratis?',
    'faq.free.a':
      'Sí. SimpleTime se descarga gratis en el App Store y funciona en iPhone, iPad y Mac.',
    'faq.account.q': '¿Necesito una cuenta?',
    'faq.account.a':
      'No. No hay registro ni inicio de sesión. Abres la app y empiezas a registrar directamente.',
    'faq.data.q': '¿Dónde se guardan mis datos?',
    'faq.data.a':
      'Exclusivamente en tu dispositivo. Si activas la copia de seguridad en iCloud, tus datos se transfieren cifrados a tu propia cuenta de iCloud. Nosotros no tenemos acceso a ellos en ningún momento.',
    'faq.sync.q': '¿Se sincroniza entre mis dispositivos?',
    'faq.sync.a':
      'Sí, a través de iCloud. Las copias se realizan a diario o cada semana, y tus entradas se mantienen sincronizadas entre iPhone, iPad y Mac.',
    'faq.export.q': '¿Puedo recuperar mis datos?',
    'faq.export.a':
      'Cuando quieras. SimpleTime exporta tus datos de tiempo en CSV, listos para Excel, Numbers o cualquier otra herramienta de análisis.',
    'faq.tracking.q': '¿La app me rastrea?',
    'faq.tracking.a':
      'No. SimpleTime no contiene SDK de analíticas, ni publicidad, ni informes de fallos de terceros, y no crea perfiles de usuario.',

    'cta.title': '¿Listo para empezar a registrar?',
    'cta.subtitle': 'Disponible gratis para iPhone, iPad y Mac.',
    'cta.button': 'Descargar en el App Store',

    'footer.tagline': 'Controla tu tiempo sin esfuerzo.',
    'footer.legal': 'Legal',
    'footer.product': 'Producto',
    'footer.appstore': 'App Store',
    'footer.contact': 'Contacto',
    'footer.imprint': 'Aviso legal',
    'footer.privacy': 'Privacidad',
    'footer.copyright': '© {year} Luca Efinger. Todos los derechos reservados.',

    'contact.title': 'Contacto',
    'contact.subtitle': '¿Preguntas, comentarios o ideas? Escríbenos.',
    'contact.email.label': 'Correo electrónico',
    'contact.email.body':
      'Escríbenos a la dirección de abajo: leemos cada mensaje y respondemos lo antes posible.',
    'contact.response':
      'Solemos responder en pocos días laborables. Si informas de un fallo, indica el modelo de tu dispositivo y la versión de iOS.',

    'imprint.title': 'Aviso legal',
    'imprint.country': 'Alemania',
    'imprint.according': 'Información según el § 5 DDG',
    'imprint.contact': 'Contacto',
    'imprint.responsible': 'Responsable del contenido según el § 18, apdo. 2 MStV',
    'imprint.disclaimer.title': 'Descargo de responsabilidad',
    'imprint.disclaimer.liability.title': 'Responsabilidad por el contenido',
    'imprint.disclaimer.liability.body':
      'Como prestador de servicios, somos responsables de nuestros propios contenidos en estas páginas conforme al derecho general. Según el art. 8 DSA, no estamos obligados a supervisar la información ajena transmitida o almacenada, ni a investigar circunstancias que indiquen una actividad ilícita. Las obligaciones de retirar o bloquear el uso de información conforme al derecho general permanecen inalteradas. Una responsabilidad al respecto solo existe a partir del momento en que se tiene conocimiento de una infracción concreta. En cuanto tengamos conocimiento de tales infracciones, retiraremos dichos contenidos de inmediato.',
    'imprint.disclaimer.links.title': 'Responsabilidad por los enlaces',
    'imprint.disclaimer.links.body':
      'Nuestra oferta contiene enlaces a sitios web externos de terceros, sobre cuyo contenido no tenemos influencia. Por ello no podemos asumir ninguna responsabilidad por esos contenidos externos. Del contenido de las páginas enlazadas siempre es responsable su respectivo proveedor u operador. Las páginas enlazadas fueron revisadas en busca de posibles infracciones legales en el momento de enlazarlas. En ese momento no se apreciaban contenidos ilícitos. Sin embargo, una supervisión permanente del contenido de las páginas enlazadas no es exigible sin indicios concretos de una infracción. En cuanto tengamos conocimiento de infracciones, retiraremos dichos enlaces de inmediato.',
    'imprint.disclaimer.copyright.title': 'Derechos de autor',
    'imprint.disclaimer.copyright.body':
      'Los contenidos y obras creados por el operador del sitio en estas páginas están sujetos a la legislación alemana sobre derechos de autor. La reproducción, edición, distribución y cualquier forma de explotación fuera de los límites de los derechos de autor requieren el consentimiento por escrito de su respectivo autor o creador. Las descargas y copias de este sitio solo están permitidas para uso privado y no comercial.',

    'privacy.title': 'Política de privacidad',
    'privacy.lastUpdated': 'Última actualización',
    'privacy.intro.title': 'Resumen',
    'privacy.intro.body':
      'La protección de tus datos personales nos importa. Esta política de privacidad explica qué datos se tratan cuando usas la app SimpleTime y este sitio web, y de qué manera. En resumen: recopilamos lo mínimo posible y no compartimos nada con terceros.',
    'privacy.app.title': 'La app SimpleTime',
    'privacy.app.body':
      'SimpleTime no recopila ninguna información personal. Todos los datos que introduces —actividades, tareas, categorías, notas y tiempos— se guardan exclusivamente en tu dispositivo. Puedes activar opcionalmente la copia de seguridad en iCloud; en ese caso, tus datos se transfieren cifrados a través de la infraestructura de iCloud de Apple a tu propia cuenta de iCloud. Nosotros no tenemos acceso a esos datos en ningún momento.',
    'privacy.app.nocollect.title': 'Sin analíticas, sin rastreo',
    'privacy.app.nocollect.body':
      'La app no contiene SDK de analíticas, ni publicidad, ni herramientas de informe de fallos de terceros, ni rastreo de usuarios. No se crean perfiles de usuario.',
    'privacy.website.title': 'Este sitio web',
    'privacy.website.body':
      'Este sitio web está alojado en Cloudflare Workers. Al acceder, tu navegador transmite por motivos técnicos una dirección IP y un agente de usuario al servidor, algo inevitable para la entrega de cualquier sitio web. Cloudflare puede almacenar temporalmente esa información en archivos de registro por motivos de seguridad. Nosotros mismos no recopilamos, almacenamos ni analizamos ese tipo de datos. Este sitio no utiliza cookies, ni analíticas, ni rastreo, ni fuentes de terceros: la tipografía Inter se sirve desde nuestro propio servidor.',
    'privacy.website.hosting.title': 'Alojamiento',
    'privacy.website.hosting.body':
      'Proveedor: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, EE. UU. Encontrarás más información en la política de privacidad de Cloudflare en https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'Red de distribución de contenidos',
    'privacy.website.cdn.body':
      'Para entregar este sitio con rapidez y protegerlo frente a ataques utilizamos Cloudflare, una red de distribución de contenidos y servicio de proxy inverso de Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, EE. UU. Al acceder al sitio, tu solicitud pasa por los servidores de Cloudflare. Cloudflare trata en ese proceso datos técnicos de conexión —en particular tu dirección IP y tu agente de usuario— para entregar los contenidos, detectar amenazas de seguridad y bloquear tráfico malicioso. Para la protección frente a bots y la seguridad de la sesión, Cloudflare puede establecer cookies técnicamente necesarias (p. ej. __cf_bm, _cfuvid); estas no se utilizan con fines de rastreo ni de análisis. La base jurídica es nuestro interés legítimo en un sitio web seguro y con buen rendimiento según el art. 6, apdo. 1, letra f) del RGPD. Cloudflare está certificada conforme al EU-U.S. Data Privacy Framework y se ha suscrito un contrato de encargo del tratamiento. Encontrarás más información en la política de privacidad de Cloudflare en https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'Tus derechos',
    'privacy.rights.body':
      'Conforme al RGPD tienes derecho de acceso, rectificación, supresión, limitación del tratamiento, portabilidad de los datos y a oponerte al tratamiento. Puedes contactarnos en cualquier momento a través de los datos indicados más abajo.',
    'privacy.contact.title': 'Contacto',
    'privacy.contact.body':
      'Para cuestiones relacionadas con la protección de datos, dirígete a:',
    'privacy.changes.title': 'Cambios',
    'privacy.changes.body':
      'Podemos actualizar esta política de privacidad de vez en cuando para reflejar cambios en la app, en el sitio web o en los requisitos legales. La versión vigente siempre está disponible aquí.',
  },
  it: {
    'meta.title': 'SimpleTime – Monitoraggio del tempo per iOS',
    'meta.description':
      'Monitora il tuo tempo senza sforzo. SimpleTime è un tracker del tempo chiaro e intuitivo per iPhone, iPad e Mac. Nessun account, nessun tracciamento: i tuoi dati restano con te.',
    'meta.contact.description':
      'Hai una domanda, un suggerimento o un bug da segnalare? Scrivi a SimpleTime via e-mail: leggiamo ogni messaggio e rispondiamo in pochi giorni lavorativi.',
    'meta.privacy.description':
      'Come SimpleTime tratta i tuoi dati: tutto resta sul tuo dispositivo, il backup su iCloud è facoltativo e cifrato, nessuna analisi e nessun tracciamento.',
    'meta.imprint.description':
      'Note legali di simple-time.app ai sensi del § 5 DDG: titolare, contatti e informazioni sulla responsabilità per l’app e il sito SimpleTime.',

    'nav.features': 'Funzioni',
    'nav.screenshots': 'Schermate',
    'nav.contact': 'Contatti',
    'nav.appstore': 'Guarda su App Store',
    'nav.faq': 'FAQ',
    'nav.menu': 'Apri il menu',
    'nav.menu.close': 'Chiudi il menu',
    'nav.language': 'Lingua',
    'nav.theme': 'Passa da chiaro a scuro',
    'skip.content': 'Vai al contenuto',

    'hero.eyebrow': 'Monitoraggio del tempo per iOS',
    'hero.title.part1': 'Il tuo tempo,',
    'hero.title.part2': 'senza sforzo.',
    'hero.subtitle':
      'SimpleTime ti aiuta a usare il tuo tempo in modo consapevole ed efficiente. Lavoro, studio, allenamento o progetti personali: registra le tue attività in modo chiaro e strutturato, senza complicazioni inutili.',
    'hero.cta.appstore': 'Scarica su App Store',
    'hero.cta.features': 'Scopri le funzioni',
    'hero.availability': 'Gratis · iPhone · iPad · Mac',
    'hero.proof.price': 'Download gratuito',
    'hero.proof.account': 'Nessun account',
    'hero.proof.private': 'I dati restano sul dispositivo',

    'features.title': 'Concentrati su ciò che conta davvero: il tuo tempo.',
    'features.subtitle': 'Tutto il necessario per monitorare il tempo con consapevolezza, e nulla di più.',
    'features.instant.title': 'Parti all’istante',
    'features.instant.body':
      'Basta un tocco per iniziare a registrare. Veloce, intuitivo e senza distrazioni.',
    'features.structured.title': 'Attività e sottoattività strutturate',
    'features.structured.body':
      'Organizza le tue attività in modo gerarchico e rispecchia con precisione lavoro, studio o progetti.',
    'features.timeline.title': 'Vista giornaliera e cronologia',
    'features.timeline.body':
      'Tieni la giornata sott’occhio: orari di inizio e fine, durata e note facoltative.',
    'features.stats.title': 'Statistiche automatiche',
    'features.stats.body':
      'Grafici chiari e significativi mostrano le tue attività per giorno, settimana e mese.',
    'features.icloud.title': 'Backup iCloud intelligente',
    'features.icloud.body':
      'I tuoi dati vengono salvati automaticamente su iCloud, ogni giorno o ogni settimana, e si sincronizzano tra i tuoi dispositivi.',
    'features.export.title': 'Esportazione CSV',
    'features.export.body':
      'Esporta i tuoi dati sul tempo verso Excel, Numbers o qualsiasi altro strumento di analisi.',
    'features.private.title': 'Privato e sicuro',
    'features.private.body':
      'I tuoi dati appartengono solo a te. SimpleTime non raccoglie informazioni personali e non condivide nulla con terze parti.',

    'screenshots.track.title': 'Registra',
    'screenshots.track.body': 'Tutte le attività del giorno a colpo d’occhio.',
    'screenshots.customize.title': 'Personalizza',
    'screenshots.customize.body': 'Colori e categorie per ogni attività.',
    'screenshots.overview.title': 'Panoramica',
    'screenshots.overview.body': 'Tutta la giornata in un elenco chiaro.',
    'screenshots.timeline.title': 'Cronologia',
    'screenshots.timeline.body': 'Visualizza la giornata ora per ora.',
    'screenshots.analyze.title': 'Analizza',
    'screenshots.analyze.body': 'Scopri esattamente dove va il tuo tempo.',
    'screenshots.reports.title': 'Report',
    'screenshots.reports.body': 'Un dettaglio completo per ogni attività.',

    'showcase.day.eyebrow': 'La vista giornaliera',
    'showcase.day.title': 'Tutta la giornata in un unico posto.',
    'showcase.day.body':
      'Avvia un’attività con un tocco e lascia che sia SimpleTime a tenere il registro. Ogni voce porta con sé orario di inizio e fine, durata e una nota facoltativa: la giornata si ricostruisce da sola mentre lavori.',
    'showcase.day.point1': 'Un tocco per iniziare, uno per fermare',
    'showcase.day.point2': 'Preferiti per ciò che registri ogni giorno',
    'showcase.day.point3': 'Una cronologia della giornata, ora per ora',

    'showcase.insight.eyebrow': 'Statistiche',
    'showcase.insight.title': 'Scopri esattamente dove va il tuo tempo.',
    'showcase.insight.body':
      'I grafici per giorno, settimana e mese trasformano le tue voci in un quadro su cui puoi agire. Ti servono i numeri grezzi? Esporta qualsiasi periodo in CSV e aprilo in Excel o Numbers.',
    'showcase.insight.point1': 'Grafici per giorno, settimana e mese',
    'showcase.insight.point2': 'Report dettagliati per ogni attività',
    'showcase.insight.point3': 'Esportazione CSV per analisi esterne',

    'showcase.personal.eyebrow': 'La tua configurazione',
    'showcase.personal.title': 'Si adatta al tuo modo di lavorare.',
    'showcase.personal.body':
      'Dai a ogni attività il suo colore, la sua icona e la sua categoria, e annida le sottoattività per rispecchiare la struttura reale di un progetto. Ciò che usi di più resta tra i preferiti, sempre in cima.',
    'showcase.personal.point1': 'Colori, SF Symbols ed emoji',
    'showcase.personal.point2': 'Categorie, attività e sottoattività',
    'showcase.personal.point3': 'Preferiti sempre a portata di mano',

    'gallery.title': 'Più da vicino.',
    'gallery.subtitle': 'Ogni schermata esattamente come appare sul tuo dispositivo.',

    'audience.title': 'Per chi dà valore al proprio tempo.',
    'audience.subtitle':
      'Studenti, liberi professionisti, dipendenti, creativi, sportivi e chiunque voglia capire come impiega davvero il proprio tempo.',
    'audience.work.title': 'Lavoro e libera professione',
    'audience.work.body':
      'Tieni separati il lavoro per i clienti e i progetti, ed esporta un resoconto chiaro quando serve.',
    'audience.study.title': 'Studio e apprendimento',
    'audience.study.body':
      'Scopri quanto tempo richiede davvero una materia e pianifica la settimana successiva su dati reali.',
    'audience.training.title': 'Allenamento e abitudini',
    'audience.training.body':
      'Registra sessioni, sonno o esercizio e osserva la costanza consolidarsi settimana dopo settimana.',
    'audience.everyday.title': 'Vita quotidiana',
    'audience.everyday.body':
      'Scopri dove finiscono davvero le ore e decidi tu che cosa vuoi cambiare.',

    'faq.title': 'Domande frequenti.',
    'faq.subtitle': 'Tutto quello che conviene sapere prima di scaricare.',
    'faq.free.q': 'SimpleTime è davvero gratis?',
    'faq.free.a':
      'Sì. SimpleTime si scarica gratuitamente da App Store e funziona su iPhone, iPad e Mac.',
    'faq.account.q': 'Serve un account?',
    'faq.account.a':
      'No. Non c’è registrazione né login. Apri l’app e inizi subito a registrare.',
    'faq.data.q': 'Dove vengono salvati i miei dati?',
    'faq.data.a':
      'Esclusivamente sul tuo dispositivo. Se attivi il backup su iCloud, i dati vengono trasferiti cifrati sul tuo account iCloud. Noi non vi abbiamo accesso in nessun momento.',
    'faq.sync.q': 'Si sincronizza tra i miei dispositivi?',
    'faq.sync.a':
      'Sì, tramite iCloud. I backup vengono eseguiti ogni giorno o ogni settimana e le tue voci restano sincronizzate tra iPhone, iPad e Mac.',
    'faq.export.q': 'Posso riprendere i miei dati?',
    'faq.export.a':
      'In qualsiasi momento. SimpleTime esporta i tuoi dati sul tempo in CSV, pronti per Excel, Numbers o qualsiasi altro strumento di analisi.',
    'faq.tracking.q': 'L’app mi traccia?',
    'faq.tracking.a':
      'No. SimpleTime non contiene SDK di analisi, né pubblicità, né strumenti di segnalazione crash di terze parti, e non crea profili utente.',

    'cta.title': 'Pronto a iniziare?',
    'cta.subtitle': 'Disponibile gratis su iPhone, iPad e Mac.',
    'cta.button': 'Scarica su App Store',

    'footer.tagline': 'Monitora il tuo tempo senza sforzo.',
    'footer.legal': 'Informazioni legali',
    'footer.product': 'Prodotto',
    'footer.appstore': 'App Store',
    'footer.contact': 'Contatti',
    'footer.imprint': 'Note legali',
    'footer.privacy': 'Privacy',
    'footer.copyright': '© {year} Luca Efinger. Tutti i diritti riservati.',

    'contact.title': 'Contatti',
    'contact.subtitle': 'Domande, suggerimenti o idee? Scrivici.',
    'contact.email.label': 'E-mail',
    'contact.email.body':
      'Scrivici all’indirizzo qui sotto: leggiamo ogni messaggio e rispondiamo il prima possibile.',
    'contact.response':
      'Di solito rispondiamo entro pochi giorni lavorativi. Per un bug, indica il modello del dispositivo e la versione di iOS.',

    'imprint.title': 'Note legali',
    'imprint.country': 'Germania',
    'imprint.according': 'Informazioni ai sensi del § 5 DDG',
    'imprint.contact': 'Contatti',
    'imprint.responsible': 'Responsabile dei contenuti ai sensi del § 18, comma 2 MStV',
    'imprint.disclaimer.title': 'Esclusione di responsabilità',
    'imprint.disclaimer.liability.title': 'Responsabilità per i contenuti',
    'imprint.disclaimer.liability.body':
      'In qualità di fornitore di servizi siamo responsabili dei contenuti propri di queste pagine secondo le norme generali. Ai sensi dell’art. 8 DSA non siamo però tenuti a sorvegliare le informazioni altrui trasmesse o memorizzate, né a ricercare circostanze che indichino attività illecite. Restano impregiudicati gli obblighi di rimozione o blocco dell’uso di informazioni previsti dalle norme generali. Una responsabilità in tal senso sussiste soltanto dal momento in cui si viene a conoscenza di una violazione concreta. Non appena verremo a conoscenza di tali violazioni, rimuoveremo immediatamente i contenuti in questione.',
    'imprint.disclaimer.links.title': 'Responsabilità per i collegamenti',
    'imprint.disclaimer.links.body':
      'La nostra offerta contiene collegamenti a siti web esterni di terzi, sui cui contenuti non abbiamo alcuna influenza. Per questo motivo non possiamo assumerci alcuna responsabilità per tali contenuti esterni. Del contenuto delle pagine collegate è sempre responsabile il rispettivo fornitore o gestore. Al momento del collegamento le pagine sono state verificate per accertare eventuali violazioni di legge. In quel momento non erano riconoscibili contenuti illeciti. Un controllo permanente dei contenuti delle pagine collegate non è però esigibile senza indizi concreti di una violazione. Non appena verremo a conoscenza di violazioni, rimuoveremo immediatamente i collegamenti in questione.',
    'imprint.disclaimer.copyright.title': 'Diritto d’autore',
    'imprint.disclaimer.copyright.body':
      'I contenuti e le opere create dal gestore del sito su queste pagine sono soggetti al diritto d’autore tedesco. La riproduzione, l’elaborazione, la diffusione e qualsiasi forma di utilizzo al di fuori dei limiti del diritto d’autore richiedono il consenso scritto del rispettivo autore o creatore. I download e le copie di questo sito sono consentiti soltanto per uso privato e non commerciale.',

    'privacy.title': 'Informativa sulla privacy',
    'privacy.lastUpdated': 'Ultimo aggiornamento',
    'privacy.intro.title': 'Panoramica',
    'privacy.intro.body':
      'La protezione dei tuoi dati personali è importante per noi. Questa informativa spiega quali dati vengono trattati quando usi l’app SimpleTime e questo sito, e in che modo. In breve: raccogliamo il minimo indispensabile e non condividiamo nulla con terze parti.',
    'privacy.app.title': 'L’app SimpleTime',
    'privacy.app.body':
      'SimpleTime non raccoglie alcuna informazione personale. Tutti i dati che inserisci — attività, compiti, categorie, note e tempi — sono memorizzati esclusivamente sul tuo dispositivo. Puoi attivare facoltativamente il backup su iCloud; in tal caso i tuoi dati vengono trasferiti cifrati tramite l’infrastruttura iCloud di Apple sul tuo account iCloud. Non abbiamo in alcun momento accesso a questi dati.',
    'privacy.app.nocollect.title': 'Nessuna analisi, nessun tracciamento',
    'privacy.app.nocollect.body':
      'L’app non contiene SDK di analisi, pubblicità, strumenti di segnalazione crash di terze parti né tracciamento degli utenti. Non vengono creati profili utente.',
    'privacy.website.title': 'Questo sito web',
    'privacy.website.body':
      'Questo sito è ospitato su Cloudflare Workers. Alla consultazione, il tuo browser trasmette per motivi tecnici un indirizzo IP e uno user agent al server, cosa inevitabile per la distribuzione di qualsiasi sito web. Cloudflare può conservare temporaneamente queste informazioni in file di log per finalità di sicurezza. Noi stessi non raccogliamo, non memorizziamo e non analizziamo tali dati. Questo sito non usa cookie, analisi, tracciamento né font di terze parti: il carattere Inter viene servito dal nostro server.',
    'privacy.website.hosting.title': 'Hosting',
    'privacy.website.hosting.body':
      'Fornitore: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA. Trovi maggiori informazioni nell’informativa sulla privacy di Cloudflare all’indirizzo https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'Rete per la distribuzione di contenuti',
    'privacy.website.cdn.body':
      'Per distribuire rapidamente questo sito e proteggerlo dagli attacchi utilizziamo Cloudflare, una rete per la distribuzione di contenuti e servizio di reverse proxy di Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA. Alla consultazione del sito la tua richiesta transita per i server di Cloudflare. Cloudflare tratta in questo processo dati tecnici di connessione — in particolare il tuo indirizzo IP e il tuo user agent — per distribuire i contenuti, rilevare minacce alla sicurezza e bloccare il traffico dannoso. Per la protezione dai bot e la sicurezza della sessione Cloudflare può impostare cookie tecnicamente necessari (ad es. __cf_bm, _cfuvid); questi non vengono usati per tracciamento o analisi. La base giuridica è il nostro legittimo interesse a un sito sicuro e performante ai sensi dell’art. 6, par. 1, lett. f) del GDPR. Cloudflare è certificata nell’ambito dell’EU-U.S. Data Privacy Framework ed è stato stipulato un accordo sul trattamento dei dati. Trovi maggiori informazioni nell’informativa sulla privacy di Cloudflare all’indirizzo https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'I tuoi diritti',
    'privacy.rights.body':
      'Ai sensi del GDPR hai diritto di accesso, rettifica, cancellazione, limitazione del trattamento, portabilità dei dati e di opposizione al trattamento. Puoi contattarci in qualsiasi momento ai recapiti indicati di seguito.',
    'privacy.contact.title': 'Contatti',
    'privacy.contact.body': 'Per domande sulla protezione dei dati rivolgiti a:',
    'privacy.changes.title': 'Modifiche',
    'privacy.changes.body':
      'Possiamo aggiornare di tanto in tanto questa informativa per tenere conto di modifiche all’app, al sito o ai requisiti di legge. La versione in vigore è sempre disponibile qui.',
  },
  ru: {
    'meta.title': 'SimpleTime – Учёт времени для iOS',
    'meta.description':
      'Отслеживайте своё время без усилий. SimpleTime — понятный и удобный трекер времени для iPhone, iPad и Mac. Без аккаунтов и слежки: ваши данные остаются у вас.',
    'meta.contact.description':
      'Есть вопрос, отзыв или сообщение об ошибке? Напишите SimpleTime по электронной почте — мы читаем каждое сообщение и отвечаем в течение нескольких рабочих дней.',
    'meta.privacy.description':
      'Как SimpleTime обращается с вашими данными: всё остаётся на устройстве, резервная копия в iCloud необязательна и зашифрована, без аналитики и слежки.',
    'meta.imprint.description':
      'Выходные данные simple-time.app согласно § 5 DDG: владелец, контактные данные и сведения об ответственности за приложение и сайт SimpleTime.',

    'nav.features': 'Возможности',
    'nav.screenshots': 'Скриншоты',
    'nav.contact': 'Контакты',
    'nav.appstore': 'Открыть в App Store',
    'nav.faq': 'Вопросы',
    'nav.menu': 'Открыть меню',
    'nav.menu.close': 'Закрыть меню',
    'nav.language': 'Язык',
    'nav.theme': 'Переключить светлую и тёмную тему',
    'skip.content': 'Перейти к содержимому',

    'hero.eyebrow': 'Учёт времени для iOS',
    'hero.title.part1': 'Ваше время,',
    'hero.title.part2': 'без усилий.',
    'hero.subtitle':
      'SimpleTime помогает расходовать время осознанно и эффективно. Работа, учёба, тренировки или личные проекты — записывайте свои занятия ясно и структурированно, без лишней сложности.',
    'hero.cta.appstore': 'Загрузить в App Store',
    'hero.cta.features': 'Смотреть возможности',
    'hero.availability': 'Бесплатно · iPhone · iPad · Mac',
    'hero.proof.price': 'Бесплатная загрузка',
    'hero.proof.account': 'Без аккаунта',
    'hero.proof.private': 'Данные остаются на устройстве',

    'features.title': 'Сосредоточьтесь на главном — на своём времени.',
    'features.subtitle': 'Всё, что нужно для осознанного учёта времени, и ничего лишнего.',
    'features.instant.title': 'Запуск в одно касание',
    'features.instant.body':
      'Одного касания достаточно, чтобы начать запись. Быстро, понятно и без отвлечений.',
    'features.structured.title': 'Задачи и подзадачи',
    'features.structured.body':
      'Организуйте занятия иерархически и точно отражайте структуру работы, учёбы или проектов.',
    'features.timeline.title': 'День и лента времени',
    'features.timeline.body':
      'Весь день перед глазами: время начала и окончания, длительность и заметки по желанию.',
    'features.stats.title': 'Автоматическая статистика',
    'features.stats.body':
      'Наглядные диаграммы показывают ваши занятия по дням, неделям и месяцам.',
    'features.icloud.title': 'Умная копия в iCloud',
    'features.icloud.body':
      'Данные автоматически сохраняются в iCloud — ежедневно или еженедельно — и синхронизируются между устройствами.',
    'features.export.title': 'Экспорт в CSV',
    'features.export.body':
      'Выгружайте данные о времени в Excel, Numbers или любой другой инструмент анализа.',
    'features.private.title': 'Приватно и надёжно',
    'features.private.body':
      'Ваши данные принадлежат только вам. SimpleTime не собирает личные сведения и ничего не передаёт третьим лицам.',

    'screenshots.track.title': 'Запись',
    'screenshots.track.body': 'Все занятия дня перед глазами.',
    'screenshots.customize.title': 'Настройка',
    'screenshots.customize.body': 'Цвета и категории для каждой задачи.',
    'screenshots.overview.title': 'Обзор',
    'screenshots.overview.body': 'Весь день в одном понятном списке.',
    'screenshots.timeline.title': 'Лента времени',
    'screenshots.timeline.body': 'Ваш день час за часом.',
    'screenshots.analyze.title': 'Анализ',
    'screenshots.analyze.body': 'Точно видно, куда уходит время.',
    'screenshots.reports.title': 'Отчёты',
    'screenshots.reports.body': 'Подробная разбивка по задачам.',

    'showcase.day.eyebrow': 'Дневной обзор',
    'showcase.day.title': 'Весь день в одном месте.',
    'showcase.day.body':
      'Запустите задачу одним касанием, а вести учёт предоставьте SimpleTime. У каждой записи есть время начала и окончания, длительность и заметка по желанию — день складывается сам, пока вы работаете.',
    'showcase.day.point1': 'Одно касание — старт, ещё одно — стоп',
    'showcase.day.point2': 'Избранное для ежедневных занятий',
    'showcase.day.point3': 'Лента дня час за часом',

    'showcase.insight.eyebrow': 'Статистика',
    'showcase.insight.title': 'Точно видно, куда уходит время.',
    'showcase.insight.body':
      'Диаграммы по дням, неделям и месяцам превращают записи в картину, с которой можно работать. Нужны исходные цифры? Выгрузите любой период в CSV и откройте в Excel или Numbers.',
    'showcase.insight.point1': 'Диаграммы по дням, неделям и месяцам',
    'showcase.insight.point2': 'Подробные отчёты по каждой задаче',
    'showcase.insight.point3': 'Экспорт в CSV для внешнего анализа',

    'showcase.personal.eyebrow': 'Ваша настройка',
    'showcase.personal.title': 'Подстраивается под вашу работу.',
    'showcase.personal.body':
      'Дайте каждой задаче свой цвет, значок и категорию, а подзадачи помогут отразить реальную структуру проекта. То, чем вы пользуетесь чаще всего, остаётся в избранном — всегда наверху.',
    'showcase.personal.point1': 'Цвета, SF Symbols и эмодзи',
    'showcase.personal.point2': 'Категории, задачи и подзадачи',
    'showcase.personal.point3': 'Избранное всегда под рукой',

    'gallery.title': 'Ближе к делу.',
    'gallery.subtitle': 'Каждый экран ровно таким, каким вы увидите его на устройстве.',

    'audience.title': 'Для всех, кто ценит своё время.',
    'audience.subtitle':
      'Студенты, фрилансеры, сотрудники, творческие люди, спортсмены — и все, кто хочет понять, на что на самом деле уходит их время.',
    'audience.work.title': 'Работа и фриланс',
    'audience.work.body':
      'Разделяйте работу для клиентов и собственные проекты, а при необходимости выгружайте понятный отчёт.',
    'audience.study.title': 'Учёба',
    'audience.study.body':
      'Узнайте, сколько времени на самом деле требует предмет, и планируйте следующую неделю по реальным цифрам.',
    'audience.training.title': 'Тренировки и привычки',
    'audience.training.body':
      'Записывайте занятия, сон или практику и наблюдайте, как неделя за неделей появляется постоянство.',
    'audience.everyday.title': 'Повседневность',
    'audience.everyday.body':
      'Выясните, куда действительно уходят часы, и сами решите, что хотите изменить.',

    'faq.title': 'Частые вопросы.',
    'faq.subtitle': 'Всё, что стоит знать перед загрузкой.',
    'faq.free.q': 'SimpleTime действительно бесплатен?',
    'faq.free.a':
      'Да. SimpleTime загружается из App Store бесплатно и работает на iPhone, iPad и Mac.',
    'faq.account.q': 'Нужен ли аккаунт?',
    'faq.account.a':
      'Нет. Регистрации и входа не требуется. Вы открываете приложение и сразу начинаете вести учёт.',
    'faq.data.q': 'Где хранятся мои данные?',
    'faq.data.a':
      'Исключительно на вашем устройстве. Если вы включите резервное копирование в iCloud, данные будут переданы в зашифрованном виде в ваш собственный аккаунт iCloud. У нас нет к ним доступа ни в какой момент.',
    'faq.sync.q': 'Синхронизируются ли данные между устройствами?',
    'faq.sync.a':
      'Да, через iCloud. Копирование выполняется ежедневно или еженедельно, а записи остаются синхронными на iPhone, iPad и Mac.',
    'faq.export.q': 'Могу ли я забрать свои данные?',
    'faq.export.a':
      'В любой момент. SimpleTime выгружает данные о времени в формате CSV — сразу пригодном для Excel, Numbers или любого другого инструмента анализа.',
    'faq.tracking.q': 'Следит ли приложение за мной?',
    'faq.tracking.a':
      'Нет. В SimpleTime нет ни аналитических SDK, ни рекламы, ни сторонних систем сбора отчётов о сбоях, и профили пользователей не создаются.',

    'cta.title': 'Готовы начать?',
    'cta.subtitle': 'Доступно бесплатно на iPhone, iPad и Mac.',
    'cta.button': 'Загрузить в App Store',

    'footer.tagline': 'Отслеживайте своё время без усилий.',
    'footer.legal': 'Правовая информация',
    'footer.product': 'Продукт',
    'footer.appstore': 'App Store',
    'footer.contact': 'Контакты',
    'footer.imprint': 'Выходные данные',
    'footer.privacy': 'Конфиденциальность',
    'footer.copyright': '© {year} Luca Efinger. Все права защищены.',

    'contact.title': 'Контакты',
    'contact.subtitle': 'Вопросы, отзывы или идеи? Напишите нам.',
    'contact.email.label': 'Электронная почта',
    'contact.email.body':
      'Напишите нам по адресу ниже — мы читаем каждое сообщение и отвечаем как можно быстрее.',
    'contact.response':
      'Обычно мы отвечаем в течение нескольких рабочих дней. Если сообщаете об ошибке, укажите модель устройства и версию iOS.',

    'imprint.title': 'Выходные данные',
    'imprint.country': 'Германия',
    'imprint.according': 'Сведения согласно § 5 DDG',
    'imprint.contact': 'Контакты',
    'imprint.responsible': 'Ответственный за содержание согласно § 18, абз. 2 MStV',
    'imprint.disclaimer.title': 'Отказ от ответственности',
    'imprint.disclaimer.liability.title': 'Ответственность за содержание',
    'imprint.disclaimer.liability.body':
      'Как поставщик услуг мы несём ответственность за собственные материалы на этих страницах в соответствии с общими нормами права. Однако согласно ст. 8 DSA мы не обязаны отслеживать переданную или сохранённую чужую информацию либо выяснять обстоятельства, указывающие на противоправную деятельность. Обязанности по удалению или блокированию использования информации в соответствии с общими нормами права остаются в силе. Ответственность в этой части возникает только с момента, когда нам становится известно о конкретном нарушении. При получении сведений о таких нарушениях мы незамедлительно удалим соответствующие материалы.',
    'imprint.disclaimer.links.title': 'Ответственность за ссылки',
    'imprint.disclaimer.links.body':
      'Наше предложение содержит ссылки на внешние сайты третьих лиц, на содержание которых мы не можем влиять. Поэтому мы не можем нести ответственность за эти внешние материалы. За содержание страниц, на которые ведут ссылки, всегда отвечает их поставщик или оператор. На момент размещения ссылок страницы были проверены на предмет возможных нарушений закона. Противоправного содержания тогда выявлено не было. Однако постоянный контроль содержания страниц, на которые ведут ссылки, без конкретных указаний на нарушение неосуществим. При получении сведений о нарушениях мы незамедлительно удалим соответствующие ссылки.',
    'imprint.disclaimer.copyright.title': 'Авторское право',
    'imprint.disclaimer.copyright.body':
      'Материалы и произведения, созданные оператором сайта на этих страницах, охраняются авторским правом Германии. Воспроизведение, переработка, распространение и любое использование за пределами, установленными авторским правом, требуют письменного согласия соответствующего автора или создателя. Загрузка и копирование этого сайта допускаются только для частного некоммерческого использования.',

    'privacy.title': 'Политика конфиденциальности',
    'privacy.lastUpdated': 'Последнее обновление',
    'privacy.intro.title': 'Обзор',
    'privacy.intro.body':
      'Защита ваших персональных данных важна для нас. Эта политика объясняет, какие данные обрабатываются при использовании приложения SimpleTime и этого сайта и каким образом. Коротко: мы собираем минимум и ничего не передаём третьим лицам.',
    'privacy.app.title': 'Приложение SimpleTime',
    'privacy.app.body':
      'SimpleTime не собирает никаких персональных данных. Все вводимые вами данные — занятия, задачи, категории, заметки и время — хранятся исключительно на вашем устройстве. При желании вы можете включить резервное копирование в iCloud; в этом случае данные передаются в зашифрованном виде через инфраструктуру iCloud компании Apple в ваш собственный аккаунт iCloud. У нас нет доступа к этим данным ни в какой момент.',
    'privacy.app.nocollect.title': 'Без аналитики и слежки',
    'privacy.app.nocollect.body':
      'В приложении нет аналитических SDK, рекламы, сторонних инструментов сбора отчётов о сбоях и отслеживания пользователей. Профили пользователей не создаются.',
    'privacy.website.title': 'Этот сайт',
    'privacy.website.body':
      'Этот сайт размещён на Cloudflare Workers. При обращении ваш браузер по техническим причинам передаёт серверу IP-адрес и строку user agent — это неизбежно при доставке любого сайта. Cloudflare может временно сохранять эти сведения в журналах сервера в целях безопасности. Сами мы такие данные не собираем, не храним и не анализируем. Сайт не использует файлы cookie, аналитику, слежение и сторонние шрифты — шрифт Inter поставляется с нашего сервера.',
    'privacy.website.hosting.title': 'Хостинг',
    'privacy.website.hosting.body':
      'Поставщик: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, США. Подробнее — в политике конфиденциальности Cloudflare по адресу https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'Сеть доставки контента',
    'privacy.website.cdn.body':
      'Для быстрой доставки сайта и защиты от атак мы используем Cloudflare — сеть доставки контента и обратный прокси компании Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, США. При обращении к сайту ваш запрос проходит через серверы Cloudflare. При этом Cloudflare обрабатывает технические данные соединения — в частности ваш IP-адрес и user agent — чтобы доставлять содержимое, выявлять угрозы безопасности и блокировать вредоносный трафик. Для защиты от ботов и безопасности сессии Cloudflare может устанавливать технически необходимые файлы cookie (например, __cf_bm, _cfuvid); они не используются для отслеживания или аналитики. Правовым основанием является наш законный интерес в безопасном и производительном сайте согласно ст. 6, п. 1, подп. f) GDPR. Cloudflare сертифицирована в рамках EU-U.S. Data Privacy Framework, с поставщиком заключён договор об обработке данных. Подробнее — в политике конфиденциальности Cloudflare по адресу https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'Ваши права',
    'privacy.rights.body':
      'Согласно GDPR вы имеете право на доступ, исправление, удаление, ограничение обработки, переносимость данных, а также право возразить против обработки. Связаться с нами можно в любое время по контактным данным ниже.',
    'privacy.contact.title': 'Контакты',
    'privacy.contact.body': 'По вопросам защиты данных обращайтесь:',
    'privacy.changes.title': 'Изменения',
    'privacy.changes.body':
      'Время от времени мы можем обновлять эту политику, чтобы учесть изменения в приложении, на сайте или в требованиях законодательства. Действующая редакция всегда доступна здесь.',
  },
  hy: {
    'meta.title': 'SimpleTime – Ժամանակի հաշվառում iOS-ի համար',
    'meta.description':
      'Հետևեք ձեր ժամանակին առանց ջանքի։ SimpleTime-ը պարզ և հարմար ժամանակի հաշվառման հավելված է iPhone-ի, iPad-ի և Mac-ի համար։ Առանց հաշիվների, առանց հետագծման․ ձեր տվյալները մնում են ձեզ մոտ։',
    'meta.contact.description':
      'Հարց, կարծիք կամ սխալի մասին հաղորդում ունե՞ք։ Գրեք SimpleTime-ին էլ․ փոստով․ մենք կարդում ենք յուրաքանչյուր նամակ և պատասխանում ենք մի քանի աշխատանքային օրվա ընթացքում։',
    'meta.privacy.description':
      'Ինչպես է SimpleTime-ը վարվում ձեր տվյալների հետ․ ամեն ինչ մնում է ձեր սարքում, iCloud-ի պահուստավորումը կամընտիր է և գաղտնագրված, առանց վերլուծության և հետագծման։',
    'meta.imprint.description':
      'simple-time.app-ի իրավական տվյալները § 5 DDG-ի համաձայն․ տիրապետող, կապի տվյալներ և պատասխանատվության մասին տեղեկություններ SimpleTime հավելվածի և կայքի համար։',

    'nav.features': 'Հնարավորություններ',
    'nav.screenshots': 'Էկրանապատկերներ',
    'nav.contact': 'Կապ',
    'nav.appstore': 'Դիտել App Store-ում',
    'nav.faq': 'Հարցեր',
    'nav.menu': 'Բացել ընտրացանկը',
    'nav.menu.close': 'Փակել ընտրացանկը',
    'nav.language': 'Լեզու',
    'nav.theme': 'Փոխել լուսավոր և մուգ ձևը',
    'skip.content': 'Անցնել բովանդակությանը',

    'hero.eyebrow': 'Ժամանակի հաշվառում iOS-ի համար',
    'hero.title.part1': 'Ժամանակը՝',
    'hero.title.part2': 'առանց ջանքի։',
    'hero.subtitle':
      'SimpleTime-ը օգնում է ձեզ ժամանակը գիտակցված և արդյունավետ օգտագործել։ Աշխատանք, ուսում, մարզումներ կամ անձնական նախագծեր․ գրանցեք ձեր զբաղմունքները հստակ և կառուցվածքային՝ առանց ավելորդ բարդության։',
    'hero.cta.appstore': 'Ներբեռնել App Store-ից',
    'hero.cta.features': 'Տեսնել հնարավորությունները',
    'hero.availability': 'Անվճար · iPhone · iPad · Mac',
    'hero.proof.price': 'Անվճար ներբեռնում',
    'hero.proof.account': 'Հաշիվ պետք չէ',
    'hero.proof.private': 'Տվյալները մնում են սարքում',

    'features.title': 'Կենտրոնացեք իսկապես կարևորի վրա՝ ձեր ժամանակի։',
    'features.subtitle': 'Այն ամենը, ինչ պետք է ժամանակի գիտակցված հաշվառման համար, և ոչինչ ավելորդ։',
    'features.instant.title': 'Անմիջական մեկնարկ',
    'features.instant.body':
      'Մեկ հպումը բավական է հաշվառումը սկսելու համար։ Արագ, հասկանալի և առանց շեղումների։',
    'features.structured.title': 'Կառուցվածքային առաջադրանքներ և ենթաառաջադրանքներ',
    'features.structured.body':
      'Կազմակերպեք ձեր զբաղմունքները հիերարխիկ և ճշգրիտ արտացոլեք աշխատանքի, ուսման կամ նախագծերի կառուցվածքը։',
    'features.timeline.title': 'Օրվա տեսք և ժամանակագրություն',
    'features.timeline.body':
      'Ձեր օրը մեկ հայացքով․ սկզբի և ավարտի ժամեր, տևողություն և կամընտիր նշումներ։',
    'features.stats.title': 'Ինքնաշխատ վիճակագրություն',
    'features.stats.body':
      'Հստակ և բովանդակալից գծապատկերները ցույց են տալիս ձեր զբաղմունքները ըստ օրերի, շաբաթների և ամիսների։',
    'features.icloud.title': 'Խելացի պահուստավորում iCloud-ում',
    'features.icloud.body':
      'Ձեր տվյալները ինքնաշխատ պահուստավորվում են iCloud-ում՝ ամեն օր կամ ամեն շաբաթ, և համաժամացվում են ձեր սարքերի միջև։',
    'features.export.title': 'Արտահանում CSV-ով',
    'features.export.body':
      'Արտահանեք ձեր ժամանակի տվյալները Excel, Numbers կամ վերլուծության ցանկացած այլ գործիք։',
    'features.private.title': 'Անձնական և ապահով',
    'features.private.body':
      'Ձեր տվյալները պատկանում են միայն ձեզ։ SimpleTime-ը անձնական տեղեկություններ չի հավաքում և ոչինչ չի փոխանցում երրորդ անձանց։',

    'screenshots.track.title': 'Հաշվառել',
    'screenshots.track.body': 'Օրվա բոլոր զբաղմունքները մեկ հայացքով։',
    'screenshots.customize.title': 'Հարմարեցնել',
    'screenshots.customize.body': 'Գույներ և կատեգորիաներ յուրաքանչյուր առաջադրանքի համար։',
    'screenshots.overview.title': 'Ընդհանուր տեսք',
    'screenshots.overview.body': 'Ամբողջ օրը մեկ հստակ ցանկում։',
    'screenshots.timeline.title': 'Ժամանակագրություն',
    'screenshots.timeline.body': 'Ձեր օրը ժամ առ ժամ։',
    'screenshots.analyze.title': 'Վերլուծել',
    'screenshots.analyze.body': 'Ճշգրիտ տեսնել, թե ուր է գնում ժամանակը։',
    'screenshots.reports.title': 'Հաշվետվություններ',
    'screenshots.reports.body': 'Մանրամասն բաշխում ըստ առաջադրանքների։',

    'showcase.day.eyebrow': 'Օրվա տեսք',
    'showcase.day.title': 'Ամբողջ օրը մեկ տեղում։',
    'showcase.day.body':
      'Մեկ հպումով սկսեք առաջադրանքը, իսկ հաշվառումը թողեք SimpleTime-ին։ Յուրաքանչյուր գրառում պահում է սկզբի և ավարտի ժամը, տևողությունը և կամընտիր նշումը․ ձեր օրը ձևավորվում է ինքնըստինքյան, մինչ դուք աշխատում եք։',
    'showcase.day.point1': 'Մեկ հպում՝ սկսելու, մեկը՝ կանգնեցնելու համար',
    'showcase.day.point2': 'Ընտրյալներ ամենօրյա զբաղմունքների համար',
    'showcase.day.point3': 'Օրվա ժամանակագրություն՝ ժամ առ ժամ',

    'showcase.insight.eyebrow': 'Վիճակագրություն',
    'showcase.insight.title': 'Ճշգրիտ տեսնեք, թե ուր է գնում ձեր ժամանակը։',
    'showcase.insight.body':
      'Ըստ օրերի, շաբաթների և ամիսների գծապատկերները ձեր գրառումները վերածում են պատկերի, որի հիման վրա կարող եք գործել։ Անհրաժե՞շտ են չմշակված թվերը․ արտահանեք ցանկացած ժամանակահատված CSV-ով և բացեք Excel-ում կամ Numbers-ում։',
    'showcase.insight.point1': 'Գծապատկերներ ըստ օրերի, շաբաթների և ամիսների',
    'showcase.insight.point2': 'Մանրամասն հաշվետվություններ յուրաքանչյուր առաջադրանքի համար',
    'showcase.insight.point3': 'CSV արտահանում արտաքին վերլուծության համար',

    'showcase.personal.eyebrow': 'Ձեր կարգավորումը',
    'showcase.personal.title': 'Հարմարվում է ձեր աշխատելաոճին։',
    'showcase.personal.body':
      'Յուրաքանչյուր առաջադրանքի տվեք իր գույնը, պատկերակը և կատեգորիան, իսկ ենթաառաջադրանքները թույլ են տալիս արտացոլել նախագծի իրական կառուցվածքը։ Այն, ինչ ամենից հաճախ եք օգտագործում, մնում է ընտրյալներում՝ միշտ վերևում։',
    'showcase.personal.point1': 'Գույներ, SF Symbols և էմոջիներ',
    'showcase.personal.point2': 'Կատեգորիաներ, առաջադրանքներ և ենթաառաջադրանքներ',
    'showcase.personal.point3': 'Ընտրյալները միշտ ձեռքի տակ',

    'gallery.title': 'Ավելի մոտիկից։',
    'gallery.subtitle': 'Յուրաքանչյուր էկրան ճիշտ այնպես, ինչպես կտեսնեք ձեր սարքում։',

    'audience.title': 'Բոլորի համար, ովքեր գնահատում են իրենց ժամանակը։',
    'audience.subtitle':
      'Ուսանողներ, ազատ աշխատողներ, աշխատակիցներ, ստեղծագործողներ, մարզիկներ և բոլորը, ովքեր ուզում են հասկանալ, թե իրականում ինչի վրա է ծախսվում իրենց ժամանակը։',
    'audience.work.title': 'Աշխատանք և ազատ աշխատանք',
    'audience.work.body':
      'Առանձնացրեք հաճախորդների աշխատանքը և սեփական նախագծերը, իսկ անհրաժեշտության դեպքում արտահանեք հստակ հաշվետվություն։',
    'audience.study.title': 'Ուսում',
    'audience.study.body':
      'Իմացեք, թե որքան ժամանակ է իրականում պահանջում առարկան, և պլանավորեք հաջորդ շաբաթը իրական թվերով։',
    'audience.training.title': 'Մարզումներ և սովորույթներ',
    'audience.training.body':
      'Գրանցեք պարապմունքները, քունը կամ վարժանքը և տեսեք, թե ինչպես է շաբաթ առ շաբաթ ձևավորվում կայունությունը։',
    'audience.everyday.title': 'Ամենօրյա կյանք',
    'audience.everyday.body':
      'Պարզեք, թե իրականում ուր են գնում ժամերը, և ինքներդ որոշեք, թե ինչ եք ուզում փոխել։',

    'faq.title': 'Հաճախ տրվող հարցեր։',
    'faq.subtitle': 'Այն ամենը, ինչ արժե իմանալ ներբեռնելուց առաջ։',
    'faq.free.q': 'SimpleTime-ը իսկապե՞ս անվճար է։',
    'faq.free.a':
      'Այո։ SimpleTime-ը անվճար ներբեռնվում է App Store-ից և աշխատում է iPhone-ի, iPad-ի և Mac-ի վրա։',
    'faq.account.q': 'Հաշիվ պե՞տք է։',
    'faq.account.a':
      'Ոչ։ Գրանցում և մուտք չկա։ Բացում եք հավելվածը և անմիջապես սկսում եք հաշվառումը։',
    'faq.data.q': 'Որտե՞ղ են պահվում իմ տվյալները։',
    'faq.data.a':
      'Բացառապես ձեր սարքում։ Եթե միացնեք iCloud-ի պահուստավորումը, տվյալները գաղտնագրված փոխանցվում են ձեր սեփական iCloud հաշվին։ Մենք ոչ մի պահի դրանց հասանելիություն չունենք։',
    'faq.sync.q': 'Համաժամացվու՞մ է իմ սարքերի միջև։',
    'faq.sync.a':
      'Այո, iCloud-ի միջոցով։ Պահուստավորումը կատարվում է ամեն օր կամ ամեն շաբաթ, և ձեր գրառումները մնում են համաժամացված iPhone-ի, iPad-ի և Mac-ի միջև։',
    'faq.export.q': 'Կարո՞ղ եմ հետ ստանալ իմ տվյալները։',
    'faq.export.a':
      'Ցանկացած պահի։ SimpleTime-ը արտահանում է ձեր ժամանակի տվյալները CSV ձևաչափով՝ պատրաստ Excel-ի, Numbers-ի կամ վերլուծության ցանկացած այլ գործիքի համար։',
    'faq.tracking.q': 'Հավելվածը հետևու՞մ է ինձ։',
    'faq.tracking.a':
      'Ոչ։ SimpleTime-ում չկան վերլուծական SDK-ներ, գովազդ կամ երրորդ կողմի վթարների հաշվետվության գործիքներ, և օգտատերերի պրոֆիլներ չեն ստեղծվում։',

    'cta.title': 'Պատրա՞ստ եք սկսել։',
    'cta.subtitle': 'Հասանելի է անվճար iPhone-ի, iPad-ի և Mac-ի համար։',
    'cta.button': 'Ներբեռնել App Store-ից',

    'footer.tagline': 'Հետևեք ձեր ժամանակին առանց ջանքի։',
    'footer.legal': 'Իրավական տեղեկություններ',
    'footer.product': 'Ապրանք',
    'footer.appstore': 'App Store',
    'footer.contact': 'Կապ',
    'footer.imprint': 'Իրավական տվյալներ',
    'footer.privacy': 'Գաղտնիություն',
    'footer.copyright': '© {year} Luca Efinger։ Բոլոր իրավունքները պաշտպանված են։',

    'contact.title': 'Կապ',
    'contact.subtitle': 'Հարցե՞ր, կարծիքնե՞ր կամ գաղափարնե՞ր։ Գրեք մեզ։',
    'contact.email.label': 'Էլ․ փոստ',
    'contact.email.body':
      'Գրեք մեզ ստորև նշված հասցեով․ մենք կարդում ենք յուրաքանչյուր նամակ և պատասխանում ենք հնարավորինս արագ։',
    'contact.response':
      'Սովորաբար պատասխանում ենք մի քանի աշխատանքային օրվա ընթացքում։ Սխալի մասին հաղորդելիս նշեք ձեր սարքի մոդելը և iOS-ի տարբերակը։',

    'imprint.title': 'Իրավական տվյալներ',
    'imprint.country': 'Գերմանիա',
    'imprint.according': 'Տեղեկություններ § 5 DDG-ի համաձայն',
    'imprint.contact': 'Կապ',
    'imprint.responsible': 'Բովանդակության համար պատասխանատու § 18, կետ 2 MStV-ի համաձայն',
    'imprint.disclaimer.title': 'Պատասխանատվության հրաժարում',
    'imprint.disclaimer.liability.title': 'Պատասխանատվություն բովանդակության համար',
    'imprint.disclaimer.liability.body':
      'Որպես ծառայություն մատուցող՝ մենք պատասխանատու ենք այս էջերի սեփական բովանդակության համար ընդհանուր իրավունքի նորմերի համաձայն։ Սակայն DSA-ի հոդված 8-ի համաձայն մենք պարտավոր չենք հսկել փոխանցված կամ պահպանված օտար տեղեկությունը կամ պարզել հանգամանքներ, որոնք վկայում են ապօրինի գործունեության մասին։ Ընդհանուր իրավունքի նորմերով նախատեսված՝ տեղեկության հեռացման կամ օգտագործման արգելափակման պարտավորությունները մնում են ուժի մեջ։ Այս մասով պատասխանատվությունը ծագում է միայն կոնկրետ խախտման մասին իմանալու պահից։ Նման խախտումների մասին տեղեկանալուն պես մենք անհապաղ կհեռացնենք համապատասխան բովանդակությունը։',
    'imprint.disclaimer.links.title': 'Պատասխանատվություն հղումների համար',
    'imprint.disclaimer.links.body':
      'Մեր առաջարկը պարունակում է հղումներ երրորդ անձանց արտաքին կայքերին, որոնց բովանդակության վրա մենք ազդեցություն չունենք։ Այդ պատճառով մենք չենք կարող պատասխանատվություն կրել այդ արտաքին բովանդակության համար։ Հղված էջերի բովանդակության համար միշտ պատասխանատու է դրանց համապատասխան մատակարարը կամ շահագործողը։ Հղումները տեղադրելու պահին էջերը ստուգվել են հնարավոր իրավախախտումների առումով։ Այդ պահին ապօրինի բովանդակություն չի հայտնաբերվել։ Սակայն հղված էջերի բովանդակության մշտական հսկողությունը առանց խախտման կոնկրետ ցուցումների իրատեսական չէ։ Խախտումների մասին տեղեկանալուն պես մենք անհապաղ կհեռացնենք համապատասխան հղումները։',
    'imprint.disclaimer.copyright.title': 'Հեղինակային իրավունք',
    'imprint.disclaimer.copyright.body':
      'Կայքի շահագործողի կողմից այս էջերում ստեղծված բովանդակությունը և ստեղծագործությունները պաշտպանված են Գերմանիայի հեղինակային իրավունքով։ Վերարտադրումը, մշակումը, տարածումը և հեղինակային իրավունքի սահմաններից դուրս ցանկացած օգտագործում պահանջում են համապատասխան հեղինակի կամ ստեղծողի գրավոր համաձայնությունը։ Այս կայքի ներբեռնումները և պատճենները թույլատրվում են միայն անձնական, ոչ առևտրային օգտագործման համար։',

    'privacy.title': 'Գաղտնիության քաղաքականություն',
    'privacy.lastUpdated': 'Վերջին թարմացումը',
    'privacy.intro.title': 'Ընդհանուր տեղեկություն',
    'privacy.intro.body':
      'Ձեր անձնական տվյալների պաշտպանությունը կարևոր է մեզ համար։ Այս քաղաքականությունը բացատրում է, թե ինչ տվյալներ են մշակվում SimpleTime հավելվածից և այս կայքից օգտվելիս և ինչպես։ Համառոտ․ մենք հավաքում ենք նվազագույնը և ոչինչ չենք փոխանցում երրորդ անձանց։',
    'privacy.app.title': 'SimpleTime հավելվածը',
    'privacy.app.body':
      'SimpleTime-ը որևէ անձնական տեղեկություն չի հավաքում։ Ձեր մուտքագրած բոլոր տվյալները՝ զբաղմունքներ, առաջադրանքներ, կատեգորիաներ, նշումներ և ժամանակներ, պահվում են բացառապես ձեր սարքում։ Ցանկության դեպքում կարող եք միացնել iCloud-ի պահուստավորումը․ այդ դեպքում ձեր տվյալները գաղտնագրված փոխանցվում են Apple-ի iCloud ենթակառուցվածքի միջոցով ձեր սեփական iCloud հաշվին։ Մենք ոչ մի պահի այդ տվյալներին հասանելիություն չունենք։',
    'privacy.app.nocollect.title': 'Առանց վերլուծության, առանց հետագծման',
    'privacy.app.nocollect.body':
      'Հավելվածում չկան վերլուծական SDK-ներ, գովազդ, երրորդ կողմի վթարների հաշվետվության գործիքներ կամ օգտատերերի հետագծում։ Օգտատերերի պրոֆիլներ չեն ստեղծվում։',
    'privacy.website.title': 'Այս կայքը',
    'privacy.website.body':
      'Այս կայքը տեղակայված է Cloudflare Workers-ում։ Այցելության ժամանակ ձեր զննարկիչը տեխնիկական պատճառներով սերվերին փոխանցում է IP-հասցե և user agent, ինչը անխուսափելի է ցանկացած կայքի մատուցման համար։ Cloudflare-ը կարող է այդ տեղեկությունը ժամանակավորապես պահել սերվերի մատյաններում անվտանգության նպատակով։ Մենք ինքներս նման տվյալներ չենք հավաքում, չենք պահում և չենք վերլուծում։ Այս կայքը չի օգտագործում cookie-ներ, վերլուծություն, հետագծում կամ երրորդ կողմի տառատեսակներ․ տառատեսակները մատուցվում են մեր սեփական սերվերից։',
    'privacy.website.hosting.title': 'Հոսթինգ',
    'privacy.website.hosting.body':
      'Մատակարար․ Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, ԱՄՆ։ Լրացուցիչ տեղեկություններ՝ Cloudflare-ի գաղտնիության քաղաքականությունում՝ https://www.cloudflare.com/privacypolicy/ հասցեով։',
    'privacy.website.cdn.title': 'Բովանդակության մատուցման ցանց',
    'privacy.website.cdn.body':
      'Կայքը արագ մատուցելու և հարձակումներից պաշտպանելու համար մենք օգտագործում ենք Cloudflare՝ Cloudflare, Inc.-ի (101 Townsend Street, San Francisco, CA 94107, ԱՄՆ) բովանդակության մատուցման ցանցը և հակադարձ պրոքսի ծառայությունը։ Կայք մուտք գործելիս ձեր հարցումն անցնում է Cloudflare-ի սերվերներով։ Այդ ընթացքում Cloudflare-ը մշակում է կապի տեխնիկական տվյալները՝ մասնավորապես ձեր IP-հասցեն և user agent-ը՝ բովանդակությունը մատուցելու, անվտանգության սպառնալիքները հայտնաբերելու և վնասակար երթևեկությունն արգելափակելու համար։ Բոտերից պաշտպանվելու և աշխատաշրջանի անվտանգության համար Cloudflare-ը կարող է տեղադրել տեխնիկապես անհրաժեշտ cookie-ներ (օրինակ՝ __cf_bm, _cfuvid)․ դրանք չեն օգտագործվում հետագծման կամ վերլուծության նպատակով։ Իրավական հիմքը մեր օրինական շահն է՝ ապահով և արդյունավետ կայք ունենալու, ըստ GDPR-ի հոդված 6, կետ 1, ենթակետ f)։ Cloudflare-ը հավաստագրված է EU-U.S. Data Privacy Framework-ի շրջանակում, և կնքված է տվյալների մշակման պայմանագիր։ Լրացուցիչ տեղեկություններ՝ https://www.cloudflare.com/privacypolicy/ հասցեով։',
    'privacy.rights.title': 'Ձեր իրավունքները',
    'privacy.rights.body':
      'GDPR-ի համաձայն դուք ունեք տեղեկատվություն ստանալու, ուղղելու, ջնջելու, մշակումը սահմանափակելու, տվյալների տեղափոխելիության և մշակմանն առարկելու իրավունք։ Կարող եք կապվել մեզ հետ ցանկացած պահի՝ ստորև նշված կոնտակտային տվյալներով։',
    'privacy.contact.title': 'Կապ',
    'privacy.contact.body': 'Տվյալների պաշտպանության հարցերով դիմեք․',
    'privacy.changes.title': 'Փոփոխություններ',
    'privacy.changes.body':
      'Ժամանակ առ ժամանակ մենք կարող ենք թարմացնել այս քաղաքականությունը՝ հաշվի առնելով հավելվածի, կայքի կամ իրավական պահանջների փոփոխությունները։ Գործող տարբերակը միշտ հասանելի է այստեղ։',
  },
  pt: {
    'meta.title': 'SimpleTime – Registo de tempo para iOS',
    'meta.description':
      'Acompanhe o seu tempo sem esforço. O SimpleTime é um registo de tempo claro e intuitivo para iPhone, iPad e Mac. Sem contas, sem rastreio: os seus dados ficam consigo.',
    'meta.contact.description':
      'Tem uma pergunta, uma sugestão ou um erro a comunicar? Escreva ao SimpleTime por e-mail: lemos todas as mensagens e respondemos em poucos dias úteis.',
    'meta.privacy.description':
      'Como o SimpleTime trata os seus dados: fica tudo no seu dispositivo, a cópia de segurança no iCloud é opcional e cifrada, sem análises nem rastreio.',
    'meta.imprint.description':
      'Informação legal de simple-time.app nos termos do § 5 DDG: titular, contactos e informações de responsabilidade da aplicação e do site SimpleTime.',

    'nav.features': 'Funcionalidades',
    'nav.screenshots': 'Imagens',
    'nav.contact': 'Contacto',
    'nav.appstore': 'Ver na App Store',
    'nav.faq': 'Perguntas',
    'nav.menu': 'Abrir o menu',
    'nav.menu.close': 'Fechar o menu',
    'nav.language': 'Idioma',
    'nav.theme': 'Alternar entre claro e escuro',
    'skip.content': 'Ir para o conteúdo',

    'hero.eyebrow': 'Registo de tempo para iOS',
    'hero.title.part1': 'O seu tempo,',
    'hero.title.part2': 'sem esforço.',
    'hero.subtitle':
      'O SimpleTime ajuda-o a usar o seu tempo de forma consciente e eficiente. Trabalho, estudos, treino ou projetos pessoais: registe as suas atividades de forma clara e estruturada, sem complexidade desnecessária.',
    'hero.cta.appstore': 'Transferir na App Store',
    'hero.cta.features': 'Ver funcionalidades',
    'hero.availability': 'Gratuito · iPhone · iPad · Mac',
    'hero.proof.price': 'Transferência gratuita',
    'hero.proof.account': 'Sem conta',
    'hero.proof.private': 'Os dados ficam no dispositivo',

    'features.title': 'Concentre-se no que realmente importa: o seu tempo.',
    'features.subtitle': 'Tudo o que é preciso para um registo de tempo consciente, e nada mais.',
    'features.instant.title': 'Comece de imediato',
    'features.instant.body':
      'Basta um toque para começar a registar. Rápido, intuitivo e sem distrações.',
    'features.structured.title': 'Tarefas e subtarefas estruturadas',
    'features.structured.body':
      'Organize as suas atividades de forma hierárquica e reflita com rigor o trabalho, os estudos ou os projetos.',
    'features.timeline.title': 'Vista diária e cronologia',
    'features.timeline.body':
      'Tenha o dia à vista num relance: horas de início e de fim, duração e notas opcionais.',
    'features.stats.title': 'Estatísticas automáticas',
    'features.stats.body':
      'Gráficos claros e esclarecedores mostram as suas atividades por dia, semana e mês.',
    'features.icloud.title': 'Cópia de segurança inteligente no iCloud',
    'features.icloud.body':
      'Os seus dados são guardados automaticamente no iCloud, diária ou semanalmente, e sincronizados entre os seus dispositivos.',
    'features.export.title': 'Exportação CSV',
    'features.export.body':
      'Exporte os seus dados de tempo para o Excel, o Numbers ou qualquer outra ferramenta de análise.',
    'features.private.title': 'Privado e seguro',
    'features.private.body':
      'Os seus dados pertencem só a si. O SimpleTime não recolhe informação pessoal nem partilha nada com terceiros.',

    'screenshots.track.title': 'Registar',
    'screenshots.track.body': 'Todas as atividades do dia num relance.',
    'screenshots.customize.title': 'Personalizar',
    'screenshots.customize.body': 'Cores e categorias para cada tarefa.',
    'screenshots.overview.title': 'Resumo',
    'screenshots.overview.body': 'Todo o dia numa lista clara.',
    'screenshots.timeline.title': 'Cronologia',
    'screenshots.timeline.body': 'O seu dia hora a hora.',
    'screenshots.analyze.title': 'Analisar',
    'screenshots.analyze.body': 'Veja exatamente para onde vai o seu tempo.',
    'screenshots.reports.title': 'Relatórios',
    'screenshots.reports.body': 'Uma discriminação detalhada por tarefa.',

    'showcase.day.eyebrow': 'A vista diária',
    'showcase.day.title': 'Todo o dia num só lugar.',
    'showcase.day.body':
      'Inicie uma tarefa com um toque e deixe o registo ao SimpleTime. Cada entrada guarda a hora de início e de fim, a duração e uma nota opcional: o dia reconstrói-se sozinho enquanto trabalha.',
    'showcase.day.point1': 'Um toque para começar, outro para parar',
    'showcase.day.point2': 'Favoritos para o que regista todos os dias',
    'showcase.day.point3': 'Uma cronologia do dia, hora a hora',

    'showcase.insight.eyebrow': 'Estatísticas',
    'showcase.insight.title': 'Veja exatamente para onde vai o seu tempo.',
    'showcase.insight.body':
      'Os gráficos por dia, semana e mês transformam as suas entradas numa imagem sobre a qual pode agir. Precisa dos números em bruto? Exporte qualquer período em CSV e abra-o no Excel ou no Numbers.',
    'showcase.insight.point1': 'Gráficos por dia, semana e mês',
    'showcase.insight.point2': 'Relatórios detalhados de cada tarefa',
    'showcase.insight.point3': 'Exportação CSV para análises externas',

    'showcase.personal.eyebrow': 'A sua configuração',
    'showcase.personal.title': 'Adapta-se à sua forma de trabalhar.',
    'showcase.personal.body':
      'Dê a cada tarefa a sua cor, o seu ícone e a sua categoria, e aninhe subtarefas para refletir a estrutura real de um projeto. O que usa mais fica nos favoritos, sempre no topo.',
    'showcase.personal.point1': 'Cores, SF Symbols e emojis',
    'showcase.personal.point2': 'Categorias, tarefas e subtarefas',
    'showcase.personal.point3': 'Favoritos sempre à mão',

    'gallery.title': 'De mais perto.',
    'gallery.subtitle': 'Cada ecrã exatamente como aparece no seu dispositivo.',

    'audience.title': 'Para quem dá valor ao seu tempo.',
    'audience.subtitle':
      'Estudantes, freelancers, trabalhadores por conta de outrem, criativos, atletas e todos os que querem perceber onde passam realmente o seu tempo.',
    'audience.work.title': 'Trabalho e freelance',
    'audience.work.body':
      'Mantenha separados o trabalho para clientes e os seus projetos, e exporte um registo claro sempre que precisar.',
    'audience.study.title': 'Estudos e aprendizagem',
    'audience.study.body':
      'Veja quanto tempo uma disciplina exige na realidade e planeie a semana seguinte com números concretos.',
    'audience.training.title': 'Treino e hábitos',
    'audience.training.body':
      'Registe sessões, sono ou prática e veja a consistência a firmar-se semana após semana.',
    'audience.everyday.title': 'Dia a dia',
    'audience.everyday.body':
      'Descubra para onde vão realmente as horas e decida você mesmo o que quer mudar.',

    'faq.title': 'Perguntas frequentes.',
    'faq.subtitle': 'Tudo o que vale a pena saber antes de transferir.',
    'faq.free.q': 'O SimpleTime é mesmo gratuito?',
    'faq.free.a':
      'Sim. O SimpleTime transfere-se gratuitamente na App Store e funciona em iPhone, iPad e Mac.',
    'faq.account.q': 'Preciso de uma conta?',
    'faq.account.a':
      'Não. Não há registo nem início de sessão. Abre a aplicação e começa logo a registar.',
    'faq.data.q': 'Onde ficam guardados os meus dados?',
    'faq.data.a':
      'Exclusivamente no seu dispositivo. Se ativar a cópia de segurança no iCloud, os dados são transferidos cifrados para a sua própria conta iCloud. Nunca temos acesso a eles.',
    'faq.sync.q': 'Sincroniza entre os meus dispositivos?',
    'faq.sync.a':
      'Sim, através do iCloud. As cópias são feitas diária ou semanalmente e as suas entradas mantêm-se sincronizadas entre iPhone, iPad e Mac.',
    'faq.export.q': 'Posso voltar a obter os meus dados?',
    'faq.export.a':
      'A qualquer momento. O SimpleTime exporta os seus dados de tempo em CSV, prontos para o Excel, o Numbers ou qualquer outra ferramenta de análise.',
    'faq.tracking.q': 'A aplicação rastreia-me?',
    'faq.tracking.a':
      'Não. O SimpleTime não contém SDK de análise, publicidade nem relatórios de falhas de terceiros, e não cria perfis de utilizador.',

    'cta.title': 'Pronto para começar?',
    'cta.subtitle': 'Disponível gratuitamente para iPhone, iPad e Mac.',
    'cta.button': 'Transferir na App Store',

    'footer.tagline': 'Acompanhe o seu tempo sem esforço.',
    'footer.legal': 'Informação legal',
    'footer.product': 'Produto',
    'footer.appstore': 'App Store',
    'footer.contact': 'Contacto',
    'footer.imprint': 'Ficha legal',
    'footer.privacy': 'Privacidade',
    'footer.copyright': '© {year} Luca Efinger. Todos os direitos reservados.',

    'contact.title': 'Contacto',
    'contact.subtitle': 'Perguntas, sugestões ou ideias? Escreva-nos.',
    'contact.email.label': 'E-mail',
    'contact.email.body':
      'Escreva-nos para o endereço abaixo: lemos todas as mensagens e respondemos o mais depressa possível.',
    'contact.response':
      'Normalmente respondemos em poucos dias úteis. Se comunicar um erro, indique o modelo do dispositivo e a versão do iOS.',

    'imprint.title': 'Ficha legal',
    'imprint.country': 'Alemanha',
    'imprint.according': 'Informações nos termos do § 5 DDG',
    'imprint.contact': 'Contacto',
    'imprint.responsible': 'Responsável pelo conteúdo nos termos do § 18, n.º 2 MStV',
    'imprint.disclaimer.title': 'Exclusão de responsabilidade',
    'imprint.disclaimer.liability.title': 'Responsabilidade pelo conteúdo',
    'imprint.disclaimer.liability.body':
      'Enquanto prestador de serviços, somos responsáveis pelos conteúdos próprios destas páginas nos termos das normas gerais. Nos termos do art. 8.º do DSA, não estamos, contudo, obrigados a vigiar informação alheia transmitida ou armazenada, nem a investigar circunstâncias que indiciem atividade ilícita. Mantêm-se inalteradas as obrigações de remoção ou bloqueio da utilização de informação previstas nas normas gerais. A responsabilidade a este título só existe a partir do momento em que se tem conhecimento de uma infração concreta. Logo que tenhamos conhecimento de tais infrações, removeremos de imediato os conteúdos em causa.',
    'imprint.disclaimer.links.title': 'Responsabilidade pelas ligações',
    'imprint.disclaimer.links.body':
      'A nossa oferta contém ligações para sites externos de terceiros, sobre cujo conteúdo não temos influência. Por isso, não podemos assumir qualquer responsabilidade por esses conteúdos externos. Pelo conteúdo das páginas ligadas é sempre responsável o respetivo fornecedor ou operador. As páginas ligadas foram verificadas quanto a eventuais infrações legais no momento em que a ligação foi criada. Nessa altura, não eram reconhecíveis conteúdos ilícitos. Contudo, uma vigilância permanente do conteúdo das páginas ligadas não é exigível sem indícios concretos de uma infração. Logo que tenhamos conhecimento de infrações, removeremos de imediato as ligações em causa.',
    'imprint.disclaimer.copyright.title': 'Direitos de autor',
    'imprint.disclaimer.copyright.body':
      'Os conteúdos e as obras criados pelo operador do site nestas páginas estão sujeitos ao direito de autor alemão. A reprodução, a alteração, a distribuição e qualquer forma de exploração fora dos limites do direito de autor carecem do consentimento escrito do respetivo autor ou criador. As transferências e as cópias deste site são permitidas apenas para uso privado e não comercial.',

    'privacy.title': 'Política de privacidade',
    'privacy.lastUpdated': 'Última atualização',
    'privacy.intro.title': 'Resumo',
    'privacy.intro.body':
      'A proteção dos seus dados pessoais é importante para nós. Esta política explica que dados são tratados quando utiliza a aplicação SimpleTime e este site, e de que forma. Em resumo: recolhemos o mínimo possível e não partilhamos nada com terceiros.',
    'privacy.app.title': 'A aplicação SimpleTime',
    'privacy.app.body':
      'O SimpleTime não recolhe qualquer informação pessoal. Todos os dados que introduz — atividades, tarefas, categorias, notas e tempos — são guardados exclusivamente no seu dispositivo. Pode ativar opcionalmente a cópia de segurança no iCloud; nesse caso, os seus dados são transferidos cifrados através da infraestrutura iCloud da Apple para a sua própria conta iCloud. Nunca temos acesso a esses dados.',
    'privacy.app.nocollect.title': 'Sem análises, sem rastreio',
    'privacy.app.nocollect.body':
      'A aplicação não contém SDK de análise, publicidade, ferramentas de relatório de falhas de terceiros nem rastreio de utilizadores. Não são criados perfis de utilizador.',
    'privacy.website.title': 'Este site',
    'privacy.website.body':
      'Este site está alojado no Cloudflare Workers. Ao aceder, o seu navegador transmite por motivos técnicos um endereço IP e um user agent ao servidor, o que é inevitável na entrega de qualquer site. A Cloudflare pode guardar temporariamente essa informação em ficheiros de registo por motivos de segurança. Nós próprios não recolhemos, não guardamos nem analisamos esse tipo de dados. Este site não usa cookies, análises, rastreio nem tipos de letra de terceiros: os tipos de letra são servidos a partir do nosso próprio servidor.',
    'privacy.website.hosting.title': 'Alojamento',
    'privacy.website.hosting.body':
      'Fornecedor: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, EUA. Encontra mais informação na política de privacidade da Cloudflare em https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'Rede de distribuição de conteúdos',
    'privacy.website.cdn.body':
      'Para entregar este site com rapidez e protegê-lo contra ataques, utilizamos a Cloudflare, uma rede de distribuição de conteúdos e serviço de proxy inverso da Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, EUA. Ao aceder ao site, o seu pedido passa pelos servidores da Cloudflare. A Cloudflare trata nesse processo dados técnicos de ligação — em particular o seu endereço IP e o user agent — para entregar os conteúdos, detetar ameaças de segurança e bloquear tráfego malicioso. Para proteção contra bots e segurança da sessão, a Cloudflare pode colocar cookies tecnicamente necessários (por exemplo, __cf_bm, _cfuvid); estes não são usados para rastreio nem para análise. A base jurídica é o nosso interesse legítimo num site seguro e com bom desempenho, nos termos do artigo 6.º, n.º 1, alínea f) do RGPD. A Cloudflare está certificada ao abrigo do EU-U.S. Data Privacy Framework e foi celebrado um contrato de subcontratação. Encontra mais informação na política de privacidade da Cloudflare em https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'Os seus direitos',
    'privacy.rights.body':
      'Nos termos do RGPD, tem direito de acesso, retificação, apagamento, limitação do tratamento, portabilidade dos dados e de oposição ao tratamento. Pode contactar-nos a qualquer momento através dos contactos indicados abaixo.',
    'privacy.contact.title': 'Contacto',
    'privacy.contact.body': 'Para questões sobre proteção de dados, contacte:',
    'privacy.changes.title': 'Alterações',
    'privacy.changes.body':
      'Podemos atualizar esta política de tempos a tempos para refletir alterações na aplicação, no site ou nos requisitos legais. A versão em vigor está sempre disponível aqui.',
  },
  tr: {
    'meta.title': 'SimpleTime – iOS için zaman takibi',
    'meta.description':
      'Zamanını zahmetsizce takip et. SimpleTime, iPhone, iPad ve Mac için sade ve anlaşılır bir zaman takip uygulamasıdır. Hesap yok, izleme yok: verilerin sende kalır.',
    'meta.contact.description':
      'Sorun, önerin ya da bildirmek istediğin bir hata mı var? SimpleTime’a e-posta yaz: her mesajı okuyor ve birkaç iş günü içinde yanıtlıyoruz.',
    'meta.privacy.description':
      'SimpleTime verilerini nasıl işliyor: her şey cihazında kalır, iCloud yedeklemesi isteğe bağlı ve şifrelidir, analiz ve izleme yoktur.',
    'meta.imprint.description':
      'simple-time.app için § 5 DDG uyarınca yasal bilgiler: sahibi, iletişim bilgileri ve SimpleTime uygulaması ile sitesine ilişkin sorumluluk bilgileri.',

    'nav.features': 'Özellikler',
    'nav.screenshots': 'Ekran görüntüleri',
    'nav.contact': 'İletişim',
    'nav.appstore': 'App Store’da görüntüle',
    'nav.faq': 'Sorular',
    'nav.menu': 'Menüyü aç',
    'nav.menu.close': 'Menüyü kapat',
    'nav.language': 'Dil',
    'nav.theme': 'Açık ve koyu tema arasında geçiş yap',
    'skip.content': 'İçeriğe geç',

    'hero.eyebrow': 'iOS için zaman takibi',
    'hero.title.part1': 'Zamanın,',
    'hero.title.part2': 'zahmetsizce.',
    'hero.subtitle':
      'SimpleTime, zamanını bilinçli ve verimli kullanmana yardımcı olur. İş, eğitim, antrenman ya da kişisel projeler: etkinliklerini gereksiz karmaşa olmadan, net ve düzenli biçimde kaydet.',
    'hero.cta.appstore': 'App Store’dan indir',
    'hero.cta.features': 'Özellikleri gör',
    'hero.availability': 'Ücretsiz · iPhone · iPad · Mac',
    'hero.proof.price': 'Ücretsiz indirme',
    'hero.proof.account': 'Hesap gerekmez',
    'hero.proof.private': 'Veriler cihazda kalır',

    'features.title': 'Asıl önemli olana odaklan: zamanına.',
    'features.subtitle': 'Bilinçli zaman takibi için gereken her şey, fazlası değil.',
    'features.instant.title': 'Anında başla',
    'features.instant.body':
      'Kaydı başlatmak için tek dokunuş yeter. Hızlı, anlaşılır ve dikkat dağıtmadan.',
    'features.structured.title': 'Düzenli görevler ve alt görevler',
    'features.structured.body':
      'Etkinliklerini hiyerarşik olarak düzenle ve işini, eğitimini ya da projelerini olduğu gibi yansıt.',
    'features.timeline.title': 'Günlük görünüm ve zaman çizelgesi',
    'features.timeline.body':
      'Gününü tek bakışta gör: başlangıç ve bitiş saatleri, süre ve isteğe bağlı notlar.',
    'features.stats.title': 'Otomatik istatistikler',
    'features.stats.body':
      'Anlaşılır ve açıklayıcı grafikler etkinliklerini gün, hafta ve ay bazında gösterir.',
    'features.icloud.title': 'Akıllı iCloud yedeklemesi',
    'features.icloud.body':
      'Verilerin günlük ya da haftalık olarak otomatik biçimde iCloud’a yedeklenir ve cihazların arasında eşitlenir.',
    'features.export.title': 'CSV dışa aktarma',
    'features.export.body':
      'Zaman verilerini Excel, Numbers ya da başka bir analiz aracına aktar.',
    'features.private.title': 'Özel ve güvenli',
    'features.private.body':
      'Verilerin yalnızca sana aittir. SimpleTime kişisel bilgi toplamaz ve üçüncü taraflarla hiçbir şey paylaşmaz.',

    'screenshots.track.title': 'Kaydet',
    'screenshots.track.body': 'Günün tüm etkinlikleri tek bakışta.',
    'screenshots.customize.title': 'Özelleştir',
    'screenshots.customize.body': 'Her görev için renkler ve kategoriler.',
    'screenshots.overview.title': 'Genel bakış',
    'screenshots.overview.body': 'Tüm günün tek bir net listede.',
    'screenshots.timeline.title': 'Zaman çizelgesi',
    'screenshots.timeline.body': 'Günün saat saat.',
    'screenshots.analyze.title': 'Analiz et',
    'screenshots.analyze.body': 'Zamanının tam olarak nereye gittiğini gör.',
    'screenshots.reports.title': 'Raporlar',
    'screenshots.reports.body': 'Göreve göre ayrıntılı döküm.',

    'showcase.day.eyebrow': 'Günlük görünüm',
    'showcase.day.title': 'Tüm günün tek bir yerde.',
    'showcase.day.body':
      'Bir görevi tek dokunuşla başlat, kaydı SimpleTime tutsun. Her kayıt başlangıç ve bitiş saatini, süreyi ve isteğe bağlı bir notu taşır: sen çalışırken günün kendiliğinden oluşur.',
    'showcase.day.point1': 'Başlatmak için bir dokunuş, durdurmak için bir tane daha',
    'showcase.day.point2': 'Her gün kaydettiklerin için favoriler',
    'showcase.day.point3': 'Gününün saat saat zaman çizelgesi',

    'showcase.insight.eyebrow': 'İstatistikler',
    'showcase.insight.title': 'Zamanının tam olarak nereye gittiğini gör.',
    'showcase.insight.body':
      'Gün, hafta ve ay grafikleri kayıtlarını üzerinde işlem yapabileceğin bir tabloya dönüştürür. Ham sayılar mı lazım? Herhangi bir aralığı CSV olarak dışa aktar ve Excel ya da Numbers’ta aç.',
    'showcase.insight.point1': 'Gün, hafta ve ay grafikleri',
    'showcase.insight.point2': 'Her görev için ayrıntılı raporlar',
    'showcase.insight.point3': 'Dış analizler için CSV dışa aktarma',

    'showcase.personal.eyebrow': 'Kendi düzenin',
    'showcase.personal.title': 'Çalışma biçimine uyum sağlar.',
    'showcase.personal.body':
      'Her göreve kendi rengini, simgesini ve kategorisini ver; alt görevlerle bir projenin gerçek yapısını yansıt. En çok kullandığın favorilerde kalır, hep en üstte.',
    'showcase.personal.point1': 'Renkler, SF Symbols ve emojiler',
    'showcase.personal.point2': 'Kategoriler, görevler ve alt görevler',
    'showcase.personal.point3': 'Favoriler hep elinin altında',

    'gallery.title': 'Daha yakından.',
    'gallery.subtitle': 'Her ekran, cihazında göründüğü gibi.',

    'audience.title': 'Zamanına değer veren herkes için.',
    'audience.subtitle':
      'Öğrenciler, serbest çalışanlar, çalışanlar, yaratıcı meslekler, sporcular ve zamanının gerçekte nereye gittiğini anlamak isteyen herkes.',
    'audience.work.title': 'İş ve serbest çalışma',
    'audience.work.body':
      'Müşteri işlerini ve kendi projelerini ayrı tut, gerektiğinde net bir kayıt dışa aktar.',
    'audience.study.title': 'Eğitim ve öğrenme',
    'audience.study.body':
      'Bir dersin gerçekte ne kadar zaman aldığını gör ve sonraki haftayı gerçek sayılarla planla.',
    'audience.training.title': 'Antrenman ve alışkanlıklar',
    'audience.training.body':
      'Seansları, uykuyu ya da çalışmayı kaydet ve haftalar içinde düzenin nasıl oturduğunu izle.',
    'audience.everyday.title': 'Günlük yaşam',
    'audience.everyday.body':
      'Saatlerin gerçekte nereye gittiğini öğren ve neyi değiştirmek istediğine kendin karar ver.',

    'faq.title': 'Sık sorulan sorular.',
    'faq.subtitle': 'İndirmeden önce bilinmesi gereken her şey.',
    'faq.free.q': 'SimpleTime gerçekten ücretsiz mi?',
    'faq.free.a':
      'Evet. SimpleTime App Store’dan ücretsiz indirilir ve iPhone, iPad ile Mac’te çalışır.',
    'faq.account.q': 'Hesap gerekiyor mu?',
    'faq.account.a':
      'Hayır. Kayıt ya da giriş yok. Uygulamayı açıp doğrudan kaydetmeye başlarsın.',
    'faq.data.q': 'Verilerim nerede saklanıyor?',
    'faq.data.a':
      'Yalnızca cihazında. iCloud yedeklemesini açarsan verilerin şifrelenmiş olarak kendi iCloud hesabına aktarılır. Hiçbir aşamada bunlara erişimimiz olmaz.',
    'faq.sync.q': 'Cihazlarım arasında eşitleniyor mu?',
    'faq.sync.a':
      'Evet, iCloud üzerinden. Yedekleme günlük ya da haftalık yapılır ve kayıtların iPhone, iPad ile Mac arasında eşitli kalır.',
    'faq.export.q': 'Verilerimi geri alabilir miyim?',
    'faq.export.a':
      'İstediğin zaman. SimpleTime zaman verilerini CSV olarak dışa aktarır; Excel, Numbers ya da başka bir analiz aracı için hazırdır.',
    'faq.tracking.q': 'Uygulama beni izliyor mu?',
    'faq.tracking.a':
      'Hayır. SimpleTime’da analiz SDK’ları, reklam ya da üçüncü taraf çökme raporlama araçları yoktur ve kullanıcı profili oluşturulmaz.',

    'cta.title': 'Başlamaya hazır mısın?',
    'cta.subtitle': 'iPhone, iPad ve Mac için ücretsiz.',
    'cta.button': 'App Store’dan indir',

    'footer.tagline': 'Zamanını zahmetsizce takip et.',
    'footer.legal': 'Yasal bilgiler',
    'footer.product': 'Ürün',
    'footer.appstore': 'App Store',
    'footer.contact': 'İletişim',
    'footer.imprint': 'Künye',
    'footer.privacy': 'Gizlilik',
    'footer.copyright': '© {year} Luca Efinger. Tüm hakları saklıdır.',

    'contact.title': 'İletişim',
    'contact.subtitle': 'Soru, geri bildirim ya da fikir mi var? Bize yaz.',
    'contact.email.label': 'E-posta',
    'contact.email.body':
      'Aşağıdaki adrese yaz: her mesajı okuyor ve olabildiğince hızlı yanıtlıyoruz.',
    'contact.response':
      'Genellikle birkaç iş günü içinde yanıtlıyoruz. Bir hata bildirirken cihaz modelini ve iOS sürümünü belirt.',

    'imprint.title': 'Künye',
    'imprint.country': 'Almanya',
    'imprint.according': '§ 5 DDG uyarınca bilgiler',
    'imprint.contact': 'İletişim',
    'imprint.responsible': '§ 18, fıkra 2 MStV uyarınca içerikten sorumlu',
    'imprint.disclaimer.title': 'Sorumluluk reddi',
    'imprint.disclaimer.liability.title': 'İçerik sorumluluğu',
    'imprint.disclaimer.liability.body':
      'Hizmet sağlayıcı olarak bu sayfalardaki kendi içeriklerimizden genel hükümler uyarınca sorumluyuz. Ancak DSA’nın 8. maddesi uyarınca, iletilen veya saklanan üçüncü kişi bilgilerini denetlemek ya da hukuka aykırı bir faaliyete işaret eden koşulları araştırmakla yükümlü değiliz. Genel hükümler uyarınca bilgilerin kaldırılmasına veya kullanımının engellenmesine ilişkin yükümlülükler saklıdır. Bu yöndeki sorumluluk ancak somut bir ihlalin öğrenildiği andan itibaren doğar. Bu tür ihlalleri öğrendiğimiz anda ilgili içerikleri gecikmeksizin kaldırırız.',
    'imprint.disclaimer.links.title': 'Bağlantı sorumluluğu',
    'imprint.disclaimer.links.body':
      'Sunumumuz, içeriğine etki edemeyeceğimiz üçüncü kişilere ait dış web sitelerine bağlantılar içerir. Bu nedenle bu dış içerikler için hiçbir sorumluluk üstlenemeyiz. Bağlantı verilen sayfaların içeriğinden her zaman ilgili sağlayıcı veya işletmeci sorumludur. Bağlantı verildiği sırada sayfalar olası hukuka aykırılıklar bakımından incelenmiştir. O anda hukuka aykırı içerik tespit edilmemiştir. Ancak somut bir ihlal belirtisi olmadan bağlantı verilen sayfaların içeriğinin sürekli denetlenmesi beklenemez. İhlalleri öğrendiğimiz anda ilgili bağlantıları gecikmeksizin kaldırırız.',
    'imprint.disclaimer.copyright.title': 'Telif hakkı',
    'imprint.disclaimer.copyright.body':
      'Site işletmecisi tarafından bu sayfalarda oluşturulan içerik ve eserler Alman telif hakkı mevzuatına tabidir. Çoğaltma, işleme, yayma ve telif hakkının sınırları dışındaki her türlü değerlendirme, ilgili yazarın veya eser sahibinin yazılı iznini gerektirir. Bu sitenin indirilmesine ve kopyalanmasına yalnızca özel, ticari olmayan kullanım için izin verilir.',

    'privacy.title': 'Gizlilik politikası',
    'privacy.lastUpdated': 'Son güncelleme',
    'privacy.intro.title': 'Genel bakış',
    'privacy.intro.body':
      'Kişisel verilerinin korunması bizim için önemlidir. Bu politika, SimpleTime uygulamasını ve bu siteyi kullanırken hangi verilerin nasıl işlendiğini açıklar. Kısaca: mümkün olan en azını topluyor ve üçüncü taraflarla hiçbir şey paylaşmıyoruz.',
    'privacy.app.title': 'SimpleTime uygulaması',
    'privacy.app.body':
      'SimpleTime hiçbir kişisel bilgi toplamaz. Girdiğin tüm veriler — etkinlikler, görevler, kategoriler, notlar ve süreler — yalnızca cihazında saklanır. İstersen iCloud yedeklemesini açabilirsin; bu durumda verilerin Apple’ın iCloud altyapısı üzerinden şifrelenmiş olarak kendi iCloud hesabına aktarılır. Bu verilere hiçbir aşamada erişimimiz olmaz.',
    'privacy.app.nocollect.title': 'Analiz yok, izleme yok',
    'privacy.app.nocollect.body':
      'Uygulamada analiz SDK’ları, reklam, üçüncü taraf çökme raporlama araçları ve kullanıcı izleme bulunmaz. Kullanıcı profili oluşturulmaz.',
    'privacy.website.title': 'Bu web sitesi',
    'privacy.website.body':
      'Bu site Cloudflare Workers üzerinde barındırılmaktadır. Siteye eriştiğinde tarayıcın teknik nedenlerle sunucuya bir IP adresi ve user agent iletir; bu, herhangi bir sitenin sunulması için kaçınılmazdır. Cloudflare bu bilgileri güvenlik amacıyla sunucu günlüklerinde geçici olarak saklayabilir. Biz bu tür verileri toplamıyor, saklamıyor ve analiz etmiyoruz. Bu site çerez, analiz, izleme ya da üçüncü taraf yazı tipi kullanmaz: yazı tipleri kendi sunucumuzdan sunulur.',
    'privacy.website.hosting.title': 'Barındırma',
    'privacy.website.hosting.body':
      'Sağlayıcı: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, ABD. Ayrıntılı bilgi için Cloudflare’in gizlilik politikasına bakabilirsin: https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'İçerik dağıtım ağı',
    'privacy.website.cdn.body':
      'Bu siteyi hızlı sunmak ve saldırılara karşı korumak için Cloudflare, Inc. (101 Townsend Street, San Francisco, CA 94107, ABD) tarafından sağlanan içerik dağıtım ağı ve ters proxy hizmeti olan Cloudflare’i kullanıyoruz. Siteye eriştiğinde isteğin Cloudflare sunucularından geçer. Cloudflare bu sırada teknik bağlantı verilerini — özellikle IP adresini ve user agent bilgisini — içeriği sunmak, güvenlik tehditlerini tespit etmek ve zararlı trafiği engellemek için işler. Bot korumasında ve oturum güvenliğinde Cloudflare teknik olarak gerekli çerezler yerleştirebilir (örneğin __cf_bm, _cfuvid); bunlar izleme veya analiz amacıyla kullanılmaz. Hukuki dayanak, GDPR madde 6, fıkra 1, bent f) uyarınca güvenli ve iyi çalışan bir siteye ilişkin meşru menfaatimizdir. Cloudflare EU-U.S. Data Privacy Framework kapsamında sertifikalıdır ve sağlayıcıyla bir veri işleme sözleşmesi yapılmıştır. Ayrıntılı bilgi: https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'Haklarınız',
    'privacy.rights.body':
      'GDPR uyarınca bilgi edinme, düzeltme, silme, işlemenin kısıtlanması, veri taşınabilirliği ve işlemeye itiraz etme hakkına sahipsin. Aşağıdaki iletişim bilgilerinden bize istediğin zaman ulaşabilirsin.',
    'privacy.contact.title': 'İletişim',
    'privacy.contact.body': 'Veri koruma konusundaki sorular için:',
    'privacy.changes.title': 'Değişiklikler',
    'privacy.changes.body':
      'Uygulamadaki, sitedeki ya da yasal gerekliliklerdeki değişiklikleri yansıtmak için bu politikayı zaman zaman güncelleyebiliriz. Yürürlükteki sürüm her zaman burada bulunur.',
  },
  ar: {
    'meta.title': 'SimpleTime – تتبّع الوقت لنظام iOS',
    'meta.description':
      'تتبّع وقتك دون عناء. SimpleTime تطبيق واضح وسهل لتتبّع الوقت على iPhone وiPad وMac. بلا حسابات وبلا تتبّع: بياناتك تبقى عندك.',
    'meta.contact.description':
      'لديك سؤال أو ملاحظة أو خلل تريد الإبلاغ عنه؟ راسل SimpleTime بالبريد الإلكتروني: نقرأ كل رسالة ونردّ خلال أيام عمل قليلة.',
    'meta.privacy.description':
      'كيف يتعامل SimpleTime مع بياناتك: كل شيء يبقى على جهازك، والنسخ الاحتياطي على iCloud اختياري ومشفّر، بلا تحليلات وبلا تتبّع.',
    'meta.imprint.description':
      'البيانات القانونية لموقع simple-time.app وفقًا للمادة 5 من قانون DDG: المالك وبيانات الاتصال ومعلومات المسؤولية عن تطبيق SimpleTime وموقعه.',

    'nav.features': 'الميزات',
    'nav.screenshots': 'لقطات الشاشة',
    'nav.contact': 'اتصل بنا',
    'nav.appstore': 'عرض في App Store',
    'nav.faq': 'الأسئلة',
    'nav.menu': 'فتح القائمة',
    'nav.menu.close': 'إغلاق القائمة',
    'nav.language': 'اللغة',
    'nav.theme': 'التبديل بين الوضع الفاتح والداكن',
    'skip.content': 'الانتقال إلى المحتوى',

    'hero.eyebrow': 'تتبّع الوقت لنظام iOS',
    'hero.title.part1': 'وقتك،',
    'hero.title.part2': 'دون عناء.',
    'hero.subtitle':
      'يساعدك SimpleTime على استخدام وقتك بوعي وكفاءة. العمل أو الدراسة أو التمارين أو المشاريع الشخصية: سجّل أنشطتك بوضوح وتنظيم، دون تعقيد لا لزوم له.',
    'hero.cta.appstore': 'التنزيل من App Store',
    'hero.cta.features': 'استعرض الميزات',
    'hero.availability': 'مجاني · iPhone · iPad · Mac',
    'hero.proof.price': 'تنزيل مجاني',
    'hero.proof.account': 'بلا حساب',
    'hero.proof.private': 'البيانات تبقى على الجهاز',

    'features.title': 'ركّز على ما يهم فعلًا: وقتك.',
    'features.subtitle': 'كل ما تحتاجه لتتبّع واعٍ للوقت، ولا شيء زائد.',
    'features.instant.title': 'ابدأ فورًا',
    'features.instant.body':
      'لمسة واحدة تكفي لبدء التسجيل. سريع وواضح وبلا تشتيت.',
    'features.structured.title': 'مهام ومهام فرعية منظّمة',
    'features.structured.body':
      'نظّم أنشطتك بشكل هرمي لتعكس بدقة بنية عملك أو دراستك أو مشاريعك.',
    'features.timeline.title': 'عرض اليوم والخط الزمني',
    'features.timeline.body':
      'يومك أمامك بنظرة واحدة: أوقات البدء والانتهاء والمدة وملاحظات اختيارية.',
    'features.stats.title': 'إحصاءات تلقائية',
    'features.stats.body':
      'رسوم بيانية واضحة ومفيدة تعرض أنشطتك يوميًا وأسبوعيًا وشهريًا.',
    'features.icloud.title': 'نسخ احتياطي ذكي على iCloud',
    'features.icloud.body':
      'تُنسخ بياناتك تلقائيًا إلى iCloud يوميًا أو أسبوعيًا، وتتزامن بين أجهزتك.',
    'features.export.title': 'تصدير CSV',
    'features.export.body':
      'صدّر بيانات وقتك إلى Excel أو Numbers أو أي أداة تحليل أخرى.',
    'features.private.title': 'خاص وآمن',
    'features.private.body':
      'بياناتك ملك لك وحدك. لا يجمع SimpleTime أي معلومات شخصية ولا يشارك شيئًا مع أطراف أخرى.',

    'screenshots.track.title': 'التسجيل',
    'screenshots.track.body': 'كل أنشطة اليوم بنظرة واحدة.',
    'screenshots.customize.title': 'التخصيص',
    'screenshots.customize.body': 'ألوان وفئات لكل مهمة.',
    'screenshots.overview.title': 'نظرة عامة',
    'screenshots.overview.body': 'يومك كله في قائمة واضحة.',
    'screenshots.timeline.title': 'الخط الزمني',
    'screenshots.timeline.body': 'يومك ساعة بساعة.',
    'screenshots.analyze.title': 'التحليل',
    'screenshots.analyze.body': 'اعرف بالضبط أين يذهب وقتك.',
    'screenshots.reports.title': 'التقارير',
    'screenshots.reports.body': 'تفصيل دقيق لكل مهمة.',

    'showcase.day.eyebrow': 'عرض اليوم',
    'showcase.day.title': 'يومك كله في مكان واحد.',
    'showcase.day.body':
      'ابدأ المهمة بلمسة واحدة ودع SimpleTime يتولّى التسجيل. كل إدخال يحمل وقت البدء والانتهاء والمدة وملاحظة اختيارية: يومك يتكوّن من تلقاء نفسه بينما تعمل.',
    'showcase.day.point1': 'لمسة للبدء وأخرى للإيقاف',
    'showcase.day.point2': 'مفضّلات لما تسجّله يوميًا',
    'showcase.day.point3': 'خط زمني ليومك ساعة بساعة',

    'showcase.insight.eyebrow': 'الإحصاءات',
    'showcase.insight.title': 'اعرف بالضبط أين يذهب وقتك.',
    'showcase.insight.body':
      'تحوّل الرسوم البيانية اليومية والأسبوعية والشهرية إدخالاتك إلى صورة يمكنك التصرّف بناءً عليها. تحتاج الأرقام الخام؟ صدّر أي فترة بصيغة CSV وافتحها في Excel أو Numbers.',
    'showcase.insight.point1': 'رسوم بيانية يومية وأسبوعية وشهرية',
    'showcase.insight.point2': 'تقارير مفصّلة لكل مهمة',
    'showcase.insight.point3': 'تصدير CSV للتحليل الخارجي',

    'showcase.personal.eyebrow': 'إعدادك الخاص',
    'showcase.personal.title': 'يتكيّف مع طريقتك في العمل.',
    'showcase.personal.body':
      'امنح كل مهمة لونها ورمزها وفئتها، واستخدم المهام الفرعية لتعكس البنية الحقيقية للمشروع. ما تستخدمه أكثر يبقى في المفضّلة، دائمًا في الأعلى.',
    'showcase.personal.point1': 'ألوان ورموز SF Symbols وإيموجي',
    'showcase.personal.point2': 'فئات ومهام ومهام فرعية',
    'showcase.personal.point3': 'المفضّلة دائمًا في متناول يدك',

    'gallery.title': 'عن قرب.',
    'gallery.subtitle': 'كل شاشة تمامًا كما تظهر على جهازك.',

    'audience.title': 'لكل من يقدّر وقته.',
    'audience.subtitle':
      'الطلاب والعاملون المستقلون والموظفون وأصحاب المهن الإبداعية والرياضيون، وكل من يريد أن يفهم أين يذهب وقته حقًا.',
    'audience.work.title': 'العمل والعمل الحر',
    'audience.work.body':
      'افصل بين عمل العملاء ومشاريعك الخاصة، وصدّر سجلًا واضحًا عند الحاجة.',
    'audience.study.title': 'الدراسة والتعلّم',
    'audience.study.body':
      'اعرف كم من الوقت تتطلّبه مادة ما فعلًا، وخطّط للأسبوع التالي بأرقام حقيقية.',
    'audience.training.title': 'التمارين والعادات',
    'audience.training.body':
      'سجّل الحصص أو النوم أو التدريب، وراقب كيف يترسّخ الانتظام أسبوعًا بعد أسبوع.',
    'audience.everyday.title': 'الحياة اليومية',
    'audience.everyday.body':
      'اكتشف أين تذهب الساعات فعلًا، وقرّر بنفسك ما تريد تغييره.',

    'faq.title': 'الأسئلة الشائعة.',
    'faq.subtitle': 'كل ما يستحق معرفته قبل التنزيل.',
    'faq.free.q': 'هل SimpleTime مجاني فعلًا؟',
    'faq.free.a':
      'نعم. يُنزَّل SimpleTime مجانًا من App Store ويعمل على iPhone وiPad وMac.',
    'faq.account.q': 'هل أحتاج إلى حساب؟',
    'faq.account.a':
      'لا. لا يوجد تسجيل ولا تسجيل دخول. تفتح التطبيق وتبدأ التسجيل مباشرة.',
    'faq.data.q': 'أين تُحفظ بياناتي؟',
    'faq.data.a':
      'على جهازك حصريًا. إذا فعّلت النسخ الاحتياطي على iCloud، تُنقل بياناتك مشفّرة إلى حساب iCloud الخاص بك. لا نملك الوصول إليها في أي وقت.',
    'faq.sync.q': 'هل تتزامن البيانات بين أجهزتي؟',
    'faq.sync.a':
      'نعم، عبر iCloud. يجري النسخ يوميًا أو أسبوعيًا، وتبقى إدخالاتك متزامنة بين iPhone وiPad وMac.',
    'faq.export.q': 'هل يمكنني استعادة بياناتي؟',
    'faq.export.a':
      'في أي وقت. يصدّر SimpleTime بيانات وقتك بصيغة CSV، جاهزة لـ Excel أو Numbers أو أي أداة تحليل أخرى.',
    'faq.tracking.q': 'هل يتتبّعني التطبيق؟',
    'faq.tracking.a':
      'لا. لا يحتوي SimpleTime على أدوات تحليل ولا إعلانات ولا تقارير أعطال من أطراف أخرى، ولا يُنشئ ملفات تعريف للمستخدمين.',

    'cta.title': 'مستعد للبدء؟',
    'cta.subtitle': 'متاح مجانًا على iPhone وiPad وMac.',
    'cta.button': 'التنزيل من App Store',

    'footer.tagline': 'تتبّع وقتك دون عناء.',
    'footer.legal': 'معلومات قانونية',
    'footer.product': 'المنتج',
    'footer.appstore': 'App Store',
    'footer.contact': 'اتصل بنا',
    'footer.imprint': 'البيانات القانونية',
    'footer.privacy': 'الخصوصية',
    'footer.copyright': '© {year} Luca Efinger. جميع الحقوق محفوظة.',

    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'أسئلة أو ملاحظات أو أفكار؟ راسلنا.',
    'contact.email.label': 'البريد الإلكتروني',
    'contact.email.body':
      'راسلنا على العنوان أدناه: نقرأ كل رسالة ونردّ في أسرع وقت ممكن.',
    'contact.response':
      'نردّ عادةً خلال أيام عمل قليلة. عند الإبلاغ عن خلل، اذكر طراز جهازك وإصدار iOS.',

    'imprint.title': 'البيانات القانونية',
    'imprint.country': 'ألمانيا',
    'imprint.according': 'معلومات وفقًا للمادة 5 من قانون DDG',
    'imprint.contact': 'اتصل بنا',
    'imprint.responsible': 'المسؤول عن المحتوى وفقًا للمادة 18، الفقرة 2 من MStV',
    'imprint.disclaimer.title': 'إخلاء المسؤولية',
    'imprint.disclaimer.liability.title': 'المسؤولية عن المحتوى',
    'imprint.disclaimer.liability.body':
      'بصفتنا مقدّم خدمة، نتحمّل المسؤولية عن محتوانا الخاص على هذه الصفحات وفقًا للقواعد العامة. غير أننا، وفقًا للمادة 8 من DSA، غير ملزمين بمراقبة المعلومات الأجنبية المنقولة أو المخزّنة، ولا بالبحث عن ظروف تشير إلى نشاط غير مشروع. تبقى الالتزامات بإزالة المعلومات أو حجب استخدامها وفقًا للقواعد العامة قائمة. ولا تنشأ المسؤولية في هذا الشأن إلا من لحظة العلم بمخالفة محدّدة. وبمجرد علمنا بمثل هذه المخالفات، سنزيل المحتوى المعني فورًا.',
    'imprint.disclaimer.links.title': 'المسؤولية عن الروابط',
    'imprint.disclaimer.links.body':
      'يحتوي عرضنا على روابط لمواقع خارجية تابعة لأطراف أخرى لا نملك تأثيرًا على محتواها. لذلك لا يمكننا تحمّل أي مسؤولية عن هذه المحتويات الخارجية. ويظل مقدّم الصفحات المرتبطة أو مشغّلها هو المسؤول دائمًا عن محتواها. وقد جرى فحص الصفحات المرتبطة بحثًا عن مخالفات قانونية محتملة وقت إنشاء الروابط، ولم يكن هناك محتوى غير مشروع ظاهر آنذاك. غير أن المراقبة الدائمة لمحتوى الصفحات المرتبطة غير معقولة دون دلائل ملموسة على مخالفة. وبمجرد علمنا بمخالفات، سنزيل الروابط المعنية فورًا.',
    'imprint.disclaimer.copyright.title': 'حقوق النشر',
    'imprint.disclaimer.copyright.body':
      'تخضع المحتويات والأعمال التي أنشأها مشغّل الموقع على هذه الصفحات لقانون حقوق النشر الألماني. ويتطلّب النسخ والتعديل والتوزيع وأي شكل من أشكال الاستغلال خارج حدود حقوق النشر موافقة خطية من المؤلف أو المنشئ المعني. ولا يُسمح بتنزيل هذا الموقع ونسخه إلا للاستخدام الخاص غير التجاري.',

    'privacy.title': 'سياسة الخصوصية',
    'privacy.lastUpdated': 'آخر تحديث',
    'privacy.intro.title': 'نظرة عامة',
    'privacy.intro.body':
      'حماية بياناتك الشخصية أمر مهم بالنسبة إلينا. توضّح هذه السياسة ما البيانات التي تُعالَج عند استخدام تطبيق SimpleTime وهذا الموقع، وكيف تُعالَج. باختصار: نجمع الحد الأدنى ولا نشارك شيئًا مع أطراف أخرى.',
    'privacy.app.title': 'تطبيق SimpleTime',
    'privacy.app.body':
      'لا يجمع SimpleTime أي معلومات شخصية. جميع البيانات التي تدخلها — الأنشطة والمهام والفئات والملاحظات والأوقات — تُحفظ حصريًا على جهازك. ويمكنك اختياريًا تفعيل النسخ الاحتياطي على iCloud؛ عندها تُنقل بياناتك مشفّرة عبر بنية iCloud من Apple إلى حساب iCloud الخاص بك. ولا نملك الوصول إلى هذه البيانات في أي وقت.',
    'privacy.app.nocollect.title': 'بلا تحليلات وبلا تتبّع',
    'privacy.app.nocollect.body':
      'لا يحتوي التطبيق على أدوات تحليل ولا إعلانات ولا أدوات إبلاغ عن الأعطال من أطراف أخرى ولا تتبّع للمستخدمين. ولا تُنشأ ملفات تعريف للمستخدمين.',
    'privacy.website.title': 'هذا الموقع',
    'privacy.website.body':
      'يُستضاف هذا الموقع على Cloudflare Workers. وعند الزيارة، ينقل متصفحك لأسباب تقنية عنوان IP ومعرّف المتصفح إلى الخادم، وهو أمر لا مفرّ منه لتقديم أي موقع. وقد تحتفظ Cloudflare بهذه المعلومات مؤقتًا في سجلات الخادم لأغراض أمنية. أما نحن فلا نجمع هذه البيانات ولا نخزّنها ولا نحلّلها. ولا يستخدم هذا الموقع ملفات تعريف الارتباط ولا التحليلات ولا التتبّع ولا خطوطًا من أطراف أخرى: تُقدَّم الخطوط من خادمنا الخاص.',
    'privacy.website.hosting.title': 'الاستضافة',
    'privacy.website.hosting.body':
      'المزوّد: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, الولايات المتحدة. تجد مزيدًا من المعلومات في سياسة خصوصية Cloudflare على العنوان https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'شبكة توصيل المحتوى',
    'privacy.website.cdn.body':
      'لتقديم هذا الموقع بسرعة وحمايته من الهجمات، نستخدم Cloudflare، وهي شبكة لتوصيل المحتوى وخدمة وكيل عكسي من Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, الولايات المتحدة. وعند زيارة الموقع يمرّ طلبك عبر خوادم Cloudflare. وتعالج Cloudflare في ذلك بيانات اتصال تقنية — وبخاصة عنوان IP ومعرّف المتصفح — لتقديم المحتوى واكتشاف التهديدات الأمنية وحجب حركة المرور الضارة. ولحماية الموقع من الروبوتات ولأمان الجلسة، قد تضع Cloudflare ملفات تعريف ارتباط ضرورية تقنيًا (مثل __cf_bm و_cfuvid)؛ وهي لا تُستخدم للتتبّع أو التحليل. والأساس القانوني هو مصلحتنا المشروعة في موقع آمن وسريع وفقًا للمادة 6، الفقرة 1، البند (و) من اللائحة العامة لحماية البيانات. وCloudflare معتمدة ضمن إطار EU-U.S. Data Privacy Framework، وقد أُبرم معها عقد لمعالجة البيانات. تجد مزيدًا من المعلومات على https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'حقوقك',
    'privacy.rights.body':
      'وفقًا للائحة العامة لحماية البيانات، لك الحق في الاطلاع والتصحيح والمحو وتقييد المعالجة ونقل البيانات، وكذلك الحق في الاعتراض على المعالجة. ويمكنك التواصل معنا في أي وقت عبر بيانات الاتصال أدناه.',
    'privacy.contact.title': 'اتصل بنا',
    'privacy.contact.body': 'للأسئلة المتعلقة بحماية البيانات، يُرجى التواصل عبر:',
    'privacy.changes.title': 'التغييرات',
    'privacy.changes.body':
      'قد نحدّث هذه السياسة من وقت لآخر لمراعاة التغييرات في التطبيق أو الموقع أو المتطلبات القانونية. والنسخة السارية متاحة دائمًا هنا.',
  },
  ja: {
    'meta.title': 'SimpleTime – iOS向け時間記録アプリ',
    'meta.description':
      '時間を手軽に記録。SimpleTimeは iPhone、iPad、Mac 向けのシンプルで直感的な時間記録アプリです。アカウント不要、トラッキングなし。データは手元に残ります。',
    'meta.contact.description':
      'ご質問、ご意見、不具合のご報告はありませんか。SimpleTime までメールでお知らせください。すべてのメッセージに目を通し、数営業日以内にお返事します。',
    'meta.privacy.description':
      'SimpleTime のデータの扱い方について。すべては端末内に保存され、iCloud バックアップは任意かつ暗号化。解析もトラッキングもありません。',
    'meta.imprint.description':
      'simple-time.app の運営者情報（ドイツ DDG 第5条）。運営者、連絡先、SimpleTime アプリおよびサイトに関する責任事項。',

    'nav.features': '機能',
    'nav.screenshots': 'スクリーンショット',
    'nav.contact': 'お問い合わせ',
    'nav.appstore': 'App Store で見る',
    'nav.faq': 'よくある質問',
    'nav.menu': 'メニューを開く',
    'nav.menu.close': 'メニューを閉じる',
    'nav.language': '言語',
    'nav.theme': 'ライトとダークを切り替える',
    'skip.content': '本文へ移動',

    'hero.eyebrow': 'iOS向け時間記録アプリ',
    'hero.title.part1': 'あなたの時間を、',
    'hero.title.part2': '手軽に。',
    'hero.subtitle':
      'SimpleTime は、時間を意識的かつ効率的に使うための手助けをします。仕事、勉強、トレーニング、個人的なプロジェクト。余計な複雑さなしに、活動をわかりやすく整理して記録できます。',
    'hero.cta.appstore': 'App Store からダウンロード',
    'hero.cta.features': '機能を見る',
    'hero.availability': '無料 · iPhone · iPad · Mac',
    'hero.proof.price': '無料でダウンロード',
    'hero.proof.account': 'アカウント不要',
    'hero.proof.private': 'データは端末内に',

    'features.title': '本当に大切なものに集中を。あなたの時間に。',
    'features.subtitle': '意識的な時間記録に必要なものすべて。それ以上はありません。',
    'features.instant.title': 'すぐに始められる',
    'features.instant.body':
      'タップ一つで記録を開始。速く、わかりやすく、気を散らしません。',
    'features.structured.title': 'タスクとサブタスクで整理',
    'features.structured.body':
      '活動を階層的に整理して、仕事や勉強、プロジェクトの構造をそのまま反映できます。',
    'features.timeline.title': '日別ビューとタイムライン',
    'features.timeline.body':
      '一日をひと目で把握。開始と終了の時刻、所要時間、任意のメモも残せます。',
    'features.stats.title': '自動で集計',
    'features.stats.body':
      'わかりやすいグラフが、日別・週別・月別の活動を示します。',
    'features.icloud.title': 'スマートな iCloud バックアップ',
    'features.icloud.body':
      'データは毎日または毎週、自動的に iCloud へバックアップされ、端末間で同期されます。',
    'features.export.title': 'CSV 書き出し',
    'features.export.body':
      '時間データを Excel や Numbers、その他の分析ツールへ書き出せます。',
    'features.private.title': 'プライベートで安全',
    'features.private.body':
      'データはあなただけのものです。SimpleTime は個人情報を収集せず、第三者と共有することもありません。',

    'screenshots.track.title': '記録',
    'screenshots.track.body': '一日の活動をひと目で。',
    'screenshots.customize.title': 'カスタマイズ',
    'screenshots.customize.body': 'タスクごとに色とカテゴリを。',
    'screenshots.overview.title': '概要',
    'screenshots.overview.body': '一日全体をわかりやすい一覧で。',
    'screenshots.timeline.title': 'タイムライン',
    'screenshots.timeline.body': '一日を時間単位で。',
    'screenshots.analyze.title': '分析',
    'screenshots.analyze.body': '時間の使い道がはっきり見えます。',
    'screenshots.reports.title': 'レポート',
    'screenshots.reports.body': 'タスクごとの詳しい内訳。',

    'showcase.day.eyebrow': '日別ビュー',
    'showcase.day.title': '一日のすべてを一か所に。',
    'showcase.day.body':
      'タップ一つでタスクを開始すれば、記録は SimpleTime が引き受けます。各項目には開始と終了の時刻、所要時間、任意のメモが残るので、作業しているあいだに一日が自然と形になります。',
    'showcase.day.point1': 'タップで開始、もう一度で停止',
    'showcase.day.point2': '毎日記録するものはお気に入りに',
    'showcase.day.point3': '一日の流れを時間単位で',

    'showcase.insight.eyebrow': '統計',
    'showcase.insight.title': '時間の使い道がはっきり見えます。',
    'showcase.insight.body':
      '日別・週別・月別のグラフが、記録を手を打てる形に変えます。生の数値が必要なときは、任意の期間を CSV で書き出して Excel や Numbers で開けます。',
    'showcase.insight.point1': '日別・週別・月別のグラフ',
    'showcase.insight.point2': 'タスクごとの詳細レポート',
    'showcase.insight.point3': '外部分析のための CSV 書き出し',

    'showcase.personal.eyebrow': 'あなた仕様に',
    'showcase.personal.title': '働き方に合わせて変えられます。',
    'showcase.personal.body':
      'タスクごとに色、アイコン、カテゴリを設定できます。サブタスクを重ねれば、プロジェクトの実際の構造もそのまま表せます。よく使うものはお気に入りとして常に上に残ります。',
    'showcase.personal.point1': '色、SF Symbols、絵文字',
    'showcase.personal.point2': 'カテゴリ、タスク、サブタスク',
    'showcase.personal.point3': 'お気に入りはいつでも手元に',

    'gallery.title': 'もっと近くで。',
    'gallery.subtitle': 'どの画面も、端末で見えるとおりに。',

    'audience.title': '時間を大切にするすべての人へ。',
    'audience.subtitle':
      '学生、フリーランス、会社員、クリエイター、アスリート。そして、自分の時間が実際どこへ向かっているのかを知りたいすべての人に。',
    'audience.work.title': '仕事とフリーランス',
    'audience.work.body':
      'クライアントの仕事と自分のプロジェクトを分けて管理し、必要なときには明快な記録を書き出せます。',
    'audience.study.title': '勉強と学習',
    'audience.study.body':
      '科目ごとに実際どれだけ時間がかかるかを把握し、翌週の計画を実際の数値から立てられます。',
    'audience.training.title': 'トレーニングと習慣',
    'audience.training.body':
      '練習や睡眠、稽古を記録して、週を追うごとに積み上がる継続を確かめられます。',
    'audience.everyday.title': '日々の暮らし',
    'audience.everyday.body':
      '時間が実際どこへ消えているのかを知り、何を変えたいかを自分で決められます。',

    'faq.title': 'よくある質問',
    'faq.subtitle': 'ダウンロードの前に知っておきたいこと。',
    'faq.free.q': 'SimpleTime は本当に無料ですか。',
    'faq.free.a':
      'はい。SimpleTime は App Store から無料でダウンロードでき、iPhone、iPad、Mac で動作します。',
    'faq.account.q': 'アカウントは必要ですか。',
    'faq.account.a':
      'いいえ。登録もログインもありません。アプリを開けばすぐに記録を始められます。',
    'faq.data.q': 'データはどこに保存されますか。',
    'faq.data.a':
      'お使いの端末内にのみ保存されます。iCloud バックアップを有効にすると、データは暗号化されてご自身の iCloud アカウントへ転送されます。当方がアクセスすることは一切ありません。',
    'faq.sync.q': '端末間で同期されますか。',
    'faq.sync.a':
      'はい、iCloud を通じて同期されます。バックアップは毎日または毎週行われ、記録は iPhone、iPad、Mac のあいだで同期されたままになります。',
    'faq.export.q': 'データを取り出せますか。',
    'faq.export.a':
      'いつでも可能です。SimpleTime は時間データを CSV 形式で書き出し、Excel や Numbers、その他の分析ツールですぐに使えます。',
    'faq.tracking.q': 'アプリは私を追跡しますか。',
    'faq.tracking.a':
      'いいえ。SimpleTime には解析用の SDK も広告も、第三者によるクラッシュレポートもありません。ユーザープロファイルも作成しません。',

    'cta.title': '始めてみませんか。',
    'cta.subtitle': 'iPhone、iPad、Mac で無料でご利用いただけます。',
    'cta.button': 'App Store からダウンロード',

    'footer.tagline': '時間を手軽に記録。',
    'footer.legal': '法的情報',
    'footer.product': '製品',
    'footer.appstore': 'App Store',
    'footer.contact': 'お問い合わせ',
    'footer.imprint': '運営者情報',
    'footer.privacy': 'プライバシー',
    'footer.copyright': '© {year} Luca Efinger. All rights reserved.',

    'contact.title': 'お問い合わせ',
    'contact.subtitle': 'ご質問、ご意見、アイデアがありましたらお知らせください。',
    'contact.email.label': 'メール',
    'contact.email.body':
      '下記のアドレスまでご連絡ください。すべてのメッセージに目を通し、できるだけ早くお返事します。',
    'contact.response':
      '通常は数営業日以内にお返事します。不具合のご報告の際は、端末の機種と iOS のバージョンをお知らせください。',

    'imprint.title': '運営者情報',
    'imprint.country': 'ドイツ',
    'imprint.according': 'ドイツ DDG 第5条に基づく表示',
    'imprint.contact': 'お問い合わせ',
    'imprint.responsible': 'MStV 第18条第2項に基づく内容責任者',
    'imprint.disclaimer.title': '免責事項',
    'imprint.disclaimer.liability.title': '内容についての責任',
    'imprint.disclaimer.liability.body':
      'サービス提供者として、当方は本サイト上の自らのコンテンツについて一般法の規定に従い責任を負います。ただし DSA 第8条により、送信または保存された第三者の情報を監視する義務、および違法行為を示す状況を調査する義務は負いません。一般法の規定に基づく情報の削除または利用停止の義務はこれにより影響を受けません。この点についての責任は、具体的な権利侵害を認識した時点から生じます。当該の侵害を認識した場合、当方は直ちに該当するコンテンツを削除します。',
    'imprint.disclaimer.links.title': 'リンクについての責任',
    'imprint.disclaimer.links.body':
      '当方の提供内容には、その内容に影響を及ぼすことのできない第三者の外部サイトへのリンクが含まれます。そのため、これらの外部コンテンツについて当方は一切の責任を負いません。リンク先ページの内容については、常に当該提供者または運営者が責任を負います。リンク設定の時点でリンク先ページに法的な問題がないか確認しており、その時点で違法なコンテンツは認められませんでした。ただし、具体的な侵害の兆候がないかぎり、リンク先の内容を継続的に監視することは合理的に期待できません。権利侵害を認識した場合、当方は直ちに該当するリンクを削除します。',
    'imprint.disclaimer.copyright.title': '著作権',
    'imprint.disclaimer.copyright.body':
      '本サイト上でサイト運営者が作成したコンテンツおよび著作物は、ドイツ著作権法の保護を受けます。著作権法の定める範囲を超える複製、改変、頒布およびあらゆる形態の利用には、それぞれの著作者または制作者の書面による同意が必要です。本サイトのダウンロードおよび複製は、私的かつ非商業的な利用に限り認められます。',

    'privacy.title': 'プライバシーポリシー',
    'privacy.lastUpdated': '最終更新',
    'privacy.intro.title': '概要',
    'privacy.intro.body':
      '個人データの保護を大切に考えています。このポリシーでは、SimpleTime アプリおよび本サイトの利用にあたってどのようなデータがどのように扱われるかを説明します。要点は次のとおりです。収集は最小限にとどめ、第三者とは何も共有しません。',
    'privacy.app.title': 'SimpleTime アプリ',
    'privacy.app.body':
      'SimpleTime は個人情報を一切収集しません。入力されたデータ（活動、タスク、カテゴリ、メモ、時間）はすべてお使いの端末内にのみ保存されます。任意で iCloud バックアップを有効にできます。その場合、データは Apple の iCloud 基盤を通じて暗号化され、ご自身の iCloud アカウントへ転送されます。当方がこのデータにアクセスすることは一切ありません。',
    'privacy.app.nocollect.title': '解析なし、トラッキングなし',
    'privacy.app.nocollect.body':
      'アプリには解析用の SDK、広告、第三者によるクラッシュレポートツール、ユーザートラッキングのいずれも含まれていません。ユーザープロファイルも作成されません。',
    'privacy.website.title': '本サイトについて',
    'privacy.website.body':
      '本サイトは Cloudflare Workers 上でホストされています。アクセス時には、技術上の理由からブラウザが IP アドレスとユーザーエージェントをサーバーへ送信します。これはいかなるサイトの配信にも避けられないものです。Cloudflare はこの情報を安全性の目的でサーバーログに一時的に保存する場合があります。当方自身はこうしたデータを収集も保存も分析もしていません。本サイトは Cookie、解析、トラッキング、第三者のフォントのいずれも使用していません。フォントは当方のサーバーから配信されます。',
    'privacy.website.hosting.title': 'ホスティング',
    'privacy.website.hosting.body':
      '提供者: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, アメリカ合衆国。詳細は Cloudflare のプライバシーポリシー（https://www.cloudflare.com/privacypolicy/）をご覧ください。',
    'privacy.website.cdn.title': 'コンテンツ配信ネットワーク',
    'privacy.website.cdn.body':
      '本サイトを高速に配信し攻撃から保護するため、Cloudflare, Inc.（101 Townsend Street, San Francisco, CA 94107, アメリカ合衆国）のコンテンツ配信ネットワークおよびリバースプロキシサービスである Cloudflare を利用しています。サイトへのアクセス時、リクエストは Cloudflare のサーバーを経由します。その際 Cloudflare は、コンテンツの配信、セキュリティ上の脅威の検出、悪意あるトラフィックの遮断のために、接続に関する技術的データ（特に IP アドレスとユーザーエージェント）を処理します。ボット対策とセッションの安全性のため、Cloudflare は技術的に必要な Cookie（例: __cf_bm、_cfuvid）を設定する場合があります。これらはトラッキングや解析には使用されません。法的根拠は、GDPR 第6条第1項(f)に基づく、安全で高速なサイトに対する当方の正当な利益です。Cloudflare は EU-U.S. Data Privacy Framework の認証を受けており、データ処理契約を締結しています。詳細は https://www.cloudflare.com/privacypolicy/ をご覧ください。',
    'privacy.rights.title': 'あなたの権利',
    'privacy.rights.body':
      'GDPR に基づき、開示、訂正、削除、処理の制限、データポータビリティ、および処理への異議申立ての権利があります。下記の連絡先からいつでもご連絡いただけます。',
    'privacy.contact.title': 'お問い合わせ',
    'privacy.contact.body': 'データ保護に関するご質問は、次の連絡先までお願いします。',
    'privacy.changes.title': '変更',
    'privacy.changes.body':
      'アプリ、サイト、または法的要件の変更を反映するため、本ポリシーを随時更新することがあります。最新版は常にこのページでご確認いただけます。',
  },
  zh: {
    'meta.title': 'SimpleTime – iOS 时间记录应用',
    'meta.description':
      '轻松记录时间。SimpleTime 是一款为 iPhone、iPad 和 Mac 打造的清晰易用的时间记录应用。无需账户，没有追踪，数据留在你手中。',
    'meta.contact.description':
      '有问题、建议或想反馈错误？请发邮件给 SimpleTime，我们会阅读每一封来信，并在几个工作日内回复。',
    'meta.privacy.description':
      'SimpleTime 如何处理你的数据：一切都保存在你的设备上，iCloud 备份可选且经过加密，没有分析，没有追踪。',
    'meta.imprint.description':
      'simple-time.app 依据德国 DDG 第 5 条的法律声明：运营者、联系方式，以及 SimpleTime 应用与网站的责任说明。',

    'nav.features': '功能',
    'nav.screenshots': '截图',
    'nav.contact': '联系我们',
    'nav.appstore': '在 App Store 查看',
    'nav.faq': '常见问题',
    'nav.menu': '打开菜单',
    'nav.menu.close': '关闭菜单',
    'nav.language': '语言',
    'nav.theme': '切换浅色与深色',
    'skip.content': '跳到主要内容',

    'hero.eyebrow': 'iOS 时间记录应用',
    'hero.title.part1': '你的时间，',
    'hero.title.part2': '轻松掌握。',
    'hero.subtitle':
      'SimpleTime 帮助你更有意识、更高效地使用时间。工作、学习、训练或个人项目，都能清晰有条理地记录下来，没有多余的复杂。',
    'hero.cta.appstore': '在 App Store 下载',
    'hero.cta.features': '查看功能',
    'hero.availability': '免费 · iPhone · iPad · Mac',
    'hero.proof.price': '免费下载',
    'hero.proof.account': '无需账户',
    'hero.proof.private': '数据留在设备上',

    'features.title': '专注于真正重要的事：你的时间。',
    'features.subtitle': '有意识地记录时间所需的一切，别无冗余。',
    'features.instant.title': '即刻开始',
    'features.instant.body':
      '轻点一下就能开始记录。快速、直观，不打扰你。',
    'features.structured.title': '结构化的任务与子任务',
    'features.structured.body':
      '按层级整理你的活动，如实反映工作、学习或项目的结构。',
    'features.timeline.title': '每日视图与时间线',
    'features.timeline.body':
      '一眼看清这一天：开始与结束时间、时长，以及可选的备注。',
    'features.stats.title': '自动统计',
    'features.stats.body':
      '清晰易读的图表按日、周、月呈现你的活动。',
    'features.icloud.title': '智能 iCloud 备份',
    'features.icloud.body':
      '数据每天或每周自动备份到 iCloud，并在你的设备之间同步。',
    'features.export.title': 'CSV 导出',
    'features.export.body':
      '将时间数据导出到 Excel、Numbers 或任何其他分析工具。',
    'features.private.title': '私密而安全',
    'features.private.body':
      '数据只属于你。SimpleTime 不收集任何个人信息，也不与第三方共享任何内容。',

    'screenshots.track.title': '记录',
    'screenshots.track.body': '一眼看完当天的所有活动。',
    'screenshots.customize.title': '自定义',
    'screenshots.customize.body': '为每个任务设置颜色和分类。',
    'screenshots.overview.title': '总览',
    'screenshots.overview.body': '一整天都在一份清晰的列表里。',
    'screenshots.timeline.title': '时间线',
    'screenshots.timeline.body': '按小时呈现你的一天。',
    'screenshots.analyze.title': '分析',
    'screenshots.analyze.body': '清楚看见时间去了哪里。',
    'screenshots.reports.title': '报告',
    'screenshots.reports.body': '按任务的详细明细。',

    'showcase.day.eyebrow': '每日视图',
    'showcase.day.title': '一整天，都在一处。',
    'showcase.day.body':
      '轻点一下开始任务，记录交给 SimpleTime。每条记录都带有开始与结束时间、时长和可选备注，你在工作的同时，这一天就自己成形了。',
    'showcase.day.point1': '一点开始，一点停止',
    'showcase.day.point2': '把每天都记录的事设为收藏',
    'showcase.day.point3': '按小时呈现的一天时间线',

    'showcase.insight.eyebrow': '统计',
    'showcase.insight.title': '清楚看见时间去了哪里。',
    'showcase.insight.body':
      '按日、周、月的图表把你的记录变成可以据此行动的图景。需要原始数字？把任意时间段导出为 CSV，在 Excel 或 Numbers 中打开。',
    'showcase.insight.point1': '按日、周、月的图表',
    'showcase.insight.point2': '每个任务的详细报告',
    'showcase.insight.point3': '用于外部分析的 CSV 导出',

    'showcase.personal.eyebrow': '你的设置',
    'showcase.personal.title': '贴合你的工作方式。',
    'showcase.personal.body':
      '为每个任务设置专属的颜色、图标和分类，用子任务还原项目的真实结构。最常用的会留在收藏里，始终排在最前。',
    'showcase.personal.point1': '颜色、SF Symbols 和表情符号',
    'showcase.personal.point2': '分类、任务与子任务',
    'showcase.personal.point3': '收藏随时触手可及',

    'gallery.title': '走近看看。',
    'gallery.subtitle': '每个界面，都和你设备上看到的一样。',

    'audience.title': '献给每一位珍惜时间的人。',
    'audience.subtitle':
      '学生、自由职业者、上班族、创作者、运动员，以及所有想弄清楚时间究竟去了哪里的人。',
    'audience.work.title': '工作与自由职业',
    'audience.work.body':
      '把客户工作和自己的项目分开管理，需要时导出一份清晰的记录。',
    'audience.study.title': '学习与进修',
    'audience.study.body':
      '看清一门课真正需要多少时间，用真实数字规划下一周。',
    'audience.training.title': '训练与习惯',
    'audience.training.body':
      '记录训练、睡眠或练习，看着坚持在一周周里累积起来。',
    'audience.everyday.title': '日常生活',
    'audience.everyday.body':
      '弄清楚时间实际去了哪里，再由你自己决定想改变什么。',

    'faq.title': '常见问题',
    'faq.subtitle': '下载之前值得了解的事。',
    'faq.free.q': 'SimpleTime 真的免费吗？',
    'faq.free.a':
      '是的。SimpleTime 可在 App Store 免费下载，支持 iPhone、iPad 和 Mac。',
    'faq.account.q': '需要账户吗？',
    'faq.account.a':
      '不需要。没有注册，也没有登录。打开应用即可开始记录。',
    'faq.data.q': '我的数据保存在哪里？',
    'faq.data.a':
      '只保存在你的设备上。如果你启用 iCloud 备份，数据会加密传输到你自己的 iCloud 账户。我们在任何时候都无法访问这些数据。',
    'faq.sync.q': '会在我的多台设备之间同步吗？',
    'faq.sync.a':
      '会，通过 iCloud 同步。备份每天或每周进行，你的记录在 iPhone、iPad 和 Mac 之间保持一致。',
    'faq.export.q': '我能把数据取回来吗？',
    'faq.export.a':
      '随时可以。SimpleTime 将时间数据导出为 CSV，可直接用于 Excel、Numbers 或任何其他分析工具。',
    'faq.tracking.q': '这个应用会追踪我吗？',
    'faq.tracking.a':
      '不会。SimpleTime 没有分析 SDK、没有广告、没有第三方崩溃报告工具，也不会创建用户画像。',

    'cta.title': '准备好开始了吗？',
    'cta.subtitle': '在 iPhone、iPad 和 Mac 上免费使用。',
    'cta.button': '在 App Store 下载',

    'footer.tagline': '轻松记录时间。',
    'footer.legal': '法律信息',
    'footer.product': '产品',
    'footer.appstore': 'App Store',
    'footer.contact': '联系我们',
    'footer.imprint': '法律声明',
    'footer.privacy': '隐私',
    'footer.copyright': '© {year} Luca Efinger. 保留所有权利。',

    'contact.title': '联系我们',
    'contact.subtitle': '有问题、建议或想法？欢迎来信。',
    'contact.email.label': '电子邮件',
    'contact.email.body':
      '请写信到下面的地址，我们会阅读每一封来信，并尽快回复。',
    'contact.response':
      '我们通常在几个工作日内回复。反馈错误时，请附上设备型号和 iOS 版本。',

    'imprint.title': '法律声明',
    'imprint.country': '德国',
    'imprint.according': '依据德国 DDG 第 5 条的信息',
    'imprint.contact': '联系我们',
    'imprint.responsible': '依据 MStV 第 18 条第 2 款的内容负责人',
    'imprint.disclaimer.title': '免责声明',
    'imprint.disclaimer.liability.title': '内容责任',
    'imprint.disclaimer.liability.body':
      '作为服务提供者，我们依据一般法律规定对本网站上的自有内容负责。但依据 DSA 第 8 条，我们没有义务监控所传输或存储的第三方信息，也没有义务调查显示存在违法行为的情形。依据一般法律规定删除信息或阻止其使用的义务不受影响。相关责任仅自得知具体侵权行为之时起产生。一经得知此类侵权，我们将立即删除相关内容。',
    'imprint.disclaimer.links.title': '链接责任',
    'imprint.disclaimer.links.body':
      '我们的网站包含指向第三方外部网站的链接，我们无法影响其内容。因此我们对这些外部内容不承担任何责任。所链接页面的内容始终由其各自的提供者或运营者负责。设置链接时，我们已就可能的违法情形对相关页面进行了检查，当时未发现违法内容。但在没有具体侵权迹象的情况下，持续监控所链接页面的内容并不合理。一经得知侵权行为，我们将立即删除相关链接。',
    'imprint.disclaimer.copyright.title': '著作权',
    'imprint.disclaimer.copyright.body':
      '网站运营者在本网站上创作的内容和作品受德国著作权法保护。超出著作权法允许范围的复制、修改、传播和任何形式的利用，均须取得相应作者或创作者的书面同意。本网站的下载与复制仅限于私人非商业用途。',

    'privacy.title': '隐私政策',
    'privacy.lastUpdated': '最后更新',
    'privacy.intro.title': '概述',
    'privacy.intro.body':
      '保护你的个人数据对我们很重要。本政策说明你在使用 SimpleTime 应用和本网站时，哪些数据会被处理，以及如何处理。简而言之：我们尽可能少地收集，并且不与第三方共享任何内容。',
    'privacy.app.title': 'SimpleTime 应用',
    'privacy.app.body':
      'SimpleTime 不收集任何个人信息。你输入的所有数据——活动、任务、分类、备注和时间——都只保存在你的设备上。你可以选择启用 iCloud 备份；在这种情况下，数据会通过 Apple 的 iCloud 基础设施加密传输到你自己的 iCloud 账户。我们在任何时候都无法访问这些数据。',
    'privacy.app.nocollect.title': '没有分析，没有追踪',
    'privacy.app.nocollect.body':
      '应用中没有分析 SDK、没有广告、没有第三方崩溃报告工具，也没有用户追踪。不会创建用户画像。',
    'privacy.website.title': '本网站',
    'privacy.website.body':
      '本网站托管在 Cloudflare Workers 上。访问时，你的浏览器出于技术原因会向服务器发送 IP 地址和用户代理信息，这是任何网站传输都无法避免的。Cloudflare 可能出于安全目的将这些信息暂时保存在服务器日志中。我们自己不收集、不存储也不分析此类数据。本网站不使用 Cookie、分析、追踪或第三方字体，字体由我们自己的服务器提供。',
    'privacy.website.hosting.title': '托管',
    'privacy.website.hosting.body':
      '提供商：Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, 美国。详情请参阅 Cloudflare 的隐私政策：https://www.cloudflare.com/privacypolicy/。',
    'privacy.website.cdn.title': '内容分发网络',
    'privacy.website.cdn.body':
      '为快速分发本网站并防范攻击，我们使用 Cloudflare, Inc.（101 Townsend Street, San Francisco, CA 94107, 美国）提供的内容分发网络和反向代理服务 Cloudflare。访问本网站时，你的请求会经过 Cloudflare 的服务器。Cloudflare 在此过程中会处理技术连接数据，特别是你的 IP 地址和用户代理信息，用于分发内容、识别安全威胁并拦截恶意流量。为防范机器人和保障会话安全，Cloudflare 可能设置技术上必要的 Cookie（例如 __cf_bm、_cfuvid）；这些不用于追踪或分析。法律依据是我们对安全且高效网站的正当利益，依据 GDPR 第 6 条第 1 款 (f) 项。Cloudflare 已获得 EU-U.S. Data Privacy Framework 认证，并已签订数据处理协议。详情请见 https://www.cloudflare.com/privacypolicy/。',
    'privacy.rights.title': '你的权利',
    'privacy.rights.body':
      '依据 GDPR，你享有访问、更正、删除、限制处理、数据可携以及反对处理的权利。你可以随时通过下方的联系方式与我们联系。',
    'privacy.contact.title': '联系我们',
    'privacy.contact.body': '有关数据保护的问题，请联系：',
    'privacy.changes.title': '变更',
    'privacy.changes.body':
      '为反映应用、网站或法律要求的变化，我们可能不时更新本政策。现行版本始终可在此处查阅。',
  },
  hi: {
    'meta.title': 'SimpleTime – iOS के लिए समय ट्रैकर',
    'meta.description':
      'अपना समय बिना मेहनत के दर्ज करें। SimpleTime iPhone, iPad और Mac के लिए एक सरल और सहज समय ट्रैकर है। कोई खाता नहीं, कोई ट्रैकिंग नहीं — आपका डेटा आपके पास रहता है।',
    'meta.contact.description':
      'कोई सवाल, सुझाव या कोई गड़बड़ी बतानी है? SimpleTime को ईमेल लिखें — हम हर संदेश पढ़ते हैं और कुछ कार्यदिवसों में जवाब देते हैं।',
    'meta.privacy.description':
      'SimpleTime आपके डेटा के साथ कैसे पेश आता है: सब कुछ आपके डिवाइस पर रहता है, iCloud बैकअप वैकल्पिक और एन्क्रिप्टेड है, न कोई विश्लेषण, न ट्रैकिंग।',
    'meta.imprint.description':
      'simple-time.app की कानूनी जानकारी, जर्मन DDG की धारा 5 के अनुसार: संचालक, संपर्क विवरण और SimpleTime ऐप व वेबसाइट से जुड़ी उत्तरदायित्व जानकारी।',

    'nav.features': 'विशेषताएँ',
    'nav.screenshots': 'स्क्रीनशॉट',
    'nav.contact': 'संपर्क',
    'nav.appstore': 'App Store पर देखें',
    'nav.faq': 'सवाल',
    'nav.menu': 'मेन्यू खोलें',
    'nav.menu.close': 'मेन्यू बंद करें',
    'nav.language': 'भाषा',
    'nav.theme': 'हल्के और गहरे रंग के बीच बदलें',
    'skip.content': 'सामग्री पर जाएँ',

    'hero.eyebrow': 'iOS के लिए समय ट्रैकर',
    'hero.title.part1': 'आपका समय,',
    'hero.title.part2': 'बिना मेहनत।',
    'hero.subtitle':
      'SimpleTime आपको अपना समय सोच-समझकर और कारगर ढंग से इस्तेमाल करने में मदद करता है। काम, पढ़ाई, अभ्यास या निजी परियोजनाएँ — अपनी गतिविधियाँ बेवजह की उलझन के बिना, साफ़ और व्यवस्थित ढंग से दर्ज करें।',
    'hero.cta.appstore': 'App Store से डाउनलोड करें',
    'hero.cta.features': 'विशेषताएँ देखें',
    'hero.availability': 'निःशुल्क · iPhone · iPad · Mac',
    'hero.proof.price': 'निःशुल्क डाउनलोड',
    'hero.proof.account': 'खाते की ज़रूरत नहीं',
    'hero.proof.private': 'डेटा डिवाइस पर रहता है',

    'features.title': 'उस पर ध्यान दें जो सचमुच मायने रखता है: आपका समय।',
    'features.subtitle': 'सोच-समझकर समय दर्ज करने के लिए जो चाहिए, बस उतना ही।',
    'features.instant.title': 'तुरंत शुरू करें',
    'features.instant.body':
      'दर्ज करना शुरू करने के लिए एक टैप काफ़ी है। तेज़, सहज और बिना ध्यान भटकाए।',
    'features.structured.title': 'व्यवस्थित कार्य और उप-कार्य',
    'features.structured.body':
      'अपनी गतिविधियों को श्रेणीबद्ध ढंग से व्यवस्थित करें और काम, पढ़ाई या परियोजनाओं की संरचना को ठीक वैसा ही दर्शाएँ।',
    'features.timeline.title': 'दिन का दृश्य और समयरेखा',
    'features.timeline.body':
      'पूरा दिन एक नज़र में: शुरू और खत्म होने का समय, अवधि और वैकल्पिक टिप्पणियाँ।',
    'features.stats.title': 'स्वतः आँकड़े',
    'features.stats.body':
      'साफ़ और बताने वाले चार्ट आपकी गतिविधियाँ दिन, सप्ताह और महीने के हिसाब से दिखाते हैं।',
    'features.icloud.title': 'समझदार iCloud बैकअप',
    'features.icloud.body':
      'आपका डेटा हर दिन या हर सप्ताह अपने आप iCloud में सुरक्षित होता है और आपके डिवाइसों के बीच समन्वित रहता है।',
    'features.export.title': 'CSV निर्यात',
    'features.export.body':
      'अपने समय के आँकड़े Excel, Numbers या किसी भी विश्लेषण उपकरण में निर्यात करें।',
    'features.private.title': 'निजी और सुरक्षित',
    'features.private.body':
      'आपका डेटा सिर्फ़ आपका है। SimpleTime कोई निजी जानकारी नहीं जुटाता और किसी तीसरे पक्ष के साथ कुछ भी साझा नहीं करता।',

    'screenshots.track.title': 'दर्ज करें',
    'screenshots.track.body': 'दिन भर की सभी गतिविधियाँ एक नज़र में।',
    'screenshots.customize.title': 'अपने मुताबिक ढालें',
    'screenshots.customize.body': 'हर कार्य के लिए रंग और श्रेणियाँ।',
    'screenshots.overview.title': 'सिंहावलोकन',
    'screenshots.overview.body': 'पूरा दिन एक साफ़ सूची में।',
    'screenshots.timeline.title': 'समयरेखा',
    'screenshots.timeline.body': 'आपका दिन घंटे-दर-घंटे।',
    'screenshots.analyze.title': 'विश्लेषण',
    'screenshots.analyze.body': 'ठीक-ठीक देखें कि समय कहाँ जाता है।',
    'screenshots.reports.title': 'रिपोर्ट',
    'screenshots.reports.body': 'हर कार्य का विस्तृत ब्यौरा।',

    'showcase.day.eyebrow': 'दिन का दृश्य',
    'showcase.day.title': 'पूरा दिन एक ही जगह।',
    'showcase.day.body':
      'एक टैप से कार्य शुरू करें और रिकॉर्ड रखना SimpleTime पर छोड़ दें। हर प्रविष्टि में शुरू और खत्म होने का समय, अवधि और एक वैकल्पिक टिप्पणी रहती है — आप काम करते हैं और आपका दिन अपने आप बनता जाता है।',
    'showcase.day.point1': 'शुरू करने के लिए एक टैप, रोकने के लिए एक और',
    'showcase.day.point2': 'रोज़ दर्ज होने वाली चीज़ों के लिए पसंदीदा',
    'showcase.day.point3': 'दिन की घंटे-दर-घंटे समयरेखा',

    'showcase.insight.eyebrow': 'आँकड़े',
    'showcase.insight.title': 'ठीक-ठीक देखें कि समय कहाँ जाता है।',
    'showcase.insight.body':
      'दिन, सप्ताह और महीने के चार्ट आपकी प्रविष्टियों को ऐसी तस्वीर में बदल देते हैं जिस पर आप कदम उठा सकें। कच्चे आँकड़े चाहिए? किसी भी अवधि को CSV में निर्यात करें और Excel या Numbers में खोलें।',
    'showcase.insight.point1': 'दिन, सप्ताह और महीने के चार्ट',
    'showcase.insight.point2': 'हर कार्य की विस्तृत रिपोर्ट',
    'showcase.insight.point3': 'बाहरी विश्लेषण के लिए CSV निर्यात',

    'showcase.personal.eyebrow': 'आपकी सेटिंग',
    'showcase.personal.title': 'आपके काम करने के ढंग के मुताबिक ढल जाता है।',
    'showcase.personal.body':
      'हर कार्य को अपना रंग, अपना चिह्न और अपनी श्रेणी दें, और उप-कार्यों से किसी परियोजना की असली संरचना दर्शाएँ। जो सबसे ज़्यादा काम आता है वह पसंदीदा में सबसे ऊपर बना रहता है।',
    'showcase.personal.point1': 'रंग, SF Symbols और इमोजी',
    'showcase.personal.point2': 'श्रेणियाँ, कार्य और उप-कार्य',
    'showcase.personal.point3': 'पसंदीदा हमेशा हाथ के पास',

    'gallery.title': 'और करीब से।',
    'gallery.subtitle': 'हर स्क्रीन ठीक वैसी ही, जैसी आपके डिवाइस पर दिखती है।',

    'audience.title': 'उन सबके लिए जो अपने समय की कद्र करते हैं।',
    'audience.subtitle':
      'विद्यार्थी, स्वतंत्र पेशेवर, कर्मचारी, रचनात्मक काम करने वाले, खिलाड़ी — और वे सब जो जानना चाहते हैं कि उनका समय असल में कहाँ जाता है।',
    'audience.work.title': 'काम और स्वतंत्र पेशा',
    'audience.work.body':
      'ग्राहकों का काम और अपनी परियोजनाएँ अलग-अलग रखें, और ज़रूरत पड़ने पर साफ़ ब्यौरा निर्यात करें।',
    'audience.study.title': 'पढ़ाई और सीखना',
    'audience.study.body':
      'देखें कि किसी विषय में असल में कितना समय लगता है, और अगले सप्ताह की योजना असली आँकड़ों से बनाएँ।',
    'audience.training.title': 'अभ्यास और आदतें',
    'audience.training.body':
      'सत्र, नींद या रियाज़ दर्ज करें और देखें कि हफ़्ते-दर-हफ़्ते नियमितता कैसे बनती है।',
    'audience.everyday.title': 'रोज़मर्रा की ज़िंदगी',
    'audience.everyday.body':
      'पता लगाएँ कि घंटे असल में कहाँ जाते हैं — और खुद तय करें कि आप क्या बदलना चाहते हैं।',

    'faq.title': 'अकसर पूछे जाने वाले सवाल',
    'faq.subtitle': 'डाउनलोड करने से पहले जानने लायक सब कुछ।',
    'faq.free.q': 'क्या SimpleTime सचमुच निःशुल्क है?',
    'faq.free.a':
      'हाँ। SimpleTime App Store से निःशुल्क डाउनलोड होता है और iPhone, iPad तथा Mac पर चलता है।',
    'faq.account.q': 'क्या खाता बनाना ज़रूरी है?',
    'faq.account.a':
      'नहीं। न पंजीकरण है, न लॉगिन। आप ऐप खोलते हैं और सीधे दर्ज करना शुरू कर देते हैं।',
    'faq.data.q': 'मेरा डेटा कहाँ रखा जाता है?',
    'faq.data.a':
      'सिर्फ़ आपके डिवाइस पर। अगर आप iCloud बैकअप चालू करते हैं, तो डेटा एन्क्रिप्टेड रूप में आपके अपने iCloud खाते में भेजा जाता है। हमें किसी भी समय उस तक पहुँच नहीं होती।',
    'faq.sync.q': 'क्या यह मेरे डिवाइसों के बीच समन्वित होता है?',
    'faq.sync.a':
      'हाँ, iCloud के ज़रिए। बैकअप हर दिन या हर सप्ताह होता है, और आपकी प्रविष्टियाँ iPhone, iPad तथा Mac पर एक जैसी रहती हैं।',
    'faq.export.q': 'क्या मैं अपना डेटा वापस निकाल सकता हूँ?',
    'faq.export.a':
      'कभी भी। SimpleTime आपके समय के आँकड़े CSV में निर्यात करता है — Excel, Numbers या किसी भी विश्लेषण उपकरण के लिए तैयार।',
    'faq.tracking.q': 'क्या यह ऐप मुझे ट्रैक करता है?',
    'faq.tracking.a':
      'नहीं। SimpleTime में न विश्लेषण SDK हैं, न विज्ञापन, न किसी तीसरे पक्ष की क्रैश रिपोर्टिंग, और न ही उपयोगकर्ता प्रोफ़ाइल बनाई जाती हैं।',

    'cta.title': 'शुरू करने के लिए तैयार हैं?',
    'cta.subtitle': 'iPhone, iPad और Mac पर निःशुल्क उपलब्ध।',
    'cta.button': 'App Store से डाउनलोड करें',

    'footer.tagline': 'अपना समय बिना मेहनत के दर्ज करें।',
    'footer.legal': 'कानूनी जानकारी',
    'footer.product': 'उत्पाद',
    'footer.appstore': 'App Store',
    'footer.contact': 'संपर्क',
    'footer.imprint': 'कानूनी सूचना',
    'footer.privacy': 'निजता',
    'footer.copyright': '© {year} Luca Efinger. सर्वाधिकार सुरक्षित।',

    'contact.title': 'संपर्क',
    'contact.subtitle': 'सवाल, सुझाव या विचार? हमें लिखें।',
    'contact.email.label': 'ईमेल',
    'contact.email.body':
      'नीचे दिए पते पर हमें लिखें — हम हर संदेश पढ़ते हैं और जितनी जल्दी हो सके जवाब देते हैं।',
    'contact.response':
      'आम तौर पर हम कुछ कार्यदिवसों में जवाब देते हैं। गड़बड़ी बताते समय अपने डिवाइस का मॉडल और iOS संस्करण ज़रूर लिखें।',

    'imprint.title': 'कानूनी सूचना',
    'imprint.country': 'जर्मनी',
    'imprint.according': 'जर्मन DDG की धारा 5 के अनुसार जानकारी',
    'imprint.contact': 'संपर्क',
    'imprint.responsible': 'MStV की धारा 18, उपधारा 2 के अनुसार सामग्री के लिए उत्तरदायी',
    'imprint.disclaimer.title': 'अस्वीकरण',
    'imprint.disclaimer.liability.title': 'सामग्री के लिए उत्तरदायित्व',
    'imprint.disclaimer.liability.body':
      'सेवा प्रदाता के रूप में हम इन पृष्ठों पर अपनी सामग्री के लिए सामान्य कानून के अनुसार उत्तरदायी हैं। हालाँकि DSA के अनुच्छेद 8 के अनुसार हम प्रेषित या संग्रहीत पराई जानकारी की निगरानी करने, या अवैध गतिविधि की ओर संकेत करने वाली परिस्थितियों की जाँच करने के लिए बाध्य नहीं हैं। सामान्य कानून के अनुसार जानकारी हटाने या उसके उपयोग को रोकने के दायित्व इससे अप्रभावित रहते हैं। इस संबंध में उत्तरदायित्व किसी ठोस उल्लंघन की जानकारी होने के क्षण से ही उत्पन्न होता है। ऐसे उल्लंघनों की जानकारी मिलते ही हम संबंधित सामग्री तुरंत हटा देंगे।',
    'imprint.disclaimer.links.title': 'लिंक के लिए उत्तरदायित्व',
    'imprint.disclaimer.links.body':
      'हमारी पेशकश में तीसरे पक्ष की बाहरी वेबसाइटों के लिंक शामिल हैं, जिनकी सामग्री पर हमारा कोई प्रभाव नहीं है। इसलिए हम इन बाहरी सामग्रियों के लिए कोई उत्तरदायित्व नहीं ले सकते। लिंक किए गए पृष्ठों की सामग्री के लिए हमेशा उनका संबंधित प्रदाता या संचालक उत्तरदायी होता है। लिंक जोड़ते समय संबंधित पृष्ठों की संभावित कानूनी उल्लंघनों के लिए जाँच की गई थी और उस समय कोई अवैध सामग्री नहीं दिखी थी। फिर भी, उल्लंघन के ठोस संकेत के बिना लिंक किए गए पृष्ठों की सामग्री की लगातार निगरानी करना उचित रूप से अपेक्षित नहीं है। उल्लंघनों की जानकारी मिलते ही हम संबंधित लिंक तुरंत हटा देंगे।',
    'imprint.disclaimer.copyright.title': 'कॉपीराइट',
    'imprint.disclaimer.copyright.body':
      'इन पृष्ठों पर साइट संचालक द्वारा बनाई गई सामग्री और कृतियाँ जर्मन कॉपीराइट कानून के अधीन हैं। कॉपीराइट की सीमाओं से बाहर प्रतिलिपि, संशोधन, वितरण और किसी भी प्रकार के उपयोग के लिए संबंधित लेखक या रचनाकार की लिखित सहमति आवश्यक है। इस साइट के डाउनलोड और प्रतिलिपियाँ केवल निजी, गैर-व्यावसायिक उपयोग के लिए अनुमत हैं।',

    'privacy.title': 'निजता नीति',
    'privacy.lastUpdated': 'अंतिम अद्यतन',
    'privacy.intro.title': 'सिंहावलोकन',
    'privacy.intro.body':
      'आपके निजी डेटा की सुरक्षा हमारे लिए महत्वपूर्ण है। यह नीति बताती है कि SimpleTime ऐप और इस वेबसाइट के उपयोग पर कौन-सा डेटा और किस तरह संसाधित होता है। संक्षेप में: हम कम से कम जुटाते हैं और किसी तीसरे पक्ष के साथ कुछ भी साझा नहीं करते।',
    'privacy.app.title': 'SimpleTime ऐप',
    'privacy.app.body':
      'SimpleTime कोई निजी जानकारी नहीं जुटाता। आप जो भी डेटा दर्ज करते हैं — गतिविधियाँ, कार्य, श्रेणियाँ, टिप्पणियाँ और समय — वह सिर्फ़ आपके डिवाइस पर रखा जाता है। आप चाहें तो iCloud बैकअप चालू कर सकते हैं; उस स्थिति में आपका डेटा Apple के iCloud ढाँचे के ज़रिए एन्क्रिप्टेड रूप में आपके अपने iCloud खाते में भेजा जाता है। हमें किसी भी समय इस डेटा तक पहुँच नहीं होती।',
    'privacy.app.nocollect.title': 'न विश्लेषण, न ट्रैकिंग',
    'privacy.app.nocollect.body':
      'ऐप में कोई विश्लेषण SDK, विज्ञापन, तीसरे पक्ष के क्रैश रिपोर्टिंग उपकरण या उपयोगकर्ता ट्रैकिंग नहीं है। कोई उपयोगकर्ता प्रोफ़ाइल नहीं बनाई जाती।',
    'privacy.website.title': 'यह वेबसाइट',
    'privacy.website.body':
      'यह वेबसाइट Cloudflare Workers पर होस्ट की गई है। पहुँचने पर आपका ब्राउज़र तकनीकी कारणों से सर्वर को एक IP पता और यूज़र एजेंट भेजता है, जो किसी भी वेबसाइट की डिलीवरी के लिए अपरिहार्य है। Cloudflare सुरक्षा कारणों से यह जानकारी सर्वर लॉग में अस्थायी रूप से रख सकता है। हम स्वयं ऐसा डेटा न जुटाते हैं, न रखते हैं और न ही उसका विश्लेषण करते हैं। यह वेबसाइट न कुकीज़ का, न विश्लेषण का, न ट्रैकिंग का और न ही तीसरे पक्ष के फ़ॉन्ट का उपयोग करती है — फ़ॉन्ट हमारे अपने सर्वर से दिए जाते हैं।',
    'privacy.website.hosting.title': 'होस्टिंग',
    'privacy.website.hosting.body':
      'प्रदाता: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, अमेरिका। अधिक जानकारी Cloudflare की निजता नीति में: https://www.cloudflare.com/privacypolicy/।',
    'privacy.website.cdn.title': 'सामग्री वितरण नेटवर्क',
    'privacy.website.cdn.body':
      'इस वेबसाइट को तेज़ी से पहुँचाने और हमलों से बचाने के लिए हम Cloudflare का उपयोग करते हैं, जो Cloudflare, Inc. (101 Townsend Street, San Francisco, CA 94107, अमेरिका) का सामग्री वितरण नेटवर्क और रिवर्स प्रॉक्सी सेवा है। साइट पर पहुँचने पर आपका अनुरोध Cloudflare के सर्वरों से होकर गुज़रता है। इस दौरान Cloudflare तकनीकी कनेक्शन डेटा — विशेष रूप से आपका IP पता और यूज़र एजेंट — सामग्री पहुँचाने, सुरक्षा खतरों को पहचानने और हानिकारक ट्रैफ़िक को रोकने के लिए संसाधित करता है। बॉट सुरक्षा और सत्र सुरक्षा के लिए Cloudflare तकनीकी रूप से आवश्यक कुकीज़ रख सकता है (जैसे __cf_bm, _cfuvid); इनका उपयोग ट्रैकिंग या विश्लेषण के लिए नहीं होता। कानूनी आधार GDPR के अनुच्छेद 6, अनुच्छेद 1, बिंदु (f) के अनुसार सुरक्षित और तेज़ वेबसाइट में हमारा वैध हित है। Cloudflare EU-U.S. Data Privacy Framework के तहत प्रमाणित है और उसके साथ डेटा प्रसंस्करण अनुबंध किया गया है। अधिक जानकारी: https://www.cloudflare.com/privacypolicy/।',
    'privacy.rights.title': 'आपके अधिकार',
    'privacy.rights.body':
      'GDPR के अनुसार आपको जानकारी पाने, सुधार कराने, मिटवाने, प्रसंस्करण सीमित कराने, डेटा की सुवाह्यता तथा प्रसंस्करण पर आपत्ति करने का अधिकार है। नीचे दिए संपर्क विवरण से आप हमसे कभी भी संपर्क कर सकते हैं।',
    'privacy.contact.title': 'संपर्क',
    'privacy.contact.body': 'डेटा सुरक्षा से जुड़े सवालों के लिए संपर्क करें:',
    'privacy.changes.title': 'बदलाव',
    'privacy.changes.body':
      'ऐप, वेबसाइट या कानूनी अपेक्षाओं में बदलाव को दर्शाने के लिए हम समय-समय पर इस नीति को अद्यतन कर सकते हैं। लागू संस्करण हमेशा यहीं उपलब्ध रहता है।',
  },
  nl: {
    'meta.title': 'SimpleTime – Tijdregistratie voor iOS',
    'meta.description':
      'Houd je tijd moeiteloos bij. SimpleTime is een heldere, intuïtieve tijdregistratie voor iPhone, iPad en Mac. Geen accounts, geen tracking — je gegevens blijven bij jou.',
    'meta.contact.description':
      'Een vraag, suggestie of bug om te melden? Mail SimpleTime — we lezen elk bericht en antwoorden binnen enkele werkdagen.',
    'meta.privacy.description':
      'Hoe SimpleTime met je gegevens omgaat: alles blijft op je apparaat, de iCloud-back-up is optioneel en versleuteld, geen analyse en geen tracking.',
    'meta.imprint.description':
      'Colofon van simple-time.app volgens § 5 DDG — exploitant, contactgegevens en aansprakelijkheidsinformatie voor de SimpleTime-app en de site.',

    'nav.features': 'Functies',
    'nav.screenshots': 'Schermafbeeldingen',
    'nav.contact': 'Contact',
    'nav.appstore': 'Bekijk in de App Store',
    'nav.faq': 'Vragen',
    'nav.menu': 'Menu openen',
    'nav.menu.close': 'Menu sluiten',
    'nav.language': 'Taal',
    'nav.theme': 'Wisselen tussen licht en donker',
    'skip.content': 'Naar de inhoud',

    'hero.eyebrow': 'Tijdregistratie voor iOS',
    'hero.title.part1': 'Jouw tijd,',
    'hero.title.part2': 'moeiteloos.',
    'hero.subtitle':
      'SimpleTime helpt je je tijd bewust en efficiënt te gebruiken. Werk, studie, training of persoonlijke projecten — leg je activiteiten helder en gestructureerd vast, zonder onnodige complexiteit.',
    'hero.cta.appstore': 'Download in de App Store',
    'hero.cta.features': 'Bekijk de functies',
    'hero.availability': 'Gratis · iPhone · iPad · Mac',
    'hero.proof.price': 'Gratis te downloaden',
    'hero.proof.account': 'Geen account nodig',
    'hero.proof.private': 'Gegevens blijven op je apparaat',

    'features.title': 'Richt je op wat echt telt: je tijd.',
    'features.subtitle': 'Alles wat je nodig hebt voor bewuste tijdregistratie, en niets meer.',
    'features.instant.title': 'Meteen beginnen',
    'features.instant.body':
      'Eén tik en de registratie loopt. Snel, intuïtief en zonder afleiding.',
    'features.structured.title': 'Gestructureerde taken en subtaken',
    'features.structured.body':
      'Orden je activiteiten hiërarchisch en geef werk, studie of projecten precies weer zoals ze in elkaar zitten.',
    'features.timeline.title': 'Dagoverzicht en tijdlijn',
    'features.timeline.body':
      'Je dag in één oogopslag: begin- en eindtijd, duur en optionele notities.',
    'features.stats.title': 'Automatische statistieken',
    'features.stats.body':
      'Heldere grafieken tonen je activiteiten per dag, week en maand.',
    'features.icloud.title': 'Slimme iCloud-back-up',
    'features.icloud.body':
      'Je gegevens worden dagelijks of wekelijks automatisch naar iCloud geback-upt en gesynchroniseerd tussen je apparaten.',
    'features.export.title': 'CSV-export',
    'features.export.body':
      'Exporteer je tijdgegevens naar Excel, Numbers of een ander analysehulpmiddel.',
    'features.private.title': 'Privé en veilig',
    'features.private.body':
      'Je gegevens zijn alleen van jou. SimpleTime verzamelt geen persoonlijke informatie en deelt niets met derden.',

    'screenshots.track.title': 'Registreren',
    'screenshots.track.body': 'Alle activiteiten van de dag in één oogopslag.',
    'screenshots.customize.title': 'Aanpassen',
    'screenshots.customize.body': 'Kleuren en categorieën voor elke taak.',
    'screenshots.overview.title': 'Overzicht',
    'screenshots.overview.body': 'Je hele dag in één heldere lijst.',
    'screenshots.timeline.title': 'Tijdlijn',
    'screenshots.timeline.body': 'Je dag uur voor uur.',
    'screenshots.analyze.title': 'Analyseren',
    'screenshots.analyze.body': 'Zie precies waar je tijd naartoe gaat.',
    'screenshots.reports.title': 'Rapporten',
    'screenshots.reports.body': 'Een gedetailleerde uitsplitsing per taak.',

    'showcase.day.eyebrow': 'Het dagoverzicht',
    'showcase.day.title': 'Je hele dag op één plek.',
    'showcase.day.body':
      'Start een taak met één tik en laat SimpleTime de registratie doen. Elke invoer bevat begin- en eindtijd, duur en een optionele notitie — je dag vormt zich vanzelf terwijl je werkt.',
    'showcase.day.point1': 'Eén tik om te starten, één om te stoppen',
    'showcase.day.point2': 'Favorieten voor wat je dagelijks bijhoudt',
    'showcase.day.point3': 'Een tijdlijn van je dag, uur voor uur',

    'showcase.insight.eyebrow': 'Statistieken',
    'showcase.insight.title': 'Zie precies waar je tijd naartoe gaat.',
    'showcase.insight.body':
      'Grafieken per dag, week en maand maken van je invoer een beeld waarmee je iets kunt. Ruwe cijfers nodig? Exporteer elke periode als CSV en open die in Excel of Numbers.',
    'showcase.insight.point1': 'Grafieken per dag, week en maand',
    'showcase.insight.point2': 'Gedetailleerde rapporten per taak',
    'showcase.insight.point3': 'CSV-export voor externe analyse',

    'showcase.personal.eyebrow': 'Jouw inrichting',
    'showcase.personal.title': 'Past zich aan jouw manier van werken aan.',
    'showcase.personal.body':
      'Geef elke taak een eigen kleur, pictogram en categorie, en gebruik subtaken om de echte opbouw van een project weer te geven. Wat je het meest gebruikt blijft als favoriet bovenaan staan.',
    'showcase.personal.point1': 'Kleuren, SF Symbols en emoji',
    'showcase.personal.point2': 'Categorieën, taken en subtaken',
    'showcase.personal.point3': 'Favorieten altijd binnen handbereik',

    'gallery.title': 'Van dichterbij.',
    'gallery.subtitle': 'Elk scherm precies zoals het op je apparaat verschijnt.',

    'audience.title': 'Voor iedereen die zijn tijd waardeert.',
    'audience.subtitle':
      'Studenten, freelancers, werknemers, creatieven, sporters — en iedereen die wil begrijpen waar zijn tijd werkelijk heen gaat.',
    'audience.work.title': 'Werk en freelance',
    'audience.work.body':
      'Houd klantwerk en eigen projecten uit elkaar en exporteer een helder overzicht wanneer dat nodig is.',
    'audience.study.title': 'Studie en leren',
    'audience.study.body':
      'Zie hoeveel tijd een vak werkelijk kost en plan de volgende week op echte cijfers.',
    'audience.training.title': 'Training en gewoonten',
    'audience.training.body':
      'Leg sessies, slaap of oefening vast en zie hoe regelmaat week na week vorm krijgt.',
    'audience.everyday.title': 'Dagelijks leven',
    'audience.everyday.body':
      'Ontdek waar de uren echt naartoe gaan — en bepaal zelf wat je wilt veranderen.',

    'faq.title': 'Veelgestelde vragen.',
    'faq.subtitle': 'Alles wat de moeite waard is om te weten voordat je downloadt.',
    'faq.free.q': 'Is SimpleTime echt gratis?',
    'faq.free.a':
      'Ja. SimpleTime is gratis te downloaden in de App Store en werkt op iPhone, iPad en Mac.',
    'faq.account.q': 'Heb ik een account nodig?',
    'faq.account.a':
      'Nee. Er is geen registratie en geen login. Je opent de app en begint meteen met registreren.',
    'faq.data.q': 'Waar worden mijn gegevens bewaard?',
    'faq.data.a':
      'Uitsluitend op je apparaat. Zet je de iCloud-back-up aan, dan worden je gegevens versleuteld naar je eigen iCloud-account overgebracht. Wij hebben er op geen enkel moment toegang toe.',
    'faq.sync.q': 'Synchroniseert het tussen mijn apparaten?',
    'faq.sync.a':
      'Ja, via iCloud. De back-up loopt dagelijks of wekelijks en je invoer blijft gelijk op iPhone, iPad en Mac.',
    'faq.export.q': 'Kan ik mijn gegevens weer ophalen?',
    'faq.export.a':
      'Altijd. SimpleTime exporteert je tijdgegevens als CSV, klaar voor Excel, Numbers of elk ander analysehulpmiddel.',
    'faq.tracking.q': 'Volgt de app mij?',
    'faq.tracking.a':
      'Nee. SimpleTime bevat geen analyse-SDK’s, geen advertenties en geen crashrapportage van derden, en maakt geen gebruikersprofielen aan.',

    'cta.title': 'Klaar om te beginnen?',
    'cta.subtitle': 'Gratis beschikbaar voor iPhone, iPad en Mac.',
    'cta.button': 'Download in de App Store',

    'footer.tagline': 'Houd je tijd moeiteloos bij.',
    'footer.legal': 'Juridische informatie',
    'footer.product': 'Product',
    'footer.appstore': 'App Store',
    'footer.contact': 'Contact',
    'footer.imprint': 'Colofon',
    'footer.privacy': 'Privacy',
    'footer.copyright': '© {year} Luca Efinger. Alle rechten voorbehouden.',

    'contact.title': 'Contact',
    'contact.subtitle': 'Vragen, suggesties of ideeën? Laat het ons weten.',
    'contact.email.label': 'E-mail',
    'contact.email.body':
      'Schrijf ons op onderstaand adres — we lezen elk bericht en antwoorden zo snel mogelijk.',
    'contact.response':
      'Meestal antwoorden we binnen enkele werkdagen. Vermeld bij een bug je apparaatmodel en je iOS-versie.',

    'imprint.title': 'Colofon',
    'imprint.country': 'Duitsland',
    'imprint.according': 'Gegevens volgens § 5 DDG',
    'imprint.contact': 'Contact',
    'imprint.responsible': 'Verantwoordelijk voor de inhoud volgens § 18, lid 2 MStV',
    'imprint.disclaimer.title': 'Disclaimer',
    'imprint.disclaimer.liability.title': 'Aansprakelijkheid voor de inhoud',
    'imprint.disclaimer.liability.body':
      'Als dienstverlener zijn wij volgens de algemene wetgeving verantwoordelijk voor onze eigen inhoud op deze pagina’s. Volgens art. 8 DSA zijn wij echter niet verplicht doorgegeven of opgeslagen informatie van derden te controleren of onderzoek te doen naar omstandigheden die op een onrechtmatige activiteit wijzen. Verplichtingen tot verwijdering of blokkering van het gebruik van informatie volgens de algemene wetgeving blijven onverlet. Aansprakelijkheid op dit punt ontstaat pas vanaf het moment waarop wij kennis krijgen van een concrete inbreuk. Zodra wij van dergelijke inbreuken op de hoogte zijn, verwijderen wij de betreffende inhoud onmiddellijk.',
    'imprint.disclaimer.links.title': 'Aansprakelijkheid voor links',
    'imprint.disclaimer.links.body':
      'Ons aanbod bevat links naar externe websites van derden, op de inhoud waarvan wij geen invloed hebben. Daarom kunnen wij voor die externe inhoud geen aansprakelijkheid aanvaarden. Voor de inhoud van de gelinkte pagina’s is steeds de betreffende aanbieder of beheerder verantwoordelijk. De gelinkte pagina’s zijn op het moment van linken gecontroleerd op mogelijke wetsovertredingen; onrechtmatige inhoud was toen niet zichtbaar. Permanente controle van de inhoud van gelinkte pagina’s is echter zonder concrete aanwijzingen van een inbreuk niet redelijk. Zodra wij van inbreuken op de hoogte zijn, verwijderen wij de betreffende links onmiddellijk.',
    'imprint.disclaimer.copyright.title': 'Auteursrecht',
    'imprint.disclaimer.copyright.body':
      'De door de sitebeheerder op deze pagina’s gemaakte inhoud en werken vallen onder het Duitse auteursrecht. Verveelvoudiging, bewerking, verspreiding en elke vorm van exploitatie buiten de grenzen van het auteursrecht vereisen de schriftelijke toestemming van de betreffende auteur of maker. Downloads en kopieën van deze site zijn uitsluitend toegestaan voor privé, niet-commercieel gebruik.',

    'privacy.title': 'Privacyverklaring',
    'privacy.lastUpdated': 'Laatst bijgewerkt',
    'privacy.intro.title': 'Overzicht',
    'privacy.intro.body':
      'De bescherming van je persoonsgegevens is belangrijk voor ons. Deze verklaring legt uit welke gegevens worden verwerkt wanneer je de SimpleTime-app en deze site gebruikt, en op welke manier. Kort gezegd: we verzamelen zo min mogelijk en delen niets met derden.',
    'privacy.app.title': 'De SimpleTime-app',
    'privacy.app.body':
      'SimpleTime verzamelt geen persoonlijke informatie. Alle gegevens die je invoert — activiteiten, taken, categorieën, notities en tijden — worden uitsluitend op je apparaat bewaard. Je kunt de iCloud-back-up desgewenst inschakelen; je gegevens worden dan versleuteld via de iCloud-infrastructuur van Apple naar je eigen iCloud-account overgebracht. Wij hebben op geen enkel moment toegang tot deze gegevens.',
    'privacy.app.nocollect.title': 'Geen analyse, geen tracking',
    'privacy.app.nocollect.body':
      'De app bevat geen analyse-SDK’s, geen advertenties, geen crashrapportage van derden en geen gebruikerstracking. Er worden geen gebruikersprofielen aangemaakt.',
    'privacy.website.title': 'Deze website',
    'privacy.website.body':
      'Deze site wordt gehost op Cloudflare Workers. Bij het bezoeken stuurt je browser om technische redenen een IP-adres en een user agent naar de server; dat is voor het uitleveren van elke website onvermijdelijk. Cloudflare kan die informatie om veiligheidsredenen tijdelijk in serverlogboeken bewaren. Zelf verzamelen, bewaren en analyseren wij dergelijke gegevens niet. Deze site gebruikt geen cookies, geen analyse, geen tracking en geen lettertypen van derden — de lettertypen komen van onze eigen server.',
    'privacy.website.hosting.title': 'Hosting',
    'privacy.website.hosting.body':
      'Aanbieder: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, VS. Meer informatie vind je in de privacyverklaring van Cloudflare op https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'Content delivery network',
    'privacy.website.cdn.body':
      'Om deze site snel uit te leveren en tegen aanvallen te beschermen gebruiken wij Cloudflare, een content delivery network en reverse-proxydienst van Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, VS. Bij het bezoeken van de site loopt je verzoek via de servers van Cloudflare. Cloudflare verwerkt daarbij technische verbindingsgegevens — met name je IP-adres en user agent — om inhoud uit te leveren, veiligheidsdreigingen te herkennen en schadelijk verkeer te blokkeren. Voor botbescherming en sessiebeveiliging kan Cloudflare technisch noodzakelijke cookies plaatsen (bijvoorbeeld __cf_bm, _cfuvid); die worden niet voor tracking of analyse gebruikt. De rechtsgrondslag is ons gerechtvaardigd belang bij een veilige en snelle website volgens art. 6, lid 1, sub f AVG. Cloudflare is gecertificeerd onder het EU-U.S. Data Privacy Framework en er is een verwerkersovereenkomst gesloten. Meer informatie: https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'Jouw rechten',
    'privacy.rights.body':
      'Op grond van de AVG heb je recht op inzage, rectificatie, wissing, beperking van de verwerking, overdraagbaarheid van gegevens en het recht bezwaar te maken tegen de verwerking. Je kunt ons altijd bereiken via de contactgegevens hieronder.',
    'privacy.contact.title': 'Contact',
    'privacy.contact.body': 'Voor vragen over gegevensbescherming kun je terecht bij:',
    'privacy.changes.title': 'Wijzigingen',
    'privacy.changes.body':
      'We kunnen deze verklaring van tijd tot tijd bijwerken om veranderingen in de app, de site of wettelijke eisen te verwerken. De geldende versie is hier altijd te vinden.',
  },
  sv: {
    'meta.title': 'SimpleTime – Tidrapportering för iOS',
    'meta.description':
      'Håll koll på din tid utan ansträngning. SimpleTime är en tydlig och intuitiv tidrapportering för iPhone, iPad och Mac. Inga konton, ingen spårning – dina data stannar hos dig.',
    'meta.contact.description':
      'Har du en fråga, en synpunkt eller ett fel att rapportera? Mejla SimpleTime – vi läser varje meddelande och svarar inom några arbetsdagar.',
    'meta.privacy.description':
      'Så hanterar SimpleTime dina data: allt stannar på din enhet, iCloud-säkerhetskopian är valfri och krypterad, ingen analys och ingen spårning.',
    'meta.imprint.description':
      'Ansvarig utgivare för simple-time.app enligt § 5 DDG – innehavare, kontaktuppgifter och ansvarsinformation för appen och webbplatsen SimpleTime.',

    'nav.features': 'Funktioner',
    'nav.screenshots': 'Skärmbilder',
    'nav.contact': 'Kontakt',
    'nav.appstore': 'Visa i App Store',
    'nav.faq': 'Frågor',
    'nav.menu': 'Öppna menyn',
    'nav.menu.close': 'Stäng menyn',
    'nav.language': 'Språk',
    'nav.theme': 'Växla mellan ljust och mörkt',
    'skip.content': 'Hoppa till innehållet',

    'hero.eyebrow': 'Tidrapportering för iOS',
    'hero.title.part1': 'Din tid,',
    'hero.title.part2': 'utan möda.',
    'hero.subtitle':
      'SimpleTime hjälper dig att använda din tid medvetet och effektivt. Arbete, studier, träning eller egna projekt – registrera dina aktiviteter tydligt och strukturerat, utan onödig komplexitet.',
    'hero.cta.appstore': 'Hämta i App Store',
    'hero.cta.features': 'Se funktionerna',
    'hero.availability': 'Gratis · iPhone · iPad · Mac',
    'hero.proof.price': 'Gratis att hämta',
    'hero.proof.account': 'Inget konto behövs',
    'hero.proof.private': 'Data stannar på enheten',

    'features.title': 'Fokusera på det som verkligen betyder något: din tid.',
    'features.subtitle': 'Allt som behövs för medveten tidrapportering, och inget mer.',
    'features.instant.title': 'Kom igång direkt',
    'features.instant.body':
      'En tryckning räcker för att börja registrera. Snabbt, tydligt och utan störningar.',
    'features.structured.title': 'Strukturerade uppgifter och deluppgifter',
    'features.structured.body':
      'Ordna dina aktiviteter hierarkiskt och återge arbetets, studiernas eller projektens struktur precis som den är.',
    'features.timeline.title': 'Dagsvy och tidslinje',
    'features.timeline.body':
      'Hela dagen med en blick: start- och sluttid, längd och valfria anteckningar.',
    'features.stats.title': 'Automatisk statistik',
    'features.stats.body':
      'Tydliga diagram visar dina aktiviteter per dag, vecka och månad.',
    'features.icloud.title': 'Smart säkerhetskopiering till iCloud',
    'features.icloud.body':
      'Dina data säkerhetskopieras automatiskt till iCloud – dagligen eller varje vecka – och synkas mellan dina enheter.',
    'features.export.title': 'CSV-export',
    'features.export.body':
      'Exportera dina tidsdata till Excel, Numbers eller något annat analysverktyg.',
    'features.private.title': 'Privat och säkert',
    'features.private.body':
      'Dina data tillhör bara dig. SimpleTime samlar inte in personuppgifter och delar ingenting med tredje part.',

    'screenshots.track.title': 'Registrera',
    'screenshots.track.body': 'Dagens alla aktiviteter med en blick.',
    'screenshots.customize.title': 'Anpassa',
    'screenshots.customize.body': 'Färger och kategorier för varje uppgift.',
    'screenshots.overview.title': 'Översikt',
    'screenshots.overview.body': 'Hela dagen i en tydlig lista.',
    'screenshots.timeline.title': 'Tidslinje',
    'screenshots.timeline.body': 'Din dag timme för timme.',
    'screenshots.analyze.title': 'Analysera',
    'screenshots.analyze.body': 'Se exakt vart tiden tar vägen.',
    'screenshots.reports.title': 'Rapporter',
    'screenshots.reports.body': 'En detaljerad uppdelning per uppgift.',

    'showcase.day.eyebrow': 'Dagsvyn',
    'showcase.day.title': 'Hela dagen på ett ställe.',
    'showcase.day.body':
      'Starta en uppgift med en tryckning och låt SimpleTime sköta registreringen. Varje post bär sin start- och sluttid, sin längd och en valfri anteckning – dagen växer fram av sig själv medan du arbetar.',
    'showcase.day.point1': 'En tryckning för att starta, en för att stoppa',
    'showcase.day.point2': 'Favoriter för det du registrerar varje dag',
    'showcase.day.point3': 'En tidslinje över dagen, timme för timme',

    'showcase.insight.eyebrow': 'Statistik',
    'showcase.insight.title': 'Se exakt vart tiden tar vägen.',
    'showcase.insight.body':
      'Diagram per dag, vecka och månad förvandlar dina poster till en bild du kan agera på. Behöver du råa siffror? Exportera valfri period som CSV och öppna den i Excel eller Numbers.',
    'showcase.insight.point1': 'Diagram per dag, vecka och månad',
    'showcase.insight.point2': 'Detaljerade rapporter för varje uppgift',
    'showcase.insight.point3': 'CSV-export för extern analys',

    'showcase.personal.eyebrow': 'Din uppsättning',
    'showcase.personal.title': 'Anpassar sig efter hur du arbetar.',
    'showcase.personal.body':
      'Ge varje uppgift en egen färg, symbol och kategori, och använd deluppgifter för att spegla ett projekts verkliga uppbyggnad. Det du använder mest ligger kvar som favorit, alltid överst.',
    'showcase.personal.point1': 'Färger, SF Symbols och emoji',
    'showcase.personal.point2': 'Kategorier, uppgifter och deluppgifter',
    'showcase.personal.point3': 'Favoriter alltid nära till hands',

    'gallery.title': 'Närmare inpå.',
    'gallery.subtitle': 'Varje skärm precis som den ser ut på din enhet.',

    'audience.title': 'För alla som värdesätter sin tid.',
    'audience.subtitle':
      'Studenter, frilansare, anställda, kreatörer, idrottare – och alla som vill förstå vart deras tid faktiskt tar vägen.',
    'audience.work.title': 'Arbete och frilans',
    'audience.work.body':
      'Håll kunduppdrag och egna projekt åtskilda och exportera ett tydligt underlag när det behövs.',
    'audience.study.title': 'Studier och lärande',
    'audience.study.body':
      'Se hur mycket tid ett ämne faktiskt kräver och planera nästa vecka utifrån verkliga siffror.',
    'audience.training.title': 'Träning och vanor',
    'audience.training.body':
      'Registrera pass, sömn eller övning och se hur regelbundenheten byggs upp vecka för vecka.',
    'audience.everyday.title': 'Vardagen',
    'audience.everyday.body':
      'Ta reda på vart timmarna verkligen tar vägen – och bestäm själv vad du vill ändra.',

    'faq.title': 'Vanliga frågor.',
    'faq.subtitle': 'Allt som är värt att veta innan du hämtar appen.',
    'faq.free.q': 'Är SimpleTime verkligen gratis?',
    'faq.free.a':
      'Ja. SimpleTime hämtas gratis från App Store och fungerar på iPhone, iPad och Mac.',
    'faq.account.q': 'Behöver jag ett konto?',
    'faq.account.a':
      'Nej. Det finns varken registrering eller inloggning. Du öppnar appen och börjar registrera direkt.',
    'faq.data.q': 'Var lagras mina data?',
    'faq.data.a':
      'Uteslutande på din enhet. Om du slår på säkerhetskopiering till iCloud överförs dina data krypterat till ditt eget iCloud-konto. Vi har aldrig tillgång till dem.',
    'faq.sync.q': 'Synkas det mellan mina enheter?',
    'faq.sync.a':
      'Ja, via iCloud. Säkerhetskopieringen sker dagligen eller varje vecka, och dina poster hålls synkade mellan iPhone, iPad och Mac.',
    'faq.export.q': 'Kan jag få ut mina data igen?',
    'faq.export.a':
      'När som helst. SimpleTime exporterar dina tidsdata som CSV, redo för Excel, Numbers eller något annat analysverktyg.',
    'faq.tracking.q': 'Spårar appen mig?',
    'faq.tracking.a':
      'Nej. SimpleTime innehåller inga analys-SDK:er, ingen reklam och ingen kraschrapportering från tredje part, och skapar inga användarprofiler.',

    'cta.title': 'Redo att sätta igång?',
    'cta.subtitle': 'Gratis för iPhone, iPad och Mac.',
    'cta.button': 'Hämta i App Store',

    'footer.tagline': 'Håll koll på din tid utan ansträngning.',
    'footer.legal': 'Juridisk information',
    'footer.product': 'Produkt',
    'footer.appstore': 'App Store',
    'footer.contact': 'Kontakt',
    'footer.imprint': 'Ansvarig utgivare',
    'footer.privacy': 'Integritet',
    'footer.copyright': '© {year} Luca Efinger. Med ensamrätt.',

    'contact.title': 'Kontakt',
    'contact.subtitle': 'Frågor, synpunkter eller idéer? Hör av dig.',
    'contact.email.label': 'E-post',
    'contact.email.body':
      'Skriv till adressen nedan – vi läser varje meddelande och svarar så snart vi kan.',
    'contact.response':
      'Vi svarar oftast inom några arbetsdagar. Vid felrapporter, ange gärna enhetsmodell och iOS-version.',

    'imprint.title': 'Ansvarig utgivare',
    'imprint.country': 'Tyskland',
    'imprint.according': 'Uppgifter enligt § 5 DDG',
    'imprint.contact': 'Kontakt',
    'imprint.responsible': 'Ansvarig för innehållet enligt § 18 st. 2 MStV',
    'imprint.disclaimer.title': 'Ansvarsfriskrivning',
    'imprint.disclaimer.liability.title': 'Ansvar för innehållet',
    'imprint.disclaimer.liability.body':
      'Som tjänsteleverantör ansvarar vi för vårt eget innehåll på dessa sidor enligt allmänna bestämmelser. Enligt artikel 8 i DSA är vi dock inte skyldiga att övervaka överförd eller lagrad information från tredje part, eller att undersöka omständigheter som tyder på olaglig verksamhet. Skyldigheter att avlägsna eller blockera användning av information enligt allmänna bestämmelser påverkas inte av detta. Ansvar i detta avseende uppstår först från den tidpunkt då vi får kännedom om en konkret överträdelse. Så snart vi får kännedom om sådana överträdelser tar vi omedelbart bort innehållet i fråga.',
    'imprint.disclaimer.links.title': 'Ansvar för länkar',
    'imprint.disclaimer.links.body':
      'Vårt erbjudande innehåller länkar till externa webbplatser som tillhör tredje part och vars innehåll vi inte kan påverka. Vi kan därför inte ta något ansvar för detta externa innehåll. För innehållet på de länkade sidorna ansvarar alltid respektive leverantör eller operatör. De länkade sidorna kontrollerades vid länkningstillfället med avseende på eventuella lagöverträdelser; något olagligt innehåll kunde då inte konstateras. En fortlöpande kontroll av innehållet på de länkade sidorna är dock inte rimlig utan konkreta indikationer på en överträdelse. Så snart vi får kännedom om överträdelser tar vi omedelbart bort länkarna i fråga.',
    'imprint.disclaimer.copyright.title': 'Upphovsrätt',
    'imprint.disclaimer.copyright.body':
      'Det innehåll och de verk som webbplatsens operatör skapat på dessa sidor omfattas av tysk upphovsrätt. Mångfaldigande, bearbetning, spridning och varje form av utnyttjande utanför upphovsrättens gränser kräver skriftligt medgivande från respektive upphovsman eller skapare. Nedladdningar och kopior av denna webbplats är endast tillåtna för privat, icke-kommersiellt bruk.',

    'privacy.title': 'Integritetspolicy',
    'privacy.lastUpdated': 'Senast uppdaterad',
    'privacy.intro.title': 'Översikt',
    'privacy.intro.body':
      'Skyddet av dina personuppgifter är viktigt för oss. Den här policyn förklarar vilka uppgifter som behandlas när du använder appen SimpleTime och den här webbplatsen, och på vilket sätt. Kort sagt: vi samlar in så lite som möjligt och delar ingenting med tredje part.',
    'privacy.app.title': 'Appen SimpleTime',
    'privacy.app.body':
      'SimpleTime samlar inte in några personuppgifter. Alla uppgifter du matar in – aktiviteter, uppgifter, kategorier, anteckningar och tider – lagras uteslutande på din enhet. Du kan valfritt slå på säkerhetskopiering till iCloud; dina data överförs då krypterat via Apples iCloud-infrastruktur till ditt eget iCloud-konto. Vi har aldrig tillgång till dessa data.',
    'privacy.app.nocollect.title': 'Ingen analys, ingen spårning',
    'privacy.app.nocollect.body':
      'Appen innehåller inga analys-SDK:er, ingen reklam, inga kraschrapporteringsverktyg från tredje part och ingen användarspårning. Inga användarprofiler skapas.',
    'privacy.website.title': 'Den här webbplatsen',
    'privacy.website.body':
      'Den här webbplatsen ligger på Cloudflare Workers. Vid besök skickar din webbläsare av tekniska skäl en IP-adress och en user agent till servern, vilket är oundvikligt för leverans av vilken webbplats som helst. Cloudflare kan tillfälligt spara den informationen i serverloggar av säkerhetsskäl. Själva samlar vi varken in, lagrar eller analyserar sådana uppgifter. Webbplatsen använder inga cookies, ingen analys, ingen spårning och inga typsnitt från tredje part – typsnitten levereras från vår egen server.',
    'privacy.website.hosting.title': 'Webbhotell',
    'privacy.website.hosting.body':
      'Leverantör: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA. Mer information finns i Cloudflares integritetspolicy på https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'Innehållsleveransnätverk',
    'privacy.website.cdn.body':
      'För att leverera webbplatsen snabbt och skydda den mot angrepp använder vi Cloudflare, ett innehållsleveransnätverk och en omvänd proxytjänst från Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA. När du besöker webbplatsen går din förfrågan via Cloudflares servrar. Cloudflare behandlar då tekniska anslutningsuppgifter – i synnerhet din IP-adress och din user agent – för att leverera innehåll, upptäcka säkerhetshot och blockera skadlig trafik. För botskydd och sessionssäkerhet kan Cloudflare sätta tekniskt nödvändiga cookies (t.ex. __cf_bm, _cfuvid); de används varken för spårning eller analys. Den rättsliga grunden är vårt berättigade intresse av en säker och snabb webbplats enligt art. 6.1 f i GDPR. Cloudflare är certifierat inom EU-U.S. Data Privacy Framework och ett personuppgiftsbiträdesavtal har ingåtts. Mer information: https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'Dina rättigheter',
    'privacy.rights.body':
      'Enligt GDPR har du rätt till tillgång, rättelse, radering, begränsning av behandlingen, dataportabilitet och rätt att invända mot behandlingen. Du når oss när som helst via kontaktuppgifterna nedan.',
    'privacy.contact.title': 'Kontakt',
    'privacy.contact.body': 'Vid frågor om dataskydd, vänd dig till:',
    'privacy.changes.title': 'Ändringar',
    'privacy.changes.body':
      'Vi kan komma att uppdatera den här policyn då och då för att spegla ändringar i appen, på webbplatsen eller i lagkraven. Den gällande versionen finns alltid här.',
  },
  uk: {
    'meta.title': 'SimpleTime – Облік часу для iOS',
    'meta.description':
      'Стежте за своїм часом без зусиль. SimpleTime — зрозумілий і зручний застосунок для обліку часу на iPhone, iPad і Mac. Без облікових записів і стеження: ваші дані залишаються у вас.',
    'meta.contact.description':
      'Маєте запитання, відгук або повідомлення про помилку? Напишіть SimpleTime на електронну пошту — ми читаємо кожен лист і відповідаємо протягом кількох робочих днів.',
    'meta.privacy.description':
      'Як SimpleTime поводиться з вашими даними: усе залишається на пристрої, резервна копія в iCloud необовʼязкова та зашифрована, без аналітики й стеження.',
    'meta.imprint.description':
      'Вихідні дані simple-time.app згідно з § 5 DDG: власник, контактні дані та відомості про відповідальність щодо застосунку й сайту SimpleTime.',

    'nav.features': 'Можливості',
    'nav.screenshots': 'Знімки екрана',
    'nav.contact': 'Контакти',
    'nav.appstore': 'Переглянути в App Store',
    'nav.faq': 'Запитання',
    'nav.menu': 'Відкрити меню',
    'nav.menu.close': 'Закрити меню',
    'nav.language': 'Мова',
    'nav.theme': 'Перемкнути світлу й темну тему',
    'skip.content': 'Перейти до вмісту',

    'hero.eyebrow': 'Облік часу для iOS',
    'hero.title.part1': 'Ваш час —',
    'hero.title.part2': 'без зусиль.',
    'hero.subtitle':
      'SimpleTime допомагає використовувати час свідомо й ефективно. Робота, навчання, тренування чи власні проєкти — записуйте свої заняття чітко та впорядковано, без зайвої складності.',
    'hero.cta.appstore': 'Завантажити в App Store',
    'hero.cta.features': 'Переглянути можливості',
    'hero.availability': 'Безкоштовно · iPhone · iPad · Mac',
    'hero.proof.price': 'Безкоштовне завантаження',
    'hero.proof.account': 'Без облікового запису',
    'hero.proof.private': 'Дані залишаються на пристрої',

    'features.title': 'Зосередьтеся на головному — на своєму часі.',
    'features.subtitle': 'Усе потрібне для свідомого обліку часу, і нічого зайвого.',
    'features.instant.title': 'Починайте одразу',
    'features.instant.body':
      'Одного дотику достатньо, щоб почати запис. Швидко, зрозуміло й без відволікань.',
    'features.structured.title': 'Упорядковані завдання та підзавдання',
    'features.structured.body':
      'Організуйте заняття ієрархічно й точно відображайте структуру роботи, навчання чи проєктів.',
    'features.timeline.title': 'Огляд дня та стрічка часу',
    'features.timeline.body':
      'Увесь день перед очима: час початку й завершення, тривалість і за бажанням нотатки.',
    'features.stats.title': 'Автоматична статистика',
    'features.stats.body':
      'Наочні діаграми показують ваші заняття за днями, тижнями й місяцями.',
    'features.icloud.title': 'Розумна резервна копія в iCloud',
    'features.icloud.body':
      'Дані автоматично зберігаються в iCloud — щодня або щотижня — і синхронізуються між пристроями.',
    'features.export.title': 'Експорт у CSV',
    'features.export.body':
      'Вивантажуйте дані про час до Excel, Numbers чи будь-якого іншого засобу аналізу.',
    'features.private.title': 'Приватно й надійно',
    'features.private.body':
      'Ваші дані належать лише вам. SimpleTime не збирає особистих відомостей і нічого не передає третім сторонам.',

    'screenshots.track.title': 'Запис',
    'screenshots.track.body': 'Усі заняття дня перед очима.',
    'screenshots.customize.title': 'Налаштування',
    'screenshots.customize.body': 'Кольори та категорії для кожного завдання.',
    'screenshots.overview.title': 'Огляд',
    'screenshots.overview.body': 'Увесь день в одному зрозумілому списку.',
    'screenshots.timeline.title': 'Стрічка часу',
    'screenshots.timeline.body': 'Ваш день година за годиною.',
    'screenshots.analyze.title': 'Аналіз',
    'screenshots.analyze.body': 'Точно видно, куди йде час.',
    'screenshots.reports.title': 'Звіти',
    'screenshots.reports.body': 'Докладний розподіл за завданнями.',

    'showcase.day.eyebrow': 'Огляд дня',
    'showcase.day.title': 'Увесь день в одному місці.',
    'showcase.day.body':
      'Запустіть завдання одним дотиком, а облік залиште SimpleTime. Кожен запис має час початку й завершення, тривалість і за бажанням нотатку — ваш день складається сам, поки ви працюєте.',
    'showcase.day.point1': 'Один дотик — старт, ще один — стоп',
    'showcase.day.point2': 'Обране для щоденних занять',
    'showcase.day.point3': 'Стрічка дня година за годиною',

    'showcase.insight.eyebrow': 'Статистика',
    'showcase.insight.title': 'Точно видно, куди йде ваш час.',
    'showcase.insight.body':
      'Діаграми за днями, тижнями й місяцями перетворюють записи на картину, з якою можна працювати. Потрібні первинні цифри? Вивантажте будь-який період у CSV і відкрийте в Excel чи Numbers.',
    'showcase.insight.point1': 'Діаграми за днями, тижнями й місяцями',
    'showcase.insight.point2': 'Докладні звіти за кожним завданням',
    'showcase.insight.point3': 'Експорт у CSV для зовнішнього аналізу',

    'showcase.personal.eyebrow': 'Ваше налаштування',
    'showcase.personal.title': 'Підлаштовується під вашу роботу.',
    'showcase.personal.body':
      'Дайте кожному завданню власний колір, піктограму й категорію, а підзавдання допоможуть відобразити справжню структуру проєкту. Те, чим ви користуєтеся найчастіше, залишається в обраному — завжди вгорі.',
    'showcase.personal.point1': 'Кольори, SF Symbols та емодзі',
    'showcase.personal.point2': 'Категорії, завдання та підзавдання',
    'showcase.personal.point3': 'Обране завжди під рукою',

    'gallery.title': 'Ближче до справи.',
    'gallery.subtitle': 'Кожен екран саме такий, яким ви побачите його на пристрої.',

    'audience.title': 'Для всіх, хто цінує свій час.',
    'audience.subtitle':
      'Студенти, фрилансери, працівники, творчі люди, спортсмени — і всі, хто хоче зрозуміти, куди насправді йде їхній час.',
    'audience.work.title': 'Робота та фриланс',
    'audience.work.body':
      'Розділяйте роботу для клієнтів і власні проєкти, а за потреби вивантажуйте зрозумілий звіт.',
    'audience.study.title': 'Навчання',
    'audience.study.body':
      'Дізнайтеся, скільки часу насправді потребує предмет, і плануйте наступний тиждень за реальними цифрами.',
    'audience.training.title': 'Тренування та звички',
    'audience.training.body':
      'Записуйте заняття, сон чи вправи й спостерігайте, як тиждень за тижнем зʼявляється сталість.',
    'audience.everyday.title': 'Щоденне життя',
    'audience.everyday.body':
      'Зʼясуйте, куди справді йдуть години — і самі вирішіть, що хочете змінити.',

    'faq.title': 'Поширені запитання.',
    'faq.subtitle': 'Усе, що варто знати перед завантаженням.',
    'faq.free.q': 'SimpleTime справді безкоштовний?',
    'faq.free.a':
      'Так. SimpleTime завантажується з App Store безкоштовно й працює на iPhone, iPad і Mac.',
    'faq.account.q': 'Чи потрібен обліковий запис?',
    'faq.account.a':
      'Ні. Реєстрації та входу немає. Ви відкриваєте застосунок і одразу починаєте вести облік.',
    'faq.data.q': 'Де зберігаються мої дані?',
    'faq.data.a':
      'Виключно на вашому пристрої. Якщо ввімкнути резервне копіювання в iCloud, дані передаються в зашифрованому вигляді до вашого власного облікового запису iCloud. Ми не маємо до них доступу в жодний момент.',
    'faq.sync.q': 'Чи синхронізуються дані між пристроями?',
    'faq.sync.a':
      'Так, через iCloud. Копіювання відбувається щодня або щотижня, а ваші записи залишаються синхронними на iPhone, iPad і Mac.',
    'faq.export.q': 'Чи можу я забрати свої дані?',
    'faq.export.a':
      'Будь-коли. SimpleTime вивантажує дані про час у форматі CSV — готові для Excel, Numbers чи будь-якого іншого засобу аналізу.',
    'faq.tracking.q': 'Чи стежить застосунок за мною?',
    'faq.tracking.a':
      'Ні. У SimpleTime немає ані аналітичних SDK, ані реклами, ані сторонніх систем збору звітів про збої, і профілі користувачів не створюються.',

    'cta.title': 'Готові почати?',
    'cta.subtitle': 'Доступно безкоштовно на iPhone, iPad і Mac.',
    'cta.button': 'Завантажити в App Store',

    'footer.tagline': 'Стежте за своїм часом без зусиль.',
    'footer.legal': 'Правова інформація',
    'footer.product': 'Продукт',
    'footer.appstore': 'App Store',
    'footer.contact': 'Контакти',
    'footer.imprint': 'Вихідні дані',
    'footer.privacy': 'Конфіденційність',
    'footer.copyright': '© {year} Luca Efinger. Усі права захищено.',

    'contact.title': 'Контакти',
    'contact.subtitle': 'Запитання, відгуки чи ідеї? Напишіть нам.',
    'contact.email.label': 'Електронна пошта',
    'contact.email.body':
      'Напишіть нам на адресу нижче — ми читаємо кожен лист і відповідаємо якомога швидше.',
    'contact.response':
      'Зазвичай ми відповідаємо протягом кількох робочих днів. Повідомляючи про помилку, вкажіть модель пристрою та версію iOS.',

    'imprint.title': 'Вихідні дані',
    'imprint.country': 'Німеччина',
    'imprint.according': 'Відомості згідно з § 5 DDG',
    'imprint.contact': 'Контакти',
    'imprint.responsible': 'Відповідальний за зміст згідно з § 18, абз. 2 MStV',
    'imprint.disclaimer.title': 'Відмова від відповідальності',
    'imprint.disclaimer.liability.title': 'Відповідальність за зміст',
    'imprint.disclaimer.liability.body':
      'Як постачальник послуг ми відповідаємо за власні матеріали на цих сторінках відповідно до загальних норм права. Проте згідно зі ст. 8 DSA ми не зобовʼязані відстежувати передану або збережену чужу інформацію чи зʼясовувати обставини, що вказують на протиправну діяльність. Обовʼязки щодо видалення або блокування використання інформації відповідно до загальних норм права залишаються чинними. Відповідальність у цій частині виникає лише з моменту, коли нам стає відомо про конкретне порушення. Дізнавшись про такі порушення, ми негайно видалимо відповідні матеріали.',
    'imprint.disclaimer.links.title': 'Відповідальність за посилання',
    'imprint.disclaimer.links.body':
      'Наша пропозиція містить посилання на зовнішні сайти третіх осіб, на зміст яких ми не маємо впливу. Тому ми не можемо нести відповідальність за ці зовнішні матеріали. За зміст сторінок, на які ведуть посилання, завжди відповідає їхній постачальник або оператор. На момент розміщення посилань сторінки було перевірено на можливі порушення закону; протиправного змісту тоді не виявлено. Однак постійний контроль змісту сторінок, на які ведуть посилання, без конкретних ознак порушення не є доцільним. Дізнавшись про порушення, ми негайно видалимо відповідні посилання.',
    'imprint.disclaimer.copyright.title': 'Авторське право',
    'imprint.disclaimer.copyright.body':
      'Матеріали та твори, створені оператором сайту на цих сторінках, охороняються авторським правом Німеччини. Відтворення, перероблення, поширення та будь-яке використання поза межами, встановленими авторським правом, потребують письмової згоди відповідного автора або створювача. Завантаження та копіювання цього сайту дозволені лише для приватного некомерційного використання.',

    'privacy.title': 'Політика конфіденційності',
    'privacy.lastUpdated': 'Останнє оновлення',
    'privacy.intro.title': 'Огляд',
    'privacy.intro.body':
      'Захист ваших персональних даних важливий для нас. Ця політика пояснює, які дані обробляються під час використання застосунку SimpleTime і цього сайту та яким чином. Коротко: ми збираємо мінімум і нічого не передаємо третім сторонам.',
    'privacy.app.title': 'Застосунок SimpleTime',
    'privacy.app.body':
      'SimpleTime не збирає жодних персональних даних. Усі введені вами дані — заняття, завдання, категорії, нотатки й час — зберігаються виключно на вашому пристрої. За бажанням можна ввімкнути резервне копіювання в iCloud; тоді дані передаються в зашифрованому вигляді через інфраструктуру iCloud компанії Apple до вашого власного облікового запису iCloud. Ми не маємо доступу до цих даних у жодний момент.',
    'privacy.app.nocollect.title': 'Без аналітики й стеження',
    'privacy.app.nocollect.body':
      'У застосунку немає аналітичних SDK, реклами, сторонніх інструментів звітування про збої чи стеження за користувачами. Профілі користувачів не створюються.',
    'privacy.website.title': 'Цей сайт',
    'privacy.website.body':
      'Цей сайт розміщено на Cloudflare Workers. Під час звернення ваш браузер з технічних причин передає серверу IP-адресу та рядок user agent — це неминуче для доставлення будь-якого сайту. Cloudflare може тимчасово зберігати ці відомості в журналах сервера з міркувань безпеки. Самі ми таких даних не збираємо, не зберігаємо й не аналізуємо. Сайт не використовує файли cookie, аналітику, стеження чи сторонні шрифти — шрифти надаються з нашого сервера.',
    'privacy.website.hosting.title': 'Хостинг',
    'privacy.website.hosting.body':
      'Постачальник: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, США. Докладніше — у політиці конфіденційності Cloudflare за адресою https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'Мережа доставлення вмісту',
    'privacy.website.cdn.body':
      'Щоб швидко доставляти сайт і захищати його від атак, ми використовуємо Cloudflare — мережу доставлення вмісту та зворотний проксі компанії Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, США. Під час звернення до сайту ваш запит проходить через сервери Cloudflare. При цьому Cloudflare обробляє технічні дані зʼєднання — зокрема вашу IP-адресу та user agent — щоб доставляти вміст, виявляти загрози безпеці та блокувати шкідливий трафік. Для захисту від ботів і безпеки сеансу Cloudflare може встановлювати технічно необхідні файли cookie (наприклад, __cf_bm, _cfuvid); вони не використовуються для стеження чи аналітики. Правова підстава — наш законний інтерес у безпечному та продуктивному сайті згідно зі ст. 6, п. 1, підп. f) GDPR. Cloudflare сертифікована в межах EU-U.S. Data Privacy Framework, з нею укладено договір про обробку даних. Докладніше: https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'Ваші права',
    'privacy.rights.body':
      'Згідно з GDPR ви маєте право на доступ, виправлення, видалення, обмеження обробки, перенесення даних, а також право заперечити проти обробки. Звʼязатися з нами можна будь-коли за контактними даними нижче.',
    'privacy.contact.title': 'Контакти',
    'privacy.contact.body': 'З питань захисту даних звертайтеся:',
    'privacy.changes.title': 'Зміни',
    'privacy.changes.body':
      'Час від часу ми можемо оновлювати цю політику, щоб врахувати зміни в застосунку, на сайті чи у вимогах законодавства. Чинна редакція завжди доступна тут.',
  },
  el: {
    'meta.title': 'SimpleTime – Καταγραφή χρόνου για iOS',
    'meta.description':
      'Παρακολουθήστε τον χρόνο σας χωρίς κόπο. Το SimpleTime είναι μια καθαρή και εύχρηστη εφαρμογή καταγραφής χρόνου για iPhone, iPad και Mac. Χωρίς λογαριασμούς, χωρίς παρακολούθηση: τα δεδομένα σας μένουν σε εσάς.',
    'meta.contact.description':
      'Έχετε μια ερώτηση, μια πρόταση ή ένα σφάλμα να αναφέρετε; Γράψτε στο SimpleTime με e-mail — διαβάζουμε κάθε μήνυμα και απαντάμε μέσα σε λίγες εργάσιμες ημέρες.',
    'meta.privacy.description':
      'Πώς διαχειρίζεται το SimpleTime τα δεδομένα σας: όλα παραμένουν στη συσκευή σας, το αντίγραφο ασφαλείας στο iCloud είναι προαιρετικό και κρυπτογραφημένο, χωρίς αναλυτικά και χωρίς παρακολούθηση.',
    'meta.imprint.description':
      'Νομικά στοιχεία του simple-time.app σύμφωνα με το § 5 DDG: κάτοχος, στοιχεία επικοινωνίας και πληροφορίες ευθύνης για την εφαρμογή και τον ιστότοπο SimpleTime.',

    'nav.features': 'Δυνατότητες',
    'nav.screenshots': 'Στιγμιότυπα',
    'nav.contact': 'Επικοινωνία',
    'nav.appstore': 'Δείτε στο App Store',
    'nav.faq': 'Ερωτήσεις',
    'nav.menu': 'Άνοιγμα μενού',
    'nav.menu.close': 'Κλείσιμο μενού',
    'nav.language': 'Γλώσσα',
    'nav.theme': 'Εναλλαγή ανοιχτού και σκούρου θέματος',
    'skip.content': 'Μετάβαση στο περιεχόμενο',

    'hero.eyebrow': 'Καταγραφή χρόνου για iOS',
    'hero.title.part1': 'Ο χρόνος σας,',
    'hero.title.part2': 'χωρίς κόπο.',
    'hero.subtitle':
      'Το SimpleTime σάς βοηθά να αξιοποιείτε τον χρόνο σας συνειδητά και αποδοτικά. Δουλειά, σπουδές, προπόνηση ή προσωπικά έργα: καταγράψτε τις δραστηριότητές σας με σαφήνεια και δομή, χωρίς περιττή πολυπλοκότητα.',
    'hero.cta.appstore': 'Λήψη από το App Store',
    'hero.cta.features': 'Δείτε τις δυνατότητες',
    'hero.availability': 'Δωρεάν · iPhone · iPad · Mac',
    'hero.proof.price': 'Δωρεάν λήψη',
    'hero.proof.account': 'Χωρίς λογαριασμό',
    'hero.proof.private': 'Τα δεδομένα μένουν στη συσκευή',

    'features.title': 'Εστιάστε σε αυτό που πραγματικά μετράει: τον χρόνο σας.',
    'features.subtitle': 'Ό,τι χρειάζεται για συνειδητή καταγραφή χρόνου, και τίποτα παραπάνω.',
    'features.instant.title': 'Ξεκινήστε αμέσως',
    'features.instant.body':
      'Ένα άγγιγμα αρκεί για να ξεκινήσει η καταγραφή. Γρήγορα, κατανοητά και χωρίς περισπασμούς.',
    'features.structured.title': 'Δομημένες εργασίες και υποεργασίες',
    'features.structured.body':
      'Οργανώστε τις δραστηριότητές σας ιεραρχικά και αποτυπώστε με ακρίβεια τη δομή της δουλειάς, των σπουδών ή των έργων σας.',
    'features.timeline.title': 'Ημερήσια προβολή και χρονογραμμή',
    'features.timeline.body':
      'Όλη η μέρα με μια ματιά: ώρα έναρξης και λήξης, διάρκεια και προαιρετικές σημειώσεις.',
    'features.stats.title': 'Αυτόματα στατιστικά',
    'features.stats.body':
      'Καθαρά και κατατοπιστικά γραφήματα δείχνουν τις δραστηριότητές σας ανά ημέρα, εβδομάδα και μήνα.',
    'features.icloud.title': 'Έξυπνο αντίγραφο ασφαλείας στο iCloud',
    'features.icloud.body':
      'Τα δεδομένα σας αποθηκεύονται αυτόματα στο iCloud — καθημερινά ή εβδομαδιαία — και συγχρονίζονται μεταξύ των συσκευών σας.',
    'features.export.title': 'Εξαγωγή CSV',
    'features.export.body':
      'Εξάγετε τα δεδομένα χρόνου σας σε Excel, Numbers ή οποιοδήποτε άλλο εργαλείο ανάλυσης.',
    'features.private.title': 'Ιδιωτικά και ασφαλή',
    'features.private.body':
      'Τα δεδομένα σας ανήκουν μόνο σε εσάς. Το SimpleTime δεν συλλέγει προσωπικές πληροφορίες και δεν μοιράζεται τίποτα με τρίτους.',

    'screenshots.track.title': 'Καταγραφή',
    'screenshots.track.body': 'Όλες οι δραστηριότητες της ημέρας με μια ματιά.',
    'screenshots.customize.title': 'Προσαρμογή',
    'screenshots.customize.body': 'Χρώματα και κατηγορίες για κάθε εργασία.',
    'screenshots.overview.title': 'Επισκόπηση',
    'screenshots.overview.body': 'Όλη η μέρα σε μία καθαρή λίστα.',
    'screenshots.timeline.title': 'Χρονογραμμή',
    'screenshots.timeline.body': 'Η μέρα σας ώρα με την ώρα.',
    'screenshots.analyze.title': 'Ανάλυση',
    'screenshots.analyze.body': 'Δείτε ακριβώς πού πηγαίνει ο χρόνος σας.',
    'screenshots.reports.title': 'Αναφορές',
    'screenshots.reports.body': 'Αναλυτική κατανομή ανά εργασία.',

    'showcase.day.eyebrow': 'Η ημερήσια προβολή',
    'showcase.day.title': 'Όλη η μέρα σε ένα σημείο.',
    'showcase.day.body':
      'Ξεκινήστε μια εργασία με ένα άγγιγμα και αφήστε την καταγραφή στο SimpleTime. Κάθε εγγραφή κρατά την ώρα έναρξης και λήξης, τη διάρκεια και μια προαιρετική σημείωση — η μέρα σας συντίθεται μόνη της όσο δουλεύετε.',
    'showcase.day.point1': 'Ένα άγγιγμα για έναρξη, ένα για διακοπή',
    'showcase.day.point2': 'Αγαπημένα για όσα καταγράφετε καθημερινά',
    'showcase.day.point3': 'Χρονογραμμή της ημέρας, ώρα με την ώρα',

    'showcase.insight.eyebrow': 'Στατιστικά',
    'showcase.insight.title': 'Δείτε ακριβώς πού πηγαίνει ο χρόνος σας.',
    'showcase.insight.body':
      'Τα γραφήματα ανά ημέρα, εβδομάδα και μήνα μετατρέπουν τις εγγραφές σας σε μια εικόνα πάνω στην οποία μπορείτε να δράσετε. Χρειάζεστε τα καθαρά νούμερα; Εξάγετε οποιαδήποτε περίοδο σε CSV και ανοίξτε την στο Excel ή στο Numbers.',
    'showcase.insight.point1': 'Γραφήματα ανά ημέρα, εβδομάδα και μήνα',
    'showcase.insight.point2': 'Αναλυτικές αναφορές για κάθε εργασία',
    'showcase.insight.point3': 'Εξαγωγή CSV για εξωτερική ανάλυση',

    'showcase.personal.eyebrow': 'Η δική σας διαμόρφωση',
    'showcase.personal.title': 'Προσαρμόζεται στον τρόπο που δουλεύετε.',
    'showcase.personal.body':
      'Δώστε σε κάθε εργασία δικό της χρώμα, εικονίδιο και κατηγορία, και με τις υποεργασίες αποτυπώστε την πραγματική δομή ενός έργου. Ό,τι χρησιμοποιείτε περισσότερο μένει στα αγαπημένα, πάντα στην κορυφή.',
    'showcase.personal.point1': 'Χρώματα, SF Symbols και emoji',
    'showcase.personal.point2': 'Κατηγορίες, εργασίες και υποεργασίες',
    'showcase.personal.point3': 'Τα αγαπημένα πάντα κοντά σας',

    'gallery.title': 'Από πιο κοντά.',
    'gallery.subtitle': 'Κάθε οθόνη ακριβώς όπως εμφανίζεται στη συσκευή σας.',

    'audience.title': 'Για όλους όσοι εκτιμούν τον χρόνο τους.',
    'audience.subtitle':
      'Φοιτητές, ελεύθεροι επαγγελματίες, εργαζόμενοι, δημιουργοί, αθλητές — και όλοι όσοι θέλουν να καταλάβουν πού πηγαίνει πραγματικά ο χρόνος τους.',
    'audience.work.title': 'Εργασία και ελεύθερο επάγγελμα',
    'audience.work.body':
      'Κρατήστε ξεχωριστά τη δουλειά για πελάτες και τα δικά σας έργα, και εξάγετε ένα καθαρό αρχείο όποτε χρειάζεται.',
    'audience.study.title': 'Σπουδές και μάθηση',
    'audience.study.body':
      'Δείτε πόσο χρόνο απαιτεί πραγματικά ένα μάθημα και σχεδιάστε την επόμενη εβδομάδα με πραγματικά νούμερα.',
    'audience.training.title': 'Προπόνηση και συνήθειες',
    'audience.training.body':
      'Καταγράψτε προπονήσεις, ύπνο ή εξάσκηση και δείτε πώς χτίζεται η συνέπεια εβδομάδα με εβδομάδα.',
    'audience.everyday.title': 'Καθημερινή ζωή',
    'audience.everyday.body':
      'Ανακαλύψτε πού πηγαίνουν πραγματικά οι ώρες — και αποφασίστε μόνοι σας τι θέλετε να αλλάξετε.',

    'faq.title': 'Συχνές ερωτήσεις.',
    'faq.subtitle': 'Ό,τι αξίζει να ξέρετε πριν κατεβάσετε την εφαρμογή.',
    'faq.free.q': 'Είναι το SimpleTime πραγματικά δωρεάν;',
    'faq.free.a':
      'Ναι. Το SimpleTime κατεβαίνει δωρεάν από το App Store και λειτουργεί σε iPhone, iPad και Mac.',
    'faq.account.q': 'Χρειάζομαι λογαριασμό;',
    'faq.account.a':
      'Όχι. Δεν υπάρχει εγγραφή ούτε σύνδεση. Ανοίγετε την εφαρμογή και ξεκινάτε αμέσως την καταγραφή.',
    'faq.data.q': 'Πού αποθηκεύονται τα δεδομένα μου;',
    'faq.data.a':
      'Αποκλειστικά στη συσκευή σας. Αν ενεργοποιήσετε το αντίγραφο ασφαλείας στο iCloud, τα δεδομένα μεταφέρονται κρυπτογραφημένα στον δικό σας λογαριασμό iCloud. Δεν έχουμε πρόσβαση σε αυτά σε καμία στιγμή.',
    'faq.sync.q': 'Συγχρονίζεται μεταξύ των συσκευών μου;',
    'faq.sync.a':
      'Ναι, μέσω iCloud. Τα αντίγραφα δημιουργούνται καθημερινά ή εβδομαδιαία και οι εγγραφές σας παραμένουν συγχρονισμένες σε iPhone, iPad και Mac.',
    'faq.export.q': 'Μπορώ να πάρω πίσω τα δεδομένα μου;',
    'faq.export.a':
      'Οποιαδήποτε στιγμή. Το SimpleTime εξάγει τα δεδομένα χρόνου σας σε CSV, έτοιμα για Excel, Numbers ή οποιοδήποτε άλλο εργαλείο ανάλυσης.',
    'faq.tracking.q': 'Με παρακολουθεί η εφαρμογή;',
    'faq.tracking.a':
      'Όχι. Το SimpleTime δεν περιέχει SDK αναλυτικών, διαφημίσεις ή αναφορές σφαλμάτων τρίτων, και δεν δημιουργεί προφίλ χρηστών.',

    'cta.title': 'Έτοιμοι να ξεκινήσετε;',
    'cta.subtitle': 'Διαθέσιμο δωρεάν για iPhone, iPad και Mac.',
    'cta.button': 'Λήψη από το App Store',

    'footer.tagline': 'Παρακολουθήστε τον χρόνο σας χωρίς κόπο.',
    'footer.legal': 'Νομικές πληροφορίες',
    'footer.product': 'Προϊόν',
    'footer.appstore': 'App Store',
    'footer.contact': 'Επικοινωνία',
    'footer.imprint': 'Νομικά στοιχεία',
    'footer.privacy': 'Απόρρητο',
    'footer.copyright': '© {year} Luca Efinger. Με επιφύλαξη παντός δικαιώματος.',

    'contact.title': 'Επικοινωνία',
    'contact.subtitle': 'Ερωτήσεις, σχόλια ή ιδέες; Γράψτε μας.',
    'contact.email.label': 'E-mail',
    'contact.email.body':
      'Γράψτε μας στη διεύθυνση παρακάτω — διαβάζουμε κάθε μήνυμα και απαντάμε όσο πιο γρήγορα μπορούμε.',
    'contact.response':
      'Συνήθως απαντάμε μέσα σε λίγες εργάσιμες ημέρες. Για αναφορά σφάλματος, αναφέρετε το μοντέλο της συσκευής και την έκδοση iOS.',

    'imprint.title': 'Νομικά στοιχεία',
    'imprint.country': 'Γερμανία',
    'imprint.according': 'Στοιχεία σύμφωνα με το § 5 DDG',
    'imprint.contact': 'Επικοινωνία',
    'imprint.responsible': 'Υπεύθυνος για το περιεχόμενο σύμφωνα με το § 18, παρ. 2 MStV',
    'imprint.disclaimer.title': 'Αποποίηση ευθύνης',
    'imprint.disclaimer.liability.title': 'Ευθύνη για το περιεχόμενο',
    'imprint.disclaimer.liability.body':
      'Ως πάροχος υπηρεσιών ευθυνόμαστε για το δικό μας περιεχόμενο σε αυτές τις σελίδες σύμφωνα με τις γενικές διατάξεις. Ωστόσο, σύμφωνα με το άρθρο 8 DSA δεν υποχρεούμαστε να παρακολουθούμε πληροφορίες τρίτων που μεταδίδονται ή αποθηκεύονται, ούτε να ερευνούμε περιστάσεις που υποδεικνύουν παράνομη δραστηριότητα. Οι υποχρεώσεις αφαίρεσης ή φραγής της χρήσης πληροφοριών βάσει των γενικών διατάξεων παραμένουν ανεπηρέαστες. Ευθύνη ως προς αυτό προκύπτει μόνο από τη στιγμή που λαμβάνουμε γνώση συγκεκριμένης παράβασης. Μόλις λάβουμε γνώση τέτοιων παραβάσεων, αφαιρούμε αμέσως το σχετικό περιεχόμενο.',
    'imprint.disclaimer.links.title': 'Ευθύνη για τους συνδέσμους',
    'imprint.disclaimer.links.body':
      'Η προσφορά μας περιέχει συνδέσμους προς εξωτερικούς ιστότοπους τρίτων, στο περιεχόμενο των οποίων δεν έχουμε επιρροή. Για τον λόγο αυτό δεν μπορούμε να αναλάβουμε καμία ευθύνη για αυτά τα εξωτερικά περιεχόμενα. Για το περιεχόμενο των συνδεδεμένων σελίδων ευθύνεται πάντοτε ο εκάστοτε πάροχος ή διαχειριστής τους. Οι συνδεδεμένες σελίδες ελέγχθηκαν κατά τη στιγμή της σύνδεσης για πιθανές παραβάσεις· παράνομο περιεχόμενο δεν ήταν τότε αναγνωρίσιμο. Ωστόσο, μόνιμος έλεγχος του περιεχομένου των συνδεδεμένων σελίδων δεν είναι εύλογος χωρίς συγκεκριμένες ενδείξεις παράβασης. Μόλις λάβουμε γνώση παραβάσεων, αφαιρούμε αμέσως τους σχετικούς συνδέσμους.',
    'imprint.disclaimer.copyright.title': 'Πνευματικά δικαιώματα',
    'imprint.disclaimer.copyright.body':
      'Τα περιεχόμενα και τα έργα που δημιουργήθηκαν από τον διαχειριστή του ιστότοπου σε αυτές τις σελίδες υπόκεινται στο γερμανικό δίκαιο πνευματικής ιδιοκτησίας. Η αναπαραγωγή, επεξεργασία, διανομή και κάθε είδους εκμετάλλευση πέρα από τα όρια του δικαίου πνευματικής ιδιοκτησίας απαιτούν τη γραπτή συγκατάθεση του εκάστοτε δημιουργού. Οι λήψεις και τα αντίγραφα αυτού του ιστότοπου επιτρέπονται μόνο για ιδιωτική, μη εμπορική χρήση.',

    'privacy.title': 'Πολιτική απορρήτου',
    'privacy.lastUpdated': 'Τελευταία ενημέρωση',
    'privacy.intro.title': 'Επισκόπηση',
    'privacy.intro.body':
      'Η προστασία των προσωπικών σας δεδομένων είναι σημαντική για εμάς. Η παρούσα πολιτική εξηγεί ποια δεδομένα υποβάλλονται σε επεξεργασία όταν χρησιμοποιείτε την εφαρμογή SimpleTime και αυτόν τον ιστότοπο, και με ποιον τρόπο. Με λίγα λόγια: συλλέγουμε όσο το δυνατόν λιγότερα και δεν μοιραζόμαστε τίποτα με τρίτους.',
    'privacy.app.title': 'Η εφαρμογή SimpleTime',
    'privacy.app.body':
      'Το SimpleTime δεν συλλέγει καμία προσωπική πληροφορία. Όλα τα δεδομένα που εισάγετε — δραστηριότητες, εργασίες, κατηγορίες, σημειώσεις και χρόνοι — αποθηκεύονται αποκλειστικά στη συσκευή σας. Προαιρετικά μπορείτε να ενεργοποιήσετε το αντίγραφο ασφαλείας στο iCloud· σε αυτή την περίπτωση τα δεδομένα σας μεταφέρονται κρυπτογραφημένα μέσω της υποδομής iCloud της Apple στον δικό σας λογαριασμό iCloud. Δεν έχουμε πρόσβαση σε αυτά τα δεδομένα σε καμία στιγμή.',
    'privacy.app.nocollect.title': 'Χωρίς αναλυτικά, χωρίς παρακολούθηση',
    'privacy.app.nocollect.body':
      'Η εφαρμογή δεν περιέχει SDK αναλυτικών, διαφημίσεις, εργαλεία αναφοράς σφαλμάτων τρίτων ή παρακολούθηση χρηστών. Δεν δημιουργούνται προφίλ χρηστών.',
    'privacy.website.title': 'Αυτός ο ιστότοπος',
    'privacy.website.body':
      'Ο ιστότοπος φιλοξενείται στο Cloudflare Workers. Κατά την επίσκεψη, ο περιηγητής σας μεταδίδει για τεχνικούς λόγους μια διεύθυνση IP και ένα user agent στον διακομιστή, κάτι αναπόφευκτο για την παράδοση οποιουδήποτε ιστότοπου. Η Cloudflare ενδέχεται να αποθηκεύει προσωρινά αυτές τις πληροφορίες σε αρχεία καταγραφής για λόγους ασφαλείας. Εμείς οι ίδιοι δεν συλλέγουμε, δεν αποθηκεύουμε και δεν αναλύουμε τέτοια δεδομένα. Ο ιστότοπος δεν χρησιμοποιεί cookies, αναλυτικά, παρακολούθηση ή γραμματοσειρές τρίτων — οι γραμματοσειρές παρέχονται από τον δικό μας διακομιστή.',
    'privacy.website.hosting.title': 'Φιλοξενία',
    'privacy.website.hosting.body':
      'Πάροχος: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, ΗΠΑ. Περισσότερες πληροφορίες θα βρείτε στην πολιτική απορρήτου της Cloudflare στη διεύθυνση https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'Δίκτυο παράδοσης περιεχομένου',
    'privacy.website.cdn.body':
      'Για να παραδίδουμε τον ιστότοπο γρήγορα και να τον προστατεύουμε από επιθέσεις χρησιμοποιούμε την Cloudflare, ένα δίκτυο παράδοσης περιεχομένου και υπηρεσία αντίστροφου διαμεσολαβητή της Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, ΗΠΑ. Κατά την επίσκεψη στον ιστότοπο, το αίτημά σας περνά από τους διακομιστές της Cloudflare. Η Cloudflare επεξεργάζεται τότε τεχνικά δεδομένα σύνδεσης — ιδίως τη διεύθυνση IP και το user agent — για να παραδίδει περιεχόμενο, να εντοπίζει απειλές ασφαλείας και να μπλοκάρει κακόβουλη κίνηση. Για την προστασία από bots και την ασφάλεια της συνεδρίας, η Cloudflare μπορεί να θέτει τεχνικά απαραίτητα cookies (π.χ. __cf_bm, _cfuvid)· αυτά δεν χρησιμοποιούνται για παρακολούθηση ή ανάλυση. Νομική βάση είναι το έννομο συμφέρον μας για έναν ασφαλή και αποδοτικό ιστότοπο σύμφωνα με το άρθρο 6 παρ. 1 στοιχ. στ) του ΓΚΠΔ. Η Cloudflare είναι πιστοποιημένη στο πλαίσιο του EU-U.S. Data Privacy Framework και έχει συναφθεί σύμβαση επεξεργασίας δεδομένων. Περισσότερα: https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'Τα δικαιώματά σας',
    'privacy.rights.body':
      'Σύμφωνα με τον ΓΚΠΔ έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού της επεξεργασίας, φορητότητας των δεδομένων καθώς και δικαίωμα εναντίωσης στην επεξεργασία. Μπορείτε να επικοινωνήσετε μαζί μας οποιαδήποτε στιγμή με τα στοιχεία επικοινωνίας παρακάτω.',
    'privacy.contact.title': 'Επικοινωνία',
    'privacy.contact.body': 'Για ερωτήματα σχετικά με την προστασία δεδομένων απευθυνθείτε:',
    'privacy.changes.title': 'Αλλαγές',
    'privacy.changes.body':
      'Ενδέχεται να ενημερώνουμε κατά καιρούς την παρούσα πολιτική ώστε να αποτυπώνει αλλαγές στην εφαρμογή, στον ιστότοπο ή στις νομικές απαιτήσεις. Η ισχύουσα έκδοση είναι πάντα διαθέσιμη εδώ.',
  },
  he: {
    'meta.title': 'SimpleTime – מעקב זמן ל‑iOS',
    'meta.description':
      'עקבו אחרי הזמן שלכם בקלות. SimpleTime היא אפליקציית מעקב זמן נקייה ופשוטה ל‑iPhone, ל‑iPad ול‑Mac. בלי חשבונות, בלי מעקב: הנתונים שלכם נשארים אצלכם.',
    'meta.contact.description':
      'יש לכם שאלה, הצעה או באג לדווח עליו? כתבו ל‑SimpleTime במייל — אנחנו קוראים כל הודעה ומשיבים בתוך כמה ימי עסקים.',
    'meta.privacy.description':
      'איך SimpleTime מטפלת בנתונים שלכם: הכול נשאר במכשיר, גיבוי ל‑iCloud הוא אופציונלי ומוצפן, בלי אנליטיקה ובלי מעקב.',
    'meta.imprint.description':
      'פרטים משפטיים של simple-time.app לפי § 5 DDG: בעלים, פרטי התקשרות ומידע על אחריות עבור אפליקציית SimpleTime והאתר.',

    'nav.features': 'תכונות',
    'nav.screenshots': 'צילומי מסך',
    'nav.contact': 'צור קשר',
    'nav.appstore': 'הצגה ב‑App Store',
    'nav.faq': 'שאלות נפוצות',
    'nav.menu': 'פתיחת תפריט',
    'nav.menu.close': 'סגירת תפריט',
    'nav.language': 'שפה',
    'nav.theme': 'מעבר בין מצב בהיר לכהה',
    'skip.content': 'דילוג לתוכן',

    'hero.eyebrow': 'מעקב זמן ל‑iOS',
    'hero.title.part1': 'הזמן שלכם,',
    'hero.title.part2': 'בלי מאמץ.',
    'hero.subtitle':
      'SimpleTime עוזרת לכם לנצל את הזמן שלכם במודעות וביעילות. עבודה, לימודים, אימון או פרויקטים אישיים: תעדו את הפעילויות שלכם בבהירות ובמבנה ברור, בלי סיבוכים מיותרים.',
    'hero.cta.appstore': 'הורדה מ‑App Store',
    'hero.cta.features': 'לתכונות',
    'hero.availability': 'חינם · iPhone · iPad · Mac',
    'hero.proof.price': 'הורדה חינם',
    'hero.proof.account': 'בלי חשבון',
    'hero.proof.private': 'הנתונים נשארים במכשיר',

    'features.title': 'להתמקד במה שבאמת חשוב: בזמן שלכם.',
    'features.subtitle': 'כל מה שצריך למעקב זמן מודע, ולא יותר מזה.',
    'features.instant.title': 'מתחילים מיד',
    'features.instant.body':
      'הקשה אחת ומדידת הזמן מתחילה. מהר, ברור ובלי הסחות דעת.',
    'features.structured.title': 'משימות ותת‑משימות מסודרות',
    'features.structured.body':
      'ארגנו את הפעילויות שלכם בהיררכיה ושקפו במדויק את המבנה של העבודה, הלימודים או הפרויקטים שלכם.',
    'features.timeline.title': 'תצוגה יומית וציר זמן',
    'features.timeline.body':
      'כל היום במבט אחד: שעת התחלה וסיום, משך זמן והערות לפי הצורך.',
    'features.stats.title': 'סטטיסטיקות אוטומטיות',
    'features.stats.body':
      'תרשימים נקיים וברורים מציגים את הפעילויות שלכם לפי יום, שבוע וחודש.',
    'features.icloud.title': 'גיבוי חכם ל‑iCloud',
    'features.icloud.body':
      'הנתונים שלכם נשמרים אוטומטית ב‑iCloud — מדי יום או מדי שבוע — ומסתנכרנים בין המכשירים שלכם.',
    'features.export.title': 'ייצוא ל‑CSV',
    'features.export.body':
      'ייצאו את נתוני הזמן שלכם ל‑Excel, ל‑Numbers או לכל כלי ניתוח אחר.',
    'features.private.title': 'פרטי ומאובטח',
    'features.private.body':
      'הנתונים שלכם שייכים רק לכם. SimpleTime לא אוספת מידע אישי ולא משתפת דבר עם צדדים שלישיים.',

    'screenshots.track.title': 'מעקב',
    'screenshots.track.body': 'כל פעילויות היום במבט אחד.',
    'screenshots.customize.title': 'התאמה אישית',
    'screenshots.customize.body': 'צבעים וקטגוריות לכל משימה.',
    'screenshots.overview.title': 'סקירה',
    'screenshots.overview.body': 'כל היום ברשימה אחת ונקייה.',
    'screenshots.timeline.title': 'ציר זמן',
    'screenshots.timeline.body': 'היום שלכם שעה אחר שעה.',
    'screenshots.analyze.title': 'ניתוח',
    'screenshots.analyze.body': 'לראות בדיוק לאן הולך הזמן שלכם.',
    'screenshots.reports.title': 'דוחות',
    'screenshots.reports.body': 'פירוט מלא לפי משימה.',

    'showcase.day.eyebrow': 'התצוגה היומית',
    'showcase.day.title': 'כל היום במקום אחד.',
    'showcase.day.body':
      'התחילו משימה בהקשה אחת ותנו ל‑SimpleTime לספור. כל רשומה שומרת שעת התחלה וסיום, משך זמן והערה אופציונלית — היום שלכם מתגבש מעצמו תוך כדי עבודה.',
    'showcase.day.point1': 'הקשה אחת להתחלה, אחת לעצירה',
    'showcase.day.point2': 'מועדפים למה שאתם מתעדים כל יום',
    'showcase.day.point3': 'ציר זמן של היום, שעה אחר שעה',

    'showcase.insight.eyebrow': 'סטטיסטיקות',
    'showcase.insight.title': 'לראות בדיוק לאן הולך הזמן שלכם.',
    'showcase.insight.body':
      'תרשימים לפי יום, שבוע וחודש הופכים את הרשומות שלכם לתמונה שאפשר לפעול לפיה. צריכים את המספרים הגולמיים? ייצאו כל טווח תאריכים ל‑CSV ופתחו אותו ב‑Excel או ב‑Numbers.',
    'showcase.insight.point1': 'תרשימים לפי יום, שבוע וחודש',
    'showcase.insight.point2': 'דוחות מפורטים לכל משימה',
    'showcase.insight.point3': 'ייצוא CSV לניתוח חיצוני',

    'showcase.personal.eyebrow': 'ההגדרה שלכם',
    'showcase.personal.title': 'מתאימה את עצמה לאופן שבו אתם עובדים.',
    'showcase.personal.body':
      'תנו לכל משימה צבע, סמל וקטגוריה משלה, ובעזרת תת‑משימות שקפו את המבנה האמיתי של פרויקט. מה שאתם משתמשים בו הכי הרבה נשאר במועדפים, תמיד למעלה.',
    'showcase.personal.point1': 'צבעים, SF Symbols ואמוג׳י',
    'showcase.personal.point2': 'קטגוריות, משימות ותת‑משימות',
    'showcase.personal.point3': 'המועדפים תמיד בהישג יד',

    'gallery.title': 'מקרוב.',
    'gallery.subtitle': 'כל מסך בדיוק כפי שהוא מופיע במכשיר שלכם.',

    'audience.title': 'לכל מי שמעריך את הזמן שלו.',
    'audience.subtitle':
      'סטודנטים, עצמאים, שכירים, יוצרים, ספורטאים — וכל מי שרוצה להבין לאן הזמן שלו באמת הולך.',
    'audience.work.title': 'עבודה ועצמאות',
    'audience.work.body':
      'הפרידו בין עבודה עבור לקוחות לבין הפרויקטים שלכם, וייצאו תיעוד מסודר בכל רגע.',
    'audience.study.title': 'לימודים ולמידה',
    'audience.study.body':
      'ראו כמה זמן קורס באמת דורש, ותכננו את השבוע הבא לפי מספרים אמיתיים.',
    'audience.training.title': 'אימון והרגלים',
    'audience.training.body':
      'תעדו אימונים, שינה או תרגול, וראו איך העקביות נבנית שבוע אחר שבוע.',
    'audience.everyday.title': 'חיי היום‑יום',
    'audience.everyday.body':
      'גלו לאן השעות באמת הולכות — והחליטו בעצמכם מה תרצו לשנות.',

    'faq.title': 'שאלות נפוצות.',
    'faq.subtitle': 'כל מה שכדאי לדעת לפני ההורדה.',
    'faq.free.q': 'האם SimpleTime באמת חינמית?',
    'faq.free.a':
      'כן. את SimpleTime אפשר להוריד בחינם מ‑App Store, והיא פועלת ב‑iPhone, ב‑iPad וב‑Mac.',
    'faq.account.q': 'צריך חשבון?',
    'faq.account.a':
      'לא. אין הרשמה ואין התחברות. פותחים את האפליקציה ומתחילים לתעד מיד.',
    'faq.data.q': 'איפה הנתונים שלי נשמרים?',
    'faq.data.a':
      'רק במכשיר שלכם. אם תפעילו גיבוי ל‑iCloud, הנתונים יועברו מוצפנים לחשבון ה‑iCloud הפרטי שלכם. אין לנו גישה אליהם בשום שלב.',
    'faq.sync.q': 'האם יש סנכרון בין המכשירים שלי?',
    'faq.sync.a':
      'כן, דרך iCloud. הגיבויים נוצרים מדי יום או מדי שבוע, והרשומות שלכם נשארות מסונכרנות ב‑iPhone, ב‑iPad וב‑Mac.',
    'faq.export.q': 'אפשר לקבל את הנתונים שלי בחזרה?',
    'faq.export.a':
      'בכל רגע. SimpleTime מייצאת את נתוני הזמן שלכם ל‑CSV, מוכנים ל‑Excel, ל‑Numbers או לכל כלי ניתוח אחר.',
    'faq.tracking.q': 'האם האפליקציה עוקבת אחריי?',
    'faq.tracking.a':
      'לא. ב‑SimpleTime אין ערכות אנליטיקה, פרסומות או דיווח קריסות של צדדים שלישיים, והיא לא בונה פרופילי משתמשים.',

    'cta.title': 'מוכנים להתחיל?',
    'cta.subtitle': 'זמינה בחינם ל‑iPhone, ל‑iPad ול‑Mac.',
    'cta.button': 'הורדה מ‑App Store',

    'footer.tagline': 'עקבו אחרי הזמן שלכם בקלות.',
    'footer.legal': 'מידע משפטי',
    'footer.product': 'מוצר',
    'footer.appstore': 'App Store',
    'footer.contact': 'צור קשר',
    'footer.imprint': 'פרטים משפטיים',
    'footer.privacy': 'פרטיות',
    'footer.copyright': '© {year} Luca Efinger. כל הזכויות שמורות.',

    'contact.title': 'צור קשר',
    'contact.subtitle': 'שאלות, משוב או רעיונות? כתבו לנו.',
    'contact.email.label': 'דוא״ל',
    'contact.email.body':
      'כתבו לנו לכתובת שלמטה — אנחנו קוראים כל הודעה ומשיבים במהירות האפשרית.',
    'contact.response':
      'בדרך כלל אנחנו משיבים בתוך כמה ימי עסקים. אם אתם מדווחים על באג, ציינו את דגם המכשיר ואת גרסת iOS.',

    'imprint.title': 'פרטים משפטיים',
    'imprint.country': 'גרמניה',
    'imprint.according': 'פרטים לפי § 5 DDG',
    'imprint.contact': 'צור קשר',
    'imprint.responsible': 'אחראי לתוכן לפי § 18 סעיף 2 MStV',
    'imprint.disclaimer.title': 'הצהרת אחריות',
    'imprint.disclaimer.liability.title': 'אחריות לתוכן',
    'imprint.disclaimer.liability.body':
      'כספק שירות אנו אחראים לתוכן שלנו בעמודים אלה לפי ההוראות הכלליות. עם זאת, לפי סעיף 8 ל‑DSA איננו מחויבים לפקח על מידע של צדדים שלישיים המועבר או מאוחסן אצלנו, או לחקור נסיבות המצביעות על פעילות בלתי חוקית. חובות להסרת מידע או לחסימת השימוש בו לפי ההוראות הכלליות נותרות בעינן. אחריות בעניין זה קמה רק ממועד היוודע הפרה קונקרטית. עם היוודע הפרות כאלה נסיר את התוכן הרלוונטי לאלתר.',
    'imprint.disclaimer.links.title': 'אחריות לקישורים',
    'imprint.disclaimer.links.body':
      'ההיצע שלנו כולל קישורים לאתרים חיצוניים של צדדים שלישיים, שעל תוכנם אין לנו כל השפעה. לכן איננו יכולים לקבל על עצמנו אחריות לתכנים חיצוניים אלה. לתוכן העמודים המקושרים אחראי תמיד הספק או המפעיל של אותם עמודים. העמודים המקושרים נבדקו במועד הקישור לאיתור הפרות אפשריות; תוכן בלתי חוקי לא היה ניתן לזיהוי באותה עת. עם זאת, פיקוח מתמיד על תוכן העמודים המקושרים אינו סביר ללא אינדיקציה קונקרטית להפרה. עם היוודע הפרות נסיר את הקישורים הרלוונטיים לאלתר.',
    'imprint.disclaimer.copyright.title': 'זכויות יוצרים',
    'imprint.disclaimer.copyright.body':
      'התכנים והיצירות שנוצרו על ידי מפעיל האתר בעמודים אלה כפופים לדיני זכויות היוצרים הגרמניים. שכפול, עיבוד, הפצה וכל צורת ניצול מעבר לגבולות דיני זכויות היוצרים מחייבים הסכמה בכתב של היוצר הרלוונטי. הורדות והעתקים של אתר זה מותרים לשימוש פרטי ולא מסחרי בלבד.',

    'privacy.title': 'מדיניות פרטיות',
    'privacy.lastUpdated': 'עודכן לאחרונה',
    'privacy.intro.title': 'סקירה',
    'privacy.intro.body':
      'הגנת הנתונים האישיים שלכם חשובה לנו. מדיניות זו מסבירה אילו נתונים מעובדים בעת השימוש באפליקציית SimpleTime ובאתר זה, וכיצד. בקצרה: אנחנו אוספים כמה שפחות ולא משתפים דבר עם צדדים שלישיים.',
    'privacy.app.title': 'אפליקציית SimpleTime',
    'privacy.app.body':
      'SimpleTime לא אוספת שום מידע אישי. כל הנתונים שאתם מזינים — פעילויות, משימות, קטגוריות, הערות וזמנים — נשמרים רק במכשיר שלכם. אפשר להפעיל גיבוי ל‑iCloud; במקרה זה הנתונים מועברים מוצפנים דרך תשתית iCloud של Apple לחשבון ה‑iCloud הפרטי שלכם. אין לנו גישה לנתונים אלה בשום שלב.',
    'privacy.app.nocollect.title': 'בלי אנליטיקה, בלי מעקב',
    'privacy.app.nocollect.body':
      'האפליקציה אינה כוללת ערכות אנליטיקה, פרסומות, כלי דיווח קריסות של צדדים שלישיים או מעקב אחר משתמשים. לא נוצרים פרופילי משתמשים.',
    'privacy.website.title': 'האתר הזה',
    'privacy.website.body':
      'האתר מתארח ב‑Cloudflare Workers. בעת הביקור הדפדפן שלכם מעביר לשרת, מסיבות טכניות, כתובת IP ומחרוזת דפדפן — דבר שאי אפשר להימנע ממנו באספקה של כל אתר. Cloudflare עשויה לשמור מידע זה זמנית ביומני שרת מטעמי אבטחה. אנחנו עצמנו לא אוספים, לא שומרים ולא מנתחים נתונים כאלה. האתר אינו משתמש בעוגיות, באנליטיקה, במעקב או בגופנים של צדדים שלישיים — הגופנים מוגשים מהשרת שלנו.',
    'privacy.website.hosting.title': 'אחסון',
    'privacy.website.hosting.body':
      'ספק: Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, ארה״ב. מידע נוסף במדיניות הפרטיות של Cloudflare בכתובת https://www.cloudflare.com/privacypolicy/.',
    'privacy.website.cdn.title': 'רשת אספקת תוכן',
    'privacy.website.cdn.body':
      'כדי לספק את האתר במהירות ולהגן עליו מפני התקפות אנו משתמשים ב‑Cloudflare, רשת אספקת תוכן ושירות פרוקסי הפוך של Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, ארה״ב. בעת הביקור באתר הבקשה שלכם עוברת דרך שרתי Cloudflare. Cloudflare מעבדת אז נתוני חיבור טכניים — בעיקר כתובת IP ומחרוזת דפדפן — כדי לספק תוכן, לזהות איומי אבטחה ולחסום תעבורה זדונית. להגנה מפני בוטים ולאבטחת הסשן, Cloudflare עשויה להציב עוגיות נחוצות טכנית (למשל __cf_bm, _cfuvid); אלה אינן משמשות למעקב או לניתוח. הבסיס החוקי הוא האינטרס הלגיטימי שלנו באתר מאובטח ויעיל לפי סעיף 6(1)(ו) ל‑GDPR. Cloudflare מוסמכת במסגרת EU‑U.S. Data Privacy Framework ונחתם עמה הסכם עיבוד נתונים. פרטים נוספים: https://www.cloudflare.com/privacypolicy/.',
    'privacy.rights.title': 'הזכויות שלכם',
    'privacy.rights.body':
      'לפי ה‑GDPR עומדת לכם הזכות לעיון, לתיקון, למחיקה, להגבלת עיבוד, לניידות נתונים וכן זכות להתנגד לעיבוד. תוכלו לפנות אלינו בכל עת באמצעות פרטי ההתקשרות שלמטה.',
    'privacy.contact.title': 'צור קשר',
    'privacy.contact.body': 'לשאלות בנושא הגנת נתונים פנו אל:',
    'privacy.changes.title': 'שינויים',
    'privacy.changes.body':
      'ייתכן שנעדכן מדיניות זו מעת לעת כדי לשקף שינויים באפליקציה, באתר או בדרישות החוק. הגרסה התקפה זמינה תמיד כאן.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
