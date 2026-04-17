import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function useTranslations(lang: Lang) {
  return function t(key: UIKey, vars?: Record<string, string | number>): string {
    const dict = ui[lang] ?? ui[defaultLang];
    let str: string = (dict as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
      }
    }
    return str;
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean === '/' ? '/' : clean;
  return clean === '/' ? '/de/' : `/de${clean}`;
}

// Map of EN path → DE path for pages with localized URL slugs.
// Add new page pairs here when creating additional localized routes.
const EN_TO_DE: Record<string, string> = {
  '/': '/de/',
  '/imprint/': '/de/impressum/',
  '/privacy/': '/de/datenschutz/',
  '/contact/': '/de/kontakt/',
};

const DE_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(EN_TO_DE).map(([en, de]) => [de, en]),
);

export function getAltLangPath(currentLang: Lang, currentPath: string): string {
  if (currentLang === 'de') return DE_TO_EN[currentPath] ?? '/';
  return EN_TO_DE[currentPath] ?? '/de/';
}

export const APP_STORE_URL =
  'https://apps.apple.com/us/app/simpletime-time-tracker/id6755532037';

export const CONTACT_EMAIL = 'contact@simple-time.app';
