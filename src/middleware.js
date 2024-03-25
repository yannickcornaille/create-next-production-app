import createMiddleware from 'next-intl/middleware';

import { locales, defaultLocale } from '@/utils/locales';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  const shouldHandle =
    pathname === '/' ||
    new RegExp(`^/(${locales.join('|')})(/.*)?$`).test(
      request.nextUrl.pathname
    );
  if (!shouldHandle) {
    return;
  }

  return intlMiddleware(request);
}
