import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'
import { gsap } from 'gsap'

export default function Header() {
    const showHamburgerMenuHandler = (event) => {
        const nav = document.querySelector('#navigation')
        nav.style.display = 'flex'
        gsap.from(nav, { opacity: 0 })
        gsap.to(nav, { opacity: 1, duration: 0.3 })
    }

    const hideHamburgerMenuHandler = (event) => {
        const isMobile = window.screen.width < 768
        if (isMobile) {
            const nav = document.querySelector('#navigation')
            gsap.from(nav, { opacity: 1 })
            gsap.to(nav, { opacity: 0, duration: 0.3 })
            setTimeout(() => {
                nav.style.display = 'none'
            }, 300)
        }
    }

    return (
        <header className="sticky top-0 z-50 bg-[#DBFFE0] flex items-center justify-between px-4 py-3 lg:px-14 lg:py-4">
            <section className="flex items-center gap-10">
                <Link href="/">
                    <Image src={logo} alt="" className="w-[80px] lg:w-[100px]" />
                </Link>
                <nav className="absolute left-0 top-0 bg-primary text-white text-center hidden flex-col font-medium h-screen w-full lg:static lg:text-black lg:h-fit lg:w-fit lg:text-left lg:flex lg:flex-row lg:items-center lg:gap-6 lg:bg-transparent" id="navigation"> 
                    <div className="text-right px-4 py-3 lg:hidden">
                        <button onClick={hideHamburgerMenuHandler}>
                            <svg width="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                            </svg>
                        </button>
                    </div>
                    <a href="#features" className="py-2 px-4 lg:p-0" onClick={hideHamburgerMenuHandler}>Fitur Rebage</a>
                    <a href="#" className="py-2 px-4 lg:p-0" onClick={hideHamburgerMenuHandler}>Kampanye</a>
                    <a href="#about-us" className="py-2 px-4 lg:p-0" onClick={hideHamburgerMenuHandler}>Tentang Kami</a>
                    <a href="#" className="py-2 px-4 lg:p-0" onClick={hideHamburgerMenuHandler}>TrashNews</a>
                    <div className="flex justify-center mt-5">
                        <a href="#" className="flex items-center gap-2 bg-success text-white font-medium py-2 px-4 rounded-md w-fit lg:hidden" onClick={hideHamburgerMenuHandler}>
                            <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
                            </svg>
                            Masuk
                        </a>
                    </div>
                </nav>
            </section>
            <section className="flex items-center">
                <button className="lg:hidden" onClick={showHamburgerMenuHandler}>
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </button>
                <a href="#" className="items-center gap-2 bg-success text-white font-medium py-2 px-4 rounded-md hidden lg:flex">
                    <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/>
                    </svg>
                    Masuk
                </a>
            </section>
        </header>
    )
}