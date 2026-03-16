"use client"

import Image from 'next/image'
import { useState } from 'react'
import { Nata_Sans } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nataSans = Nata_Sans({ subsets: ['latin'] })

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/beneficios", label: "Beneficios" },
    { href: "/contacto", label: "Contacto" },
    { href: "/terminos-y-condiciones", label: "Términos" },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 transition-all duration-300 ${nataSans.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/iSync_logo.svg"
                alt="Logo iSync"
                width={36}
                height={36}
                className="w-9 h-9"
              />
            </div>
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? 'text-[#1a3d59]' 
                        : 'text-gray-600 hover:text-[#1a3d59]'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#1a3d59] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`} />
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="hidden md:flex items-center">
            <Link 
              target="_blank"
              href="https://pub-278f0e440b3f482d95cd6960542cb828.r2.dev/iSync.pdf" 
              className="bg-[#1a3d59] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#2a5a7a] transition-colors duration-200"
            >
              Descargar Informacion
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 border-t border-gray-100">
            <ul className="space-y-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block py-2 transition-colors duration-200 text-sm font-medium ${
                        isActive 
                          ? 'text-[#1a3d59]' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link target="_blank" href="https://wa.me/50495955397?text=Cotizar" className="w-full bg-[#1a3d59] text-white px-4 py-2 rounded-full text-sm font-medium">
                Descargar Informacion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar