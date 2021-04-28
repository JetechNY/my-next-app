import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title> Trypto Fan</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="This is a app to order all your fast food in one place"/>

      </Head>

      <h5 className={styles.title}>
        <Link href="/restaurants">
          <a>::Restaurant List::</a>
        </Link>
      </h5>

  {/* <br/>
<video width="540" height="320" controls >
  <source src="https://www.youtube.com/watch?v=4NVdAT1ox9w" />
    Your video cannot load
</video> */}

      <ArticleList articles={articles}/>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by: Jetech Inc
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
