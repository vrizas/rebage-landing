import Head from 'next/head'
import { gsap } from "gsap"
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rebage - Teman Terbaik untuk Memilah Sampah Demi Lingkungan Sehat dan Nyaman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Rebage adalah platform aplikasi bank sampah anorganik digital yang bertujuan untuk meningkatkan kesadaran masyarakat akan penting nya pengkategorian sampah melalui pemanfaatan kategori 3R (Reduce, Reuse, dan Recycle)." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
       
      </main>
    </div>
  )
}
