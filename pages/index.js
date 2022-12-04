import Head from 'next/head'
import Image from 'next/image'
import rebageHomeApp from '../public/images/rebage-app-home.png'
import recycle from '../public/images/recycle.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rebage - Teman Terbaik untuk Memilah Sampah Demi Lingkungan Sehat dan Nyaman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Rebage adalah platform aplikasi bank sampah anorganik digital yang bertujuan untuk meningkatkan kesadaran masyarakat akan penting nya pengkategorian sampah melalui pemanfaatan kategori 3R (Reduce, Reuse, dan Recycle)." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex gap-8 flex-col text-center lg:text-left lg:flex-row items-center lg:justify-between px-4 py-10 lg:px-14">
          <div className="lg:w-1/2">
            <h2 className="text-3xl text-success font-bold lg:text-5xl lg:leading-[3.6rem]">
              <span className="text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-[#00BC1F] after:to-[#3cff1aab] after:w-[102%] after:h-[18px] after:rounded-lg after:z-[-1]">
                Teman Terbaik
              </span><br /> 
              untuk Memilah Sampah<br />
              Demi Lingkungan Sehat<br />
              dan Nyaman.
            </h2>
            <div className="mt-5 text-gray font-medium leading-snug">
              <p className="mb-1">Kurangi Penumpukan Sampah dengan Memilah Sampah Di sekitarmu bersama Rebage!</p>
              <p>Temukan kampanye bebas sampah terbaik dan dapatkan hadiah menarik disini.</p>
            </div>
            <a href="https://www.instagram.com/rebage.id/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex gap-2 items-center font-medium bg-success text-white py-2 px-4 rounded-md">
              <svg width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
              Ikuti Kami di Instagram
            </a>
          </div>
          <div>
            <Image src={rebageHomeApp} alt="Rebage App" />
          </div>
        </section>
        <section className="relative iove flex gap-8 flex-col text-center lg:gap-12 lg:text-left lg:flex-row items-center px-4 pt-10 pb-14 lg:pt-16 lg:pb-20 lg:px-14 bg-gradient-to-r from-[#0E9F56] to-primary after:content-['#TentangRebage'] after:absolute after:bottom-0 after:left-3 after:text-[#FFFFFF33] after:font-bold after:text-3xl after:lg:text-6xl" id="about-us">
          <div className="lg:w-1/3">
            <Image src={recycle} alt="Recycle" className="rounded-md w-full" />
          </div>
          <div className="lg:w-2/3 text-white">
            <h3 className="font-bold text-3xl">Tentang Kami</h3>
            <div className="mt-5">
              <p className="mb-4">Rebage adalah platform aplikasi bank sampah anorganik digital yang bertujuan untuk meningkatkan kesadaran masyarakat akan penting nya pengkategorian sampah melalui pemanfaatan kategori 3R (Reduce, Reuse, dan Recycle).</p>
              <p>Rebage hadir dengan impian besar, Rebage mengajak kalian untuk mengambil langkah pertama dalam mendaur ulang, dimulai dengan memilah sampah di lingkungan kalian. Rebage berharap mendapat banyak dukungan dari berbagai pihak, agar mimpi besar ini dapat segera terwujud.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
