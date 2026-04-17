export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'meta.title': 'SimpleTime – Time Tracker for iOS',
    'meta.description':
      'Track time effortlessly. SimpleTime is a clean, intuitive time tracker for iPhone, iPad and Mac. No accounts, no tracking — your data stays with you.',

    'nav.features': 'Features',
    'nav.screenshots': 'Screenshots',
    'nav.contact': 'Contact',
    'nav.appstore': 'View on App Store',

    'hero.eyebrow': 'Time Tracker for iOS',
    'hero.title.part1': 'Track time',
    'hero.title.part2': 'effortlessly.',
    'hero.subtitle':
      'SimpleTime helps you spend your time consciously and efficiently. Whether work, studies, training or personal projects — track your activities in a clear, structured way without unnecessary complexity.',
    'hero.cta.appstore': 'Download on the App Store',
    'hero.cta.features': 'See features',
    'hero.availability': 'Free · iPhone · iPad · Mac',

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

    'screenshots.title': 'Designed to stay out of your way.',
    'screenshots.subtitle': 'A glance is all you need.',
    'screenshots.track.title': 'Track',
    'screenshots.track.body': 'All your daily activities at a glance.',
    'screenshots.customize.title': 'Customize',
    'screenshots.customize.body': 'Personalize tasks with colors and categories.',
    'screenshots.overview.title': 'Overview',
    'screenshots.overview.body': 'See your entire day in one clear list.',
    'screenshots.timeline.title': 'Timeline',
    'screenshots.timeline.body': 'Visualize your day hour by hour.',

    'idealfor.title': 'Made for everyone who values their time.',
    'idealfor.body':
      'Students, freelancers, employees, self-employed professionals, creatives, athletes — and anyone who wants to understand how they truly spend their time.',

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
      'This website is hosted on GitHub Pages. When you access it, your browser technically transmits an IP address and a user agent to the server, which is unavoidable for the delivery of any website. GitHub may temporarily store this information in server log files for security purposes. We ourselves do not collect, store or analyse any such data. This website uses no cookies, no analytics, no tracking and no third-party fonts — the Inter font is delivered from our own server.',
    'privacy.website.hosting.title': 'Hosting',
    'privacy.website.hosting.body':
      'Provider: GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA. More information can be found in GitHub’s privacy statement at https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement.',
    'privacy.rights.title': 'Your Rights',
    'privacy.rights.body':
      'Under the GDPR you have the right to information, correction, deletion, restriction of processing, data portability and to object to processing. You can reach us at any time using the contact details below.',
    'privacy.contact.title': 'Contact',
    'privacy.contact.body': 'For questions regarding data protection please contact:',
    'privacy.changes.title': 'Changes',
    'privacy.changes.body':
      'We may update this privacy policy from time to time to reflect changes in the app, the website or legal requirements. The current version is always available here.',

    'lang.switch': 'Deutsch',
  },
  de: {
    'meta.title': 'SimpleTime – Zeiterfassung für iOS',
    'meta.description':
      'Zeit mühelos tracken. SimpleTime ist ein klarer, intuitiver Zeittracker für iPhone, iPad und Mac. Ohne Account, ohne Tracking — deine Daten bleiben bei dir.',

    'nav.features': 'Funktionen',
    'nav.screenshots': 'Screenshots',
    'nav.contact': 'Kontakt',
    'nav.appstore': 'Im App Store ansehen',

    'hero.eyebrow': 'Zeiterfassung für iOS',
    'hero.title.part1': 'Zeit tracken —',
    'hero.title.part2': 'ganz mühelos.',
    'hero.subtitle':
      'SimpleTime hilft dir, deine Zeit bewusst und effizient zu nutzen. Ob Arbeit, Studium, Training oder persönliche Projekte — erfasse deine Aktivitäten klar und strukturiert, ganz ohne unnötige Komplexität.',
    'hero.cta.appstore': 'Im App Store laden',
    'hero.cta.features': 'Funktionen ansehen',
    'hero.availability': 'Kostenlos · iPhone · iPad · Mac',

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

    'screenshots.title': 'Designed, um dir nicht im Weg zu stehen.',
    'screenshots.subtitle': 'Ein Blick genügt.',
    'screenshots.track.title': 'Tracken',
    'screenshots.track.body': 'Alle deine täglichen Aktivitäten auf einen Blick.',
    'screenshots.customize.title': 'Personalisieren',
    'screenshots.customize.body': 'Aufgaben mit Farben und Kategorien individualisieren.',
    'screenshots.overview.title': 'Überblick',
    'screenshots.overview.body': 'Dein ganzer Tag in einer klaren Liste.',
    'screenshots.timeline.title': 'Timeline',
    'screenshots.timeline.body': 'Visualisiere deinen Tag Stunde für Stunde.',

    'idealfor.title': 'Für alle, die ihre Zeit wertschätzen.',
    'idealfor.body':
      'Studierende, Freelancer, Angestellte, Selbstständige, Kreative, Sportler — und alle, die verstehen wollen, wie sie ihre Zeit wirklich verbringen.',

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
      'Diese Website wird auf GitHub Pages gehostet. Beim Aufruf übermittelt dein Browser technisch bedingt eine IP-Adresse und einen User-Agent an den Server — dies ist für die Auslieferung jeder Website unvermeidbar. GitHub kann diese Informationen zu Sicherheitszwecken temporär in Server-Logfiles speichern. Wir selbst erheben, speichern und analysieren keine solchen Daten. Diese Website verwendet keine Cookies, kein Analytics, kein Tracking und keine Drittanbieter-Schriften — die Schriftart Inter wird vom eigenen Server ausgeliefert.',
    'privacy.website.hosting.title': 'Hosting',
    'privacy.website.hosting.body':
      'Anbieter: GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA. Weitere Informationen findest du in GitHubs Datenschutzerklärung unter https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement.',
    'privacy.rights.title': 'Deine Rechte',
    'privacy.rights.body':
      'Nach der DSGVO hast du das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das Recht, der Verarbeitung zu widersprechen. Du erreichst uns jederzeit unter den unten angegebenen Kontaktdaten.',
    'privacy.contact.title': 'Kontakt',
    'privacy.contact.body': 'Bei Fragen zum Datenschutz wende dich bitte an:',
    'privacy.changes.title': 'Änderungen',
    'privacy.changes.body':
      'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen in der App, auf der Website oder an rechtlichen Anforderungen Rechnung zu tragen. Die jeweils aktuelle Fassung findest du immer hier.',

    'lang.switch': 'English',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];
