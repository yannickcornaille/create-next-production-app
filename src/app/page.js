import Image from 'next/image';

// Delete the following line if you are using Emotion
import styles from './page.module.css';
import nextJsLogo from '@/assets/next.svg';

const Page = () => {
  // const { t } = useTranslation('common');

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
          Welcome to production-grade <a href="https://nextjs.org">Next.js</a>{' '}
          starter kit!
        </h1>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Page;
