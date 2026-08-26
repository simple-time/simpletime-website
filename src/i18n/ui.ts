export const languages = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
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
      'Legal notice for simple-time.app under § 5 TMG — operator, contact details and liability information for the SimpleTime app and website.',

    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.contact': 'Contact',
    'nav.appstore': 'View on App Store',
    'nav.faq': 'FAQ',
    'nav.menu': 'Open menu',
    'nav.menu.close': 'Close menu',
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
    'imprint.according': 'Information according to § 5 TMG',
    'imprint.contact': 'Contact',
    'imprint.responsible': 'Responsible for content according to § 55 Abs. 2 RStV',
    'imprint.disclaimer.title': 'Disclaimer',
    'imprint.disclaimer.liability.title': 'Liability for content',
    'imprint.disclaimer.liability.body':
      'As a service provider we are responsible for our own content on these pages according to general law (§ 7 para. 1 TMG). According to §§ 8 to 10 TMG, however, we are not obliged to monitor transmitted or stored external information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general law remain unaffected. A corresponding liability is only possible from the point in time of knowledge of a specific infringement. Upon becoming aware of corresponding infringements, we will remove such content immediately.',
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
      'Impressum für simple-time.app nach § 5 TMG — Betreiber, Kontaktdaten und Haftungshinweise zur SimpleTime-App und zur Website.',

    'nav.features': 'Funktionen',
    'nav.screenshots': 'Screenshots',
    'nav.contact': 'Kontakt',
    'nav.appstore': 'Im App Store ansehen',
    'nav.faq': 'FAQ',
    'nav.menu': 'Menü öffnen',
    'nav.menu.close': 'Menü schließen',
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
    'imprint.according': 'Angaben gemäß § 5 TMG',
    'imprint.contact': 'Kontakt',
    'imprint.responsible': 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
    'imprint.disclaimer.title': 'Haftungsausschluss',
    'imprint.disclaimer.liability.title': 'Haftung für Inhalte',
    'imprint.disclaimer.liability.body':
      'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
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
      'Mentions légales de simple-time.app selon le § 5 TMG — éditeur, coordonnées et informations de responsabilité pour l’app et le site SimpleTime.',

    'nav.features': 'Fonctionnalités',
    'nav.screenshots': 'Captures',
    'nav.contact': 'Contact',
    'nav.appstore': 'Voir sur l’App Store',
    'nav.faq': 'FAQ',
    'nav.menu': 'Ouvrir le menu',
    'nav.menu.close': 'Fermer le menu',
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
    'imprint.according': 'Informations selon le § 5 TMG',
    'imprint.contact': 'Contact',
    'imprint.responsible': 'Responsable du contenu selon le § 55, al. 2 RStV',
    'imprint.disclaimer.title': 'Avertissement',
    'imprint.disclaimer.liability.title': 'Responsabilité concernant le contenu',
    'imprint.disclaimer.liability.body':
      'En tant que prestataire de services, nous sommes responsables de nos propres contenus sur ces pages conformément au droit commun (§ 7, al. 1 TMG). Selon les §§ 8 à 10 TMG, nous ne sommes toutefois pas tenus de surveiller les informations de tiers transmises ou stockées, ni de rechercher les circonstances révélant une activité illicite. Les obligations de retrait ou de blocage de l’utilisation d’informations en vertu du droit commun demeurent inchangées. Une responsabilité à ce titre n’est cependant engagée qu’à compter de la connaissance d’une infraction concrète. Dès que nous aurons connaissance de telles infractions, nous retirerons ces contenus sans délai.',
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
      'Aviso legal de simple-time.app según el § 5 TMG: titular, datos de contacto e información sobre responsabilidad de la app y el sitio de SimpleTime.',

    'nav.features': 'Funciones',
    'nav.screenshots': 'Capturas',
    'nav.contact': 'Contacto',
    'nav.appstore': 'Ver en el App Store',
    'nav.faq': 'Preguntas',
    'nav.menu': 'Abrir menú',
    'nav.menu.close': 'Cerrar menú',
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
    'imprint.according': 'Información según el § 5 TMG',
    'imprint.contact': 'Contacto',
    'imprint.responsible': 'Responsable del contenido según el § 55, apdo. 2 RStV',
    'imprint.disclaimer.title': 'Descargo de responsabilidad',
    'imprint.disclaimer.liability.title': 'Responsabilidad por el contenido',
    'imprint.disclaimer.liability.body':
      'Como prestador de servicios, somos responsables de nuestros propios contenidos en estas páginas conforme al derecho general (§ 7, apdo. 1 TMG). Según los §§ 8 a 10 TMG, no estamos obligados a supervisar la información ajena transmitida o almacenada, ni a investigar circunstancias que indiquen una actividad ilícita. Las obligaciones de retirar o bloquear el uso de información conforme al derecho general permanecen inalteradas. Una responsabilidad al respecto solo existe a partir del momento en que se tiene conocimiento de una infracción concreta. En cuanto tengamos conocimiento de tales infracciones, retiraremos dichos contenidos de inmediato.',
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
} as const;

export type UIKey = keyof (typeof ui)['en'];
