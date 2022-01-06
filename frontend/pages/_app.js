
import Head from 'next/head'
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components'
import Layout from 'components/Layout'
import theme from 'lib/theme'

import 'normalize.css'
import 'styles/globals.css'

const defSeo = {
  title: 'Open Hadist Search',
  description: 'Open Hadist Search, because i want to'
}

function HadistApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>{defSeo.title}</title>
      <meta name="description" content={defSeo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap" rel="stylesheet" />

    </Head>
    <DefaultSeo
      title={defSeo.title}
      description={defSeo.description}
      openGraph={{
        title: defSeo.title,
        type: 'website',
        site_name: defSeo.title,
        description: defSeo.description,
      }}
    />
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
}

export default HadistApp
