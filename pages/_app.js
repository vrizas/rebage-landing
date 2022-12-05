/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Download from '../components/Download'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const loadingBar = document.querySelector('#loading-bar')
    loadingBar.style.opacity = 1;
    loadingBar.classList.add('w-full')
    setTimeout(() => {
      loadingBar.style.opacity = 0;
    }, 500)
  })

  return (
    <div className={`${inter.variable} font-sans`}>
      <Head>
        <title>Rebage - Teman Terbaik untuk Memilah Sampah Demi Lingkungan Sehat dan Nyaman</title>
        <meta name="title" content="Rebage - Teman Terbaik untuk Memilah Sampah Demi Lingkungan Sehat dan Nyaman" />
        <meta name="description" content="Rebage adalah platform aplikasi bank sampah anorganik digital yang bertujuan untuk meningkatkan kesadaran masyarakat akan penting nya pengkategorian sampah melalui pemanfaatan kategori 3R (Reduce, Reuse, dan Recycle)." />
        <meta name="keywords" content="Rebage, Recycle, Jual Sampah, Bank Sampah" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rebage.vercel.app/" />
        <meta property="og:title" content="Rebage - Teman Terbaik untuk Memilah Sampah Demi Lingkungan Sehat dan Nyaman" />
        <meta property="og:description" content="Rebage adalah platform aplikasi bank sampah anorganik digital yang bertujuan untuk meningkatkan kesadaran masyarakat akan penting nya pengkategorian sampah melalui pemanfaatan kategori 3R (Reduce, Reuse, dan Recycle)." />
        <meta property="og:image" content="/site.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rebage.vercel.app/" />
        <meta property="twitter:title" content="Rebage - Teman Terbaik untuk Memilah Sampah Demi Lingkungan Sehat dan Nyaman" />
        <meta property="twitter:description" content="Rebage adalah platform aplikasi bank sampah anorganik digital yang bertujuan untuk meningkatkan kesadaran masyarakat akan penting nya pengkategorian sampah melalui pemanfaatan kategori 3R (Reduce, Reuse, dan Recycle)." />
        <meta property="twitter:image" content="/site.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
        <noscript>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" type="text/css" />
        </noscript>
      </Head>

      <div id="loading-bar"></div>
      <Header />
      <Component {...pageProps} />
      <Download />
      <Footer />
    </div>
  )
}