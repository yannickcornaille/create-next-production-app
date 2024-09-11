import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { locales, defaultLocale } from '@/i18n/locales';

export const routing = defineRouting({ locales, defaultLocale });

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
