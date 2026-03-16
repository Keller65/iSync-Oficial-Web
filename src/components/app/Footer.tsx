import { FacebookLogo, InstagramLogo, WhatsappLogo, CheckCircle, Envelope, Phone } from "phosphor-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const whatsappCita = "https://wa.me/50495955397?text=Agendar%20Cita";
  const whatsappCotizar = "https://wa.me/50495955397?text=Cotizar";

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Columna 1: Logo y Contacto */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 p-1 bg-[#1a3d59] rounded-xl flex items-center justify-center shadow-lg shadow-[#1a3d59]/20">
                <Image
                  src="/iSync_logo_white.svg"
                  alt="Logo iSync"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">iSync</h2>
                <p className="text-xs text-gray-500 tracking-wider">SOLUTIONS</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Envelope size={18} className="text-[#1a3d59]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-800">desarrollo@solteci.com</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Envelope size={18} className="text-[#1a3d59]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-800">mercadeo@solteci.com</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Phone size={18} className="text-[#1a3d59]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Teléfono</p>
                  <p className="text-sm font-medium text-gray-800">+504 9595-5397</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#1a3d59] transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/beneficios" className="text-gray-500 hover:text-[#1a3d59] transition-colors text-sm">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-500 hover:text-[#1a3d59] transition-colors text-sm">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones" className="text-gray-500 hover:text-[#1a3d59] transition-colors text-sm">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: CTA y Redes */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#1a3d59] to-[#2a5a7a] rounded-2xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                Potencia tus ventas ahora
              </h3>
              <p className="text-sm text-white/80 mb-4">
                Contáctanos y lleva tu negocio al siguiente nivel
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  target="_blank"
                  href={whatsappCotizar}
                  className="flex-1 px-5 py-2.5 bg-white text-[#1a3d59] rounded-full text-sm font-semibold text-center hover:bg-gray-100 transition-colors"
                >
                  Cotizar
                </Link>
                <Link
                  target="_blank"
                  href={whatsappCita}
                  className="flex-1 px-5 py-2.5 border border-white/30 rounded-full text-sm font-medium text-center hover:bg-white/10 transition-colors"
                >
                  Agendar Cita
                </Link>
              </div>
            </div>

            {/* Redes Sociales */}
            <div>
              <p className="text-sm text-gray-500 mb-3">Síguenos en redes</p>
              <div className="flex gap-3">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61585131111294"
                  aria-label="Facebook"
                  className="p-2.5 bg-gray-100 rounded-full hover:bg-[#1a3d59] hover:text-white transition-all duration-300"
                >
                  <FacebookLogo size={20} />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/isynchn/"
                  aria-label="Instagram"
                  className="p-2.5 bg-gray-100 rounded-full hover:bg-[#1a3d59] hover:text-white transition-all duration-300"
                >
                  <InstagramLogo size={20} />
                </Link>
                <Link
                  target="_blank"
                  href="https://wa.me/50495955397"
                  aria-label="Whatsapp"
                  className="p-2.5 bg-gray-100 rounded-full hover:bg-[#1a3d59] hover:text-white transition-all duration-300"
                >
                  <WhatsappLogo size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Disponibilidad */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle size={20} weight="fill" className="text-green-500" />
              <span>Disponible en Android</span>
            </div>

            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} <span className="font-semibold text-gray-600">iSync</span>. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}