import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Template({ children, title }) {
  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Selocate App Travel" />
        <link rel="shortcut icon" href="/images/logo.svg" type="image/x-icon" />
      </Head>
      <Header />
      {children}
      <Footer />
    </section>
  )
}
