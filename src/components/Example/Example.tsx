import { useTranslations } from 'next-intl';

const Example = () => {
  const t = useTranslations();

  return (
    <h1>
      {t.rich('home.welcome', {
        link: (chunks) => <a href="https://nextjs.org">{chunks}</a>,
      })}
    </h1>
  );
};

export default Example;
