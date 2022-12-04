import '../styles/globals.css'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Download from '../components/Download'
import Footer from '../components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }) {
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