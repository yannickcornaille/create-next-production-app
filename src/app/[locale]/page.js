import PropTypes from 'prop-types';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './page.module.css';
import nextJsLogo from '@/assets/next.svg';

const Page = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={nextJsLogo}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1>
          {t.rich('home.welcome', {
            link: (chunks) => <a href="https://nextjs.org">{chunks}</a>,
          })}
        </h1>
        <p>
          {t.rich('home.start', {
            code: (chunks) => <code>{chunks}</code>,
          })}
        </p>
      </main>
      <footer className={styles.footer}>{t('footer')}</footer>
    </div>
  );
};

Page.propTypes = {
  params: PropTypes.shape({
    locale: PropTypes.string,
  }),
};

export default Page;
