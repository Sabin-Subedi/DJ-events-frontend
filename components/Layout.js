import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import styles from "/styles/layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <Header />

      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Dj Events | Find the hottest parties",
  keywords: "dj events, dj, events, music, music events, music festival",
  description: "Find the latest DJ and other musical events",
};
