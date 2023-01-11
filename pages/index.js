import Head from 'next/head';

// Delete the following line if you are using Emotion
import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p>
        Get started by editing <code>pages/index.js</code>
      </p>
    </main>

    <footer className={styles.footer}>Powered by Yannick Cornaille</footer>
  </div>
);

export default Home;
