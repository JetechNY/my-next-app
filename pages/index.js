import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
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

      <ArticleList articles={articles}/>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by: Jetech
        </a>
      </footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
