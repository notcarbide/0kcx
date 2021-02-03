import Head from 'next/head'
import { Global } from '@emotion/react'
import xw, { cx } from 'xwind'

import '../styles/base.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>0k.cx - My Projects</title>
      </Head>
      <Global
        //keyframes + ring and shadow classes variables  ... to global styles
        styles={xw`XWIND_GLOBAL`}
      />
      <div css={xw`bg-gray-900`}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
