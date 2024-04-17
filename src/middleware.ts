import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

import { locales, defaultLocale } from '@/utils/locales';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export default function middleware(request: NextRequest) {
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
