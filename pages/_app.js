import '../styles/globals.css'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Download from '../components/Download'
import Footer from '../components/Footer'
import { useEffect } from 'react'

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
      <div id="loading-bar"></div>
      <Header />
      <Component {...pageProps} />
      <Download />
      <Footer />
    </div>
  )
}