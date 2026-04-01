"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { BlurFade } from "@/components/ui/blur-fade"

function MainScreen() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const webY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const appY = useTransform(scrollYProgress, [0, 1], [0, 70])

  return (
    <main ref={ref} className="h-[100vh] flex flex-col gap-4 items-center justify-center relative overflow-hidden pt-28 sm:pt-36 bg-[#1a3d59]">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.18)_0,rgba(0,163,255,0)_60%,rgba(0,163,255,0)_100%)]" />

      {/* Hero content */}
      <div className="flex flex-col items-center gap-5 px-6 text-center w-full max-w-2xl mx-auto">

        {/* Headline */}
        <BlurFade delay={0.2} inView>
          <h1 className="text-2xl mb-[450px] sm:text-4xl lg:text-5xl font-bold tracking-[-3px] leading-12 text-white">
            Lo mejor de iSync ahora, <br className="hidden sm:block" /> en la web.
          </h1>
        </BlurFade>

        {/* Subtitle */}
        <BlurFade delay={0.3} inView>
          <p className="text-sm sm:text-base text-white/60 max-w-sm leading-relaxed">
            Gestiona pedidos, cobranza y analíticas integradas con&nbsp;
            <span className="font-medium text-white/90">SAP Business One</span>,
            sincronizado en tiempo real desde cualquier lugar.
          </p>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.4} inView>
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
            <Link
              href="/contacto"
              className="w-full sm:w-auto bg-white text-[#1a3d59] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              Solicitar acceso
            </Link>
            <Link
              href="/beneficios"
              className="w-full sm:w-auto border border-white/25 text-white/80 px-5 py-2.5 rounded-full text-sm font-medium hover:border-white/40 hover:bg-white/10 transition-colors duration-200"
            >
              Ver funciones
            </Link>
          </div>
        </BlurFade>
      </div>

      {/* Web screenshot — parallax más lento */}
      <motion.div
        style={{ y: webY }}
        className="aspect-auto absolute -bottom-12 -ml-40 pointer-events-none"
      >
        <Image
          src="/assets/images/isync-web.png"
          alt="iSync Web App"
          width={900}
          height={400}
          priority
          quality={100}
        />
      </motion.div>

      {/* Mobile screenshot — parallax más rápido */}
      <motion.div
        style={{ y: appY }}
        className="absolute right-36 bottom-[-290px] overflow-hidden pointer-events-none"
      >
        <Image
          src="/assets/images/isync-app.png"
          alt="iSync Mobile App"
          width={340}
          height={700}
          priority
          quality={100}
        />
      </motion.div>

    </main>
  )
}

export default MainScreen
