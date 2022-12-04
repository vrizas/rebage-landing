import Image from 'next/image'
import googlePlayBadge from '../public/images/google-play-badge.png'
import appStoreBadge from '../public/images/app-store-badge.png'
import rebageAppDetector from '../public/images/rebage-app-detector.png'

export default function Download() {
    return (
        <section className="flex gap-8 flex-col text-center lg:text-left lg:flex-row items-center lg:justify-between px-4 pt-10 lg:px-14">
          <article className="lg:pb-10 lg:w-1/2">
            <h2 className="text-3xl font-bold lg:text-5xl lg:leading-[3.6rem]">Segera hadir di App Store dan Play Store.</h2>
            <p className="mt-5 text-light-gray font-medium">Yuk, pilah sampah disekitar mu! #BersamaRebage</p>
            <div className="mt-8 flex gap-5">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src={googlePlayBadge} width="170" alt="Get it on Google Play" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src={appStoreBadge} width="170" alt="Get it on App Store" />
              </a>
            </div>
          </article>
          <div>
            <Image src={rebageAppDetector} alt="Rebage App (Detector)" />
          </div>
        </section>
    )
}