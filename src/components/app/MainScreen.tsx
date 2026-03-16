import Image from 'next/image'
import { BlurFade } from "@/components/ui/blur-fade"

function MainScreen() {
  return (
    <main className="h-[100vh] flex flex-col gap-4 items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      <div className="gap-4 mb-[390px] flex flex-col items-center justify-center">
        <div className='size-[46px] flex items-center justify-center rounded-xl bg-[#1a3d59]'>
          <Image
            src="/iSync_logo_white.svg"
            alt="Logo iSync"
            width={36}
            height={36}
            className="w-9 h-9"
          />
        </div>

        <section className="flex flex-col gap-4 items-center justify-center">
          <BlurFade delay={0.25} inView>
            <h2 className="text-2xl text-center font-bold tracking-[-3.8px] sm:text-5xl">
              Lo mejor de iSync ahora, <br /> en la web.
            </h2>
          </BlurFade>
        </section>
      </div>

      <Image
        src="/assets/images/isync-web.png"
        alt="iSync Mobile App"
        width={900}
        height={400}
        priority
        quality={100}
        className='aspect-auto absolute -bottom-12 -ml-40'
      />

      <picture className="absolute right-36 bottom-[-290px] overflow-hidden flex">
        <Image
          src="/assets/images/isync-app.png"
          alt="iSync Mobile App"
          width={340}
          height={700}
          priority
          quality={100}
        />
      </picture>
    </main>
  )
}

export default MainScreen