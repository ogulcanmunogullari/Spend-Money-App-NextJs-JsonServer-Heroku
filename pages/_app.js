import "../styles/globals.css"
import Head from "next/head"
import { Store } from "../redux/index"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Head>
        <title>Spend Money</title>
        <meta name="description" content="Fullstack Spend Money App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
