import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/app/Navbar"
import { Poppins } from "next/font/google"
import {
  ChartBar,
  ShoppingCart,
  Cardholder,
  Users,
  ArrowRight,
  Globe,
  CloudArrowUp,
  Lock,
  MapPin
} from "phosphor-react"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] })

const features = [
  {
    icon: <ChartBar size={28} weight="regular" className="text-white" />,
    titulo: "Dashboard en tiempo real",
    descripcion:
      "Visualiza ventas, cobros y desempeño de tu equipo desde un panel centralizado, con gráficos actualizados al instante.",
  },
  {
    icon: <ShoppingCart size={28} weight="regular" className="text-white" />,
    titulo: "Gestión de pedidos",
    descripcion:
      "Crea, revisa y aprueba pedidos directamente desde el navegador, sincronizados con SAP Business One sin intervención manual.",
  },
  {
    icon: <Cardholder size={28} weight="regular" className="text-white" />,
    titulo: "Cobranza",
    descripcion:
      "Controla cuentas por cobrar, genera comprobantes en PDF y administra el flujo de caja desde cualquier dispositivo.",
  },
  {
    icon: <MapPin size={28} weight="regular" className="text-white" />,
    titulo: "Rutas y geolocalización",
    descripcion:
      "Monitorea la ubicación de tu fuerza de ventas y visualiza rutas asignadas directamente desde el portal web.",
  },
  {
    icon: <Users size={28} weight="regular" className="text-white" />,
    titulo: "Administración de usuarios",
    descripcion:
      "Gestiona roles, permisos y carteras de clientes de cada vendedor desde un solo lugar, con control total de accesos.",
  },
  {
    icon: <Globe size={28} weight="regular" className="text-white" />,
    titulo: "Acceso desde cualquier lugar",
    descripcion:
      "Sin instalaciones ni configuraciones. Accede a toda la plataforma desde cualquier navegador y dispositivo.",
  },
  {
    icon: <CloudArrowUp size={28} weight="regular" className="text-white" />,
    titulo: "Sincronización automática",
    descripcion:
      "Cada acción realizada en la web o en la app móvil se refleja en tiempo real en tu ERP, sin duplicados ni retrasos.",
  },
  {
    icon: <Lock size={28} weight="regular" className="text-white" />,
    titulo: "Seguridad empresarial",
    descripcion:
      "Acceso protegido con autenticación segura y permisos por rol para mantener la información de tu empresa resguardada.",
  },
]

export default function ISyncWebPage() {
  return (
    <>
      <Head>
        <title>iSync Web | Gestión empresarial integrada con SAP Business One</title>
        <meta
          name="description"
          content="iSync Web es el portal web que complementa la app móvil de iSync, integrando pedidos, cobranza, dashboard y sincronización en tiempo real con SAP Business One."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://isynchn.com/isync-web" />
      </Head>

      <Navbar />

      {/* Hero */}
      <section className="bg-[#1a3d59] min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden pt-28 pb-0">
        <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.18)_0,rgba(0,163,255,0)_60%)] pointer-events-none" />

        <div className={`flex flex-col items-center text-center px-6 max-w-3xl mx-auto gap-6 ${poppins.className}`}>
          <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">
            Nuevo producto
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
            iSync Web <br className="hidden sm:block" />
            ahora en el navegador.
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-xl leading-relaxed">
            El complemento web de iSync que conecta a tu equipo con&nbsp;
            <span className="text-white/90 font-medium">SAP Business One</span> desde
            cualquier dispositivo. Sin instalar nada, en tiempo real.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacto"
              className="bg-white text-[#1a3d59] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors duration-200 flex items-center gap-2"
            >
              Solicitar acceso <ArrowRight size={16} weight="bold" />
            </Link>
            <Link
              href="/beneficios"
              className="border border-white/25 text-white/80 px-6 py-2.5 rounded-full text-sm font-medium hover:border-white/40 hover:bg-white/10 transition-colors duration-200"
            >
              Ver beneficios
            </Link>
          </div>
        </div>

        {/* Web screenshot */}
        <div className="relative mt-12 w-full max-w-5xl mx-auto px-6">
          <Image
            src="/assets/images/isync-web.png"
            alt="iSync Web dashboard"
            width={1200}
            height={700}
            priority
            quality={100}
            className="w-full"
          />
        </div>
      </section>

      {/* Features grid */}
      <section className={`py-20 px-6 bg-white ${poppins.className}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              Todo lo que necesitas, en un solo lugar
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              iSync Web centraliza las operaciones clave de tu empresa con una interfaz
              limpia, rápida y siempre conectada a tu ERP.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-3xl p-5 flex flex-col gap-3 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-11 h-11 bg-[#1a3d59] rounded-xl flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.titulo}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{feature.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAP B1 highlight */}
      <section className={`py-16 px-6 bg-gray-50 ${poppins.className}`}>
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="text-xs font-semibold tracking-widest text-[#1a3d59] uppercase">
              Integración nativa
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4 leading-tight tracking-tight">
              Conectado directamente a <br />SAP Business One
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              iSync Web actúa como la capa visual y operativa de tu ERP. Cada pedido,
              cobro o actualización de inventario que realizas en la web se sincroniza
              automáticamente con SAP Business One, eliminando la doble captura y los
              errores manuales.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-[#1a3d59] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#2a5a7a] transition-colors duration-200"
            >
              Hablar con un asesor <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 flex flex-col items-center gap-6 w-full max-w-xs">
              <div className="size-16 flex items-center justify-center rounded-2xl bg-[#1a3d59] p-3">
                <Image src="/iSync_logo_white.svg" alt="iSync" width={40} height={40} />
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <Image
                src="/assets/images/SAP-B1.png"
                alt="SAP Business One"
                width={160}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 px-6 bg-[#1a3d59] text-center ${poppins.className}`}>
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            ¿Listo para modernizar tu operación?
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Contáctanos y un asesor te mostrará cómo iSync Web puede transformar
            la gestión de tu empresa.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white text-[#1a3d59] px-7 py-3 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
          >
            Solicitar acceso <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </section>
    </>
  )
}
