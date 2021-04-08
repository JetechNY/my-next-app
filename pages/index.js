import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Trypto Fan</title>
        <meta />
      </Head>

      <h3 classname={styles.title}>
        <Link href="/restaurants">
          <a>::Restaurant List::</a>
        </Link>
      </h3>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
