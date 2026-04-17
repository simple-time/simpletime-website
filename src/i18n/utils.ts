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

export function getAltLangPath(currentLang: Lang, currentPath: string): string {
  if (currentLang === 'de') {
    const stripped = currentPath.replace(/^\/de/, '') || '/';
    return stripped;
  }
  return currentPath === '/' ? '/de/' : `/de${currentPath}`;
}

export const APP_STORE_URL =
  'https://apps.apple.com/us/app/simpletime-time-tracker/id6755532037';

export const CONTACT_EMAIL = 'contact@simple-time.app';
