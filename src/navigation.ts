/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/guest-book'

import {localePrefix, locales, pathnames} from '@/config';

import {createLocalizedPathnamesNavigation} from 'next-intl/navigation';

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix
  });