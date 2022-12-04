import Head from 'next/head'
import Image from 'next/image'
import rebageAppHome from '../public/images/rebage-app-home.png'
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
          <article className="lg:w-1/2">
            <h1 className="text-3xl text-success font-bold lg:text-5xl lg:leading-[3.6rem]">
              <span className="text-black relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-[#00BC1F] after:to-[#3cff1aab] after:w-[102%] after:h-[18px] after:rounded-lg after:z-[-1]">
                Teman Terbaik
              </span><br /> 
              untuk Memilah Sampah<br />
              Demi Lingkungan Sehat<br />
              dan Nyaman.
            </h1>
            <div className="mt-5 text-light-gray font-medium leading-snug">
              <p className="mb-1">Kurangi Penumpukan Sampah dengan Memilah Sampah Di sekitarmu bersama Rebage!</p>
              <p>Temukan kampanye bebas sampah terbaik dan dapatkan hadiah menarik disini.</p>
            </div>
            <a href="https://www.instagram.com/rebage.id/" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex gap-2 items-center font-medium bg-success text-white py-2 px-4 rounded-md">
              <svg width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
              Ikuti Kami di Instagram
            </a>
          </article>
          <div>
            <Image src={rebageAppHome} alt="Rebage App" />
          </div>
        </section>
        <section className="relative iove flex gap-8 flex-col text-center lg:gap-12 lg:text-left lg:flex-row items-center px-4 pt-10 pb-14 lg:pt-16 lg:pb-20 lg:px-14 bg-gradient-to-r from-[#0E9F56] to-primary after:content-['#TentangRebage'] after:absolute after:bottom-0 after:left-3 after:text-[#FFFFFF33] after:font-bold after:text-3xl after:lg:text-6xl" id="about-us">
          <div className="lg:w-1/3">
            <Image src={recycle} alt="Recycle" className="rounded-md w-full" />
          </div>
          <article className="lg:w-2/3 text-white">
            <h2 className="font-bold text-3xl">Tentang Kami</h2>
            <div className="mt-5">
              <p className="mb-4">Rebage adalah platform aplikasi bank sampah anorganik digital yang bertujuan untuk meningkatkan kesadaran masyarakat akan penting nya pengkategorian sampah melalui pemanfaatan kategori 3R (Reduce, Reuse, dan Recycle).</p>
              <p>Rebage hadir dengan impian besar, Rebage mengajak kalian untuk mengambil langkah pertama dalam mendaur ulang, dimulai dengan memilah sampah di lingkungan kalian. Rebage berharap mendapat banyak dukungan dari berbagai pihak, agar mimpi besar ini dapat segera terwujud.</p>
            </div>
          </article>
        </section>
        <section className="flex flex-col items-center px-4 py-10 lg:px-14" id="features">
          <h2 className="text-3xl lg:text-4xl font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:bg-gradient-to-r after:from-[#00BC1F] after:to-[#3cff1aab] after:w-[102%] after:h-[12px] after:rounded-lg after:z-[-1]">Kenapa Rebage?</h2>
          <div className="grid gap-5 mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="shadow-rebage py-6 px-5 rounded-lg">
              <div className="flex justify-center">
                <div className="bg-primary text-white h-[75px] w-[75px] flex items-center justify-center rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-1/2">
                    <path fill="currentColor" d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z"/>
                  </svg>
                </div>  
              </div>
              <div className="mt-6">
                <h3 className="font-bold mb-2">Deteksi Sampah</h3>
                <p>Temukan sampah disekitar tempat tinggalmu melalui kamera berbasis AI</p>
              </div>
            </div>
            <div className="shadow-rebage py-6 px-5 rounded-lg">
              <div className="flex justify-center">
                <div className="bg-primary text-white h-[75px] w-[75px] flex items-center justify-center rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-1/2">
                    <path fill="currentColor" d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/>
                  </svg>
                </div>  
              </div>
              <div className="mt-6">
                <h3 className="font-bold mb-2">Estimasi Harga</h3>
                <p>Dapatkan estimasi harga sampah terbaik dan dapatkan reward setiap harinya</p>
              </div>
            </div>
            <div className="shadow-rebage py-6 px-5 rounded-lg">
              <div className="flex justify-center">
                <div className="bg-primary text-white h-[75px] w-[75px] flex items-center justify-center rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-1/2">
                    <path fill="currentColor" d="M206.7 45.1C224.2 17 255 0 288 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L315 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM461.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L352 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32l96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L68 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L214 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3-51.5 82.4c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0c-53.1 0-96.1-43.2-95.8-96.4c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z"/>
                  </svg>
                </div>  
              </div>
              <div className="mt-6">
                <h3 className="font-bold mb-2">Solusi Sampah Dengan 3R</h3>
                <p>Dapatkan rekomendasi pengolahan sampah dengan 3R (Reduce, Reuse, Recycle)</p>
              </div>
            </div>
            <div className="shadow-rebage py-6 px-5 rounded-lg">
              <div className="flex justify-center">
                <div className="bg-primary text-white h-[75px] w-[75px] flex items-center justify-center rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-1/2">
                    <path fill="currentColor" d="M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z"/>
                  </svg>
                </div>  
              </div>
              <div className="mt-6">
                <h3 className="font-bold mb-2">Lokasi Pengepul</h3>
                <p>Dapatkan rekomendasi pengepul terdekat berdasarkan lokasi tempat tinggalmu</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
