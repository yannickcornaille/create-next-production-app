import { Trans } from 'next-i18next';

const Example = () => {
  return (
    <h1>
      <Trans i18nKey="home.welcome">
        Welcome to production-grade <a href="https://nextjs.org">Next.js</a>{' '}
        starter kit!
      </Trans>
    </h1>
  );
};

export default Example;
