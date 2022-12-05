import Head from 'next/head'
import Image from 'next/image'
import logomark from '../public/logomark.svg'

export default function Campaign() {
  return (
    <div>
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
      </Head>
      <main>
        <section className="flex gap-5 flex-col text-center items-center px-4 py-10 lg:px-14 bg-gradient-to-r from-[#0E9F56] to-primary">
          <h2 className="text-white text-3xl font-bold">Jelajahi Kampanye Disini!</h2>
          <div className="flex w-1/2">
            <input type="search" placeholder="Cari kampanye apa pun..." className="py-2 px-4 rounded-tl-md rounded-bl-md w-full" />
            <button className="py-2 px-3 rounded-tl-none rounded-bl-none rounded-tr-md rounded br-md bg-[#D9D9D9] hover:bg-[#cfcaca]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18">
                    <path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/>
                </svg>
            </button>
          </div>
        </section>
        <section className="flex gap-8 flex-col px-4 py-10 lg:px-14">
          <div className="flex gap-3 flex-col">
            <div className="flex justify-between">
                <h3 className="text-xl font-bold">Sedang Berlangsung!</h3>
                <div className="flex items-center gap-3 text-white">
                    <button className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14">
                            <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                        </svg>
                    </button>
                    <button className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14">
                            <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="bg-[#E6EAEE] rounded-lg py-14 px-8 text-center flex flex-col gap-3 items-center justify-center">
              <div>
                <Image src={logomark} alt="Rebage Logo" width="50" priority />
              </div>
              <div className="text-sm">Kampanye tidak tersedia</div>
            </div>
          </div>
          <div className="flex gap-3 flex-col">
            <div className="flex justify-between">
                <h3 className="text-xl font-bold">Kegiatan Akan Datang!</h3>
                <div className="flex items-center gap-3 text-white">
                    <button className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14">
                            <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                        </svg>
                    </button>
                    <button className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14">
                            <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="bg-[#E6EAEE] rounded-lg py-14 px-8 text-center flex flex-col gap-3 items-center justify-center">
              <div>
                <Image src={logomark} alt="Rebage Logo" width="50" priority />
              </div>
              <div className="text-sm">Kampanye tidak tersedia</div>
            </div>
          </div>
          <div className="flex gap-3 flex-col">
            <div className="flex justify-between">
                <h3 className="text-xl font-bold">Sudah Selesai</h3>
                <div className="flex items-center gap-3 text-white">
                    <button className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14">
                            <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                        </svg>
                    </button>
                    <button className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14">
                            <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="bg-[#E6EAEE] rounded-lg py-14 px-8 text-center flex flex-col gap-3 items-center justify-center">
              <div>
                <Image src={logomark} alt="Rebage Logo" width="50" priority />
              </div>
              <div className="text-sm">Kampanye tidak tersedia</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}