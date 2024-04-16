import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/Home.module.css";
import HeaderContainer from "../components/Header/HeaderContainer";
import Head from "next/head";
import '../styles/globals.css'
import Script from 'next/script'
import process  from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

function MyApp({ Component, pageProps }) {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
    const ADSENSE_ACCOUNT = process.env.NEXT_PUBLIC_ADSENSE_ACCOUNT
    return (
      <div>
          <Head>
              <title>Poe Builds Cost</title>
              <meta
                  name="description"
                  content={
                     "Help to calculate POE(Path of Exile) build cost."
                  }
              />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta property="og:title" content={"Poe Builds Cost"} />
              <meta property="og:type" content="website" />
              <meta property="og:url" content={"https://buildscost.com"} />
              <meta property="og:article:author" content="BuildsCost" />
              <meta name="google-adsense-account" content={ADSENSE_ACCOUNT} />
              <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              />
              <script
                  dangerouslySetInnerHTML={{
                      __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GA_MEASUREMENT_ID}', {
                        page_path: window.location.pathname,
                      });
                    `,
                  }}
              />
          </Head>


          <HeaderContainer />
          <hr style={{margin:"0"}}/>
          <Component {...pageProps} className={styles.root}/>
      </div>
  )
}

export default MyApp
