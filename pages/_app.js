import GlobalContextFunction from '../context/globalcontext'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalContextFunction>
        <Component {...pageProps} />
      </GlobalContextFunction>
    </>
  )
}
