"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Nata_Sans } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nataSans = Nata_Sans({ subsets: ['latin'] })

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/isync-web", label: "iSync Web" },
    { href: "/beneficios", label: "Beneficios" },
    { href: "/contacto", label: "Contacto" },
    { href: "/terminos-y-condiciones", label: "Términos" },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${nataSans.className}`}>
      {/* Desktop floating navbar */}
      <div className="hidden md:flex justify-center px-4 pt-3">
        <nav className={`flex items-center gap-8 px-8 py-3 rounded-2xl transition-all duration-300 ${scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border border-gray-200/50'
            : 'bg-transparent'
          }`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src={scrolled ? "/iSync_logo.svg" : "/iSync_logo_white.svg"}
              alt="Logo iSync"
              width={40}
              height={40}
              quality={100}
              priority
              className="w-10 h-10 transition-all duration-300"
            />
          </Link>

          {/* Divider */}
          <span className={`w-px h-4 flex-shrink-0 transition-colors duration-300 ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`} />

          {/* Nav links - centered */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${scrolled
                      ? isActive ? 'text-[#1a3d59]' : 'text-gray-600 hover:text-[#1a3d59]'
                      : isActive ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Divider */}
          <span className={`w-px h-4 flex-shrink-0 transition-colors duration-300 ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`} />

          {/* CTA */}
          <Link
            target="_blank"
            href="https://pub-278f0e440b3f482d95cd6960542cb828.r2.dev/iSync.pdf"
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${scrolled
                ? 'bg-[#1a3d59] text-white hover:bg-[#2a5a7a]'
                : 'bg-white/20 text-white hover:bg-white/30'
              }`}
          >
            Descargar info
          </Link>
        </nav>
      </div>

      {/* Mobile navbar */}
      <div className={`md:hidden transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm'
          : 'bg-transparent'
        }`}>
        <div className="flex justify-between items-center h-14 px-4">
          <Link href="/" className="flex items-center">
            <Image
              src={scrolled ? "/iSync_logo.svg" : "/iSync_logo_white.svg"}
              alt="Logo iSync"
              width={24}
              height={24}
              className="w-6 h-6 transition-all duration-300"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-1.5 transition-colors duration-200 ${scrolled ? 'text-gray-600' : 'text-white/80'
              }`}
            aria-label="Toggle menu"
          >
            <svg className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white/95 backdrop-blur-md px-4 py-3 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive
                      ? 'text-[#1a3d59]'
                      : 'text-gray-600 hover:text-[#1a3d59]'
                    }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              target="_blank"
              href="https://pub-278f0e440b3f482d95cd6960542cb828.r2.dev/iSync.pdf"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-[#1a3d59] text-white px-4 py-2 rounded-full text-sm font-medium mt-2"
            >
              Descargar información
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
