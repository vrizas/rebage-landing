export default function TrashNews() {
  return (
    <div>
      <main>
        <section className="text-center px-4 py-10 lg:px-14 bg-gradient-to-r from-[#0E9F56] to-primary">
          <h2 className="text-white text-3xl font-bold">
            Temukan Berbagai Macam <br />
            Berita Menarik Disini
          </h2>
        </section>
        <section className="flex gap-8 flex-col px-4 py-10 lg:px-14">
          <div className="flex gap-3 flex-col">
            <div className="flex justify-between">
                <h3 className="text-xl font-bold">Berita Lingkungan</h3>
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
              <div className="text-5xl font-bold text-[#3FA86D99]">Coming Soon</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}