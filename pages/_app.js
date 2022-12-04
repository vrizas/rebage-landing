import '../styles/globals.css'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Download from '../components/Download'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <Header />
      <Component {...pageProps} />
      <Download />
    </div>
  )
}