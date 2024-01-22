import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'fr'] as const;

export const pathnames = {
  '/': '/',
  '/guest-book': {
    en: '/guest-book',
    fr: '/livre-d-or'
  },
  '/coding-activity': {
    en: '/coding-activity',
    fr: '/statistiques-de-codage'
  },
  '/sounds': {
    en: '/sounds',
    fr: '/sons'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = 'never';

export type AppPathnames = keyof typeof pathnames;