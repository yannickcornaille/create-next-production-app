import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';

const NotFoundPage = () => {
  const t = useTranslations();

  return (
    <>
      <h2>{t('notFound.title')}</h2>
      <p>{t('notFound.text')}</p>
      <Link href="/">{t('notFound.backToHome')}</Link>
    </>
  );
};

export default NotFoundPage;
