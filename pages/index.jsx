import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Destak from "../components/News/Destak";
import Cards from "../components/News/Cards";
import Link from "../components/Link/Link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [destak, setDestak] = useState([]);
  const [ready, setReady] = useState(false);
  const [totalDisplayNews, setTotalDisplayNews] = useState(10);
  const [destakTitle, setDestakTitle] = useState("Breaking News");
  const router = useRouter();

  const getHeadlines = (category) => {
    setReady(false);
    setTotalDisplayNews(10);

    axios
      .get(`/api/getHeadlines?category=${category}`)
      .then(({ data }) => {
        const firstArticle = data.articles.shift();
        setDestak(firstArticle);
        setArticles(data.articles);

        setReady(true);

        const title = category ? `Latest ${category} news` : "Breaking News";
        setDestakTitle(title);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const { category } = router.query;
    const param = category;
    getHeadlines(param);
  }, [router]);

  return (
    <>
      <Head>
        <title>Anderson News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main className={styles.main}>
        <section>
          <article className={styles.content}>
            <ReactPlaceholder
              type="media"
              rows={4}
              ready={ready}
              className={styles.placeholder}
            >
              <Destak {...destak} title={destakTitle} />
            </ReactPlaceholder>
          </article>
        </section>

        <section>
          {articles.map((article, index) =>
            index < totalDisplayNews ? (
              <article key={index} className={styles.content}>
                <ReactPlaceholder
                  type="media"
                  rows={3}
                  ready={ready}
                  className={styles.placeholder}
                >
                  <Link
                    href={article.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Cards
                      variant={index % 2 != 0 ? "reverse" : ""}
                      {...article}
                    />
                  </Link>
                </ReactPlaceholder>
              </article>
            ) : (
              ""
            )
          )}
        </section>

        <section className={styles.loadMoreSection}>
          {totalDisplayNews <= articles.length ? (
            <Link
              href=""
              onClick={(e) => {
                e.preventDefault();
                setTotalDisplayNews((prev) => prev + 10);
              }}
              className="secondary"
            >
              Load more
            </Link>
          ) : (
            ""
          )}
        </section>
      </main>
    </>
  );
}
