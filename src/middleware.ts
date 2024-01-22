import {localePrefix, locales, pathnames} from './config';
// export {auth as middlleware }from '@/lib/auth';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames,
  localePrefix
});

export const config = {
  matcher: [
    '/',
    '/about/:path*',
    '/(fr|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};