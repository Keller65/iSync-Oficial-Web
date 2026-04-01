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
      <div className="hidden md:flex justify-center px-6 pt-4">
        <nav className={`flex items-center gap-6 px-4 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md border border-gray-200/80'
            : 'bg-white/10 backdrop-blur-sm border border-white/20'
        }`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 pr-2">
            <Image
              src={scrolled ? "/iSync_logo.svg" : "/iSync_logo_white.svg"}
              alt="Logo iSync"
              width={28}
              height={28}
              className="w-7 h-7 transition-all duration-300"
            />
            <span className={`text-sm font-semibold transition-colors duration-300 ${scrolled ? 'text-[#1a3d59]' : 'text-white'}`}>
              iSync
            </span>
          </Link>

          {/* Divider */}
          <span className={`w-px h-4 transition-colors duration-300 ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`} />

          {/* Nav links */}
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? isActive ? 'text-[#1a3d59]' : 'text-gray-500 hover:text-[#1a3d59]'
                    : isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full transition-colors duration-300 ${scrolled ? 'bg-[#1a3d59]' : 'bg-white'}`} />
                )}
              </Link>
            )
          })}

          {/* Divider */}
          <span className={`w-px h-4 transition-colors duration-300 ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`} />

          {/* CTA */}
          <Link
            target="_blank"
            href="https://pub-278f0e440b3f482d95cd6960542cb828.r2.dev/iSync.pdf"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
              scrolled
                ? 'bg-[#1a3d59] text-white hover:bg-[#2a5a7a]'
                : 'bg-white text-[#1a3d59] hover:bg-white/90'
            }`}
          >
            Descargar info
          </Link>
        </nav>
      </div>

      {/* Mobile navbar */}
      <div className={`md:hidden transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center h-16 px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={scrolled ? "/iSync_logo.svg" : "/iSync_logo_white.svg"}
              alt="Logo iSync"
              width={28}
              height={28}
              className="w-7 h-7 transition-all duration-300"
            />
            <span className={`text-sm font-semibold transition-colors duration-300 ${scrolled ? 'text-[#1a3d59]' : 'text-white'}`}>
              iSync
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white/80 hover:bg-white/10'
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
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-4">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'bg-[#1a3d59]/10 text-[#1a3d59]'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <Link
                target="_blank"
                href="https://pub-278f0e440b3f482d95cd6960542cb828.r2.dev/iSync.pdf"
                className="block w-full text-center bg-[#1a3d59] text-white px-4 py-2.5 rounded-full text-sm font-medium"
              >
                Descargar información
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
