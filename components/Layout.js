import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import styles from "@styles/layout.module.css";
import Showcase from "./Showcase";
import { useRouter } from "next/dist/client/router";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <Header />
      {router.pathname === "/" && <Showcase />}
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
