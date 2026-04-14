import { Poppins } from "next/font/google";
import { ShoppingCart, FileText, ChartBar, MapPin, Package, Bell, Fingerprint, Printer, Cardholder, FilePdf, ArrowRight } from "phosphor-react";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Marquee } from "@/components/ui/marquee";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '600', '700'] });

const beneficios = [
  {
    icono: <ShoppingCart size={28} weight="regular" className="text-white" />,
    titulo: "Pedidos y Carrito",
    descripcion:
      "Gestiona pedidos en tiempo real, optimizando el flujo de ventas y asegurando transacciones rápidas y organizadas.",
  },
  {
    icono: <Cardholder size={28} weight="regular" className="text-white" />,
    titulo: "Cobros y Facturación",
    descripcion:
      "Genera recibos y facturas en PDF, envíalos y gestiona todo el proceso de cobro integrado con SAP.",
  },
  {
    icono: <Printer size={28} weight="regular" className="text-white" />,
    titulo: "Impresión de Recibos",
    descripcion:
      "Imprime recibos directamente desde la app o en impresoras térmicas conectadas.",
  },
  {
    icono: <ChartBar size={28} weight="regular" className="text-white" />,
    titulo: "Dashboard de Ventas",
    descripcion:
      "Panel visual interactivo para comparar ventas, cobros y desempeño con gráficos intuitivos.",
  },
  {
    icono: <FileText size={28} weight="regular" className="text-white" />,
    titulo: "Cotizaciones",
    descripcion:
      "Crea y gestiona cotizaciones profesionales con revisiones y aprobaciones automáticas.",
  },
  {
    icono: <FilePdf size={28} weight="regular" className="text-white" />,
    titulo: "Catálogo Digital",
    descripcion:
      "Organiza y exporta el catálogo por categorías, comparte en PDF de forma profesional.",
  },
  {
    icono: <Bell size={28} weight="regular" className="text-white" />,
    titulo: "Notificaciones en Tiempo Real",
    descripcion:
      "Notificaciones push inmediatas sobre pedidos, cambios y alertas importantes.",
  },
  {
    icono: <Fingerprint size={28} weight="regular" className="text-white" />,
    titulo: "Seguridad Biométrica",
    descripcion:
      "Acceso seguro mediante Face ID o huella digital, protegiendo datos sensibles.",
  },
  {
    icono: <Package size={28} weight="regular" className="text-white" />,
    titulo: "Consignaciones",
    descripcion:
      "Administra productos en consignación con control de stock y facturación automática.",
  },
  {
    icono: <MapPin size={28} weight="regular" className="text-white" />,
    titulo: "Geolocalización",
    descripcion:
      "Actualiza ubicaciones de clientes en tiempo real para optimizar la logística.",
  },
];

type Beneficio = {
  icono: React.ReactNode;
  titulo: string;
  descripcion: string;
};

const BeneficioCard = ({ icono, titulo, descripcion }: Beneficio) => {
  return (
    <div className="relative w-72 h-full flex flex-col p-6 bg-white rounded-3xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group flex-shrink-0">
      {/* Icon Container */}
      <div className="w-12 h-12 bg-[#1a3d59] rounded-2xl flex items-center justify-center flex-shrink-0 mb-4 group-hover:scale-110 transition-transform">
        {icono}
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#1a3d59] transition-colors">
        {titulo}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 flex-grow leading-relaxed mb-4">
        {descripcion}
      </p>

      {/* Hover indicator */}
      <div className="flex items-center gap-2 text-[#1a3d59] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Más info</span>
        <ArrowRight size={14} />
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#1a3d59]/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

function Beneficios() {
  return (
    <section className={`w-full py-20 px-6 bg-white ${poppins.className}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <BlurFade delay={0.1} inView>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1a3d59]">
              ✨ Funcionalidades principales
            </span>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Todo lo que necesitas para gestionar tu negocio
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Herramientas completas integradas directamente con SAP Business One para optimizar ventas, cotizaciones, cobros e inventario.
            </p>
          </BlurFade>
        </div>

        {/* Marquee de beneficios */}
        <div className="relative mb-12">
          <Marquee pauseOnHover className="[--duration:40s]">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="pr-6">
                <BeneficioCard {...beneficio} />
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] mt-6">
            {beneficios.map((beneficio, index) => (
              <div key={`reverse-${index}`} className="pr-6">
                <BeneficioCard {...beneficio} />
              </div>
            ))}
          </Marquee>

          {/* Gradientes para fade effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white to-transparent"></div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-gray-100">
          <BlurFade delay={0.5} inView>
            <Link
              href="/beneficios"
              className="inline-flex items-center gap-2 bg-[#1a3d59] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2a5a7a] transition-colors text-lg"
            >
              Ver todos los beneficios
              <ArrowRight size={20} />
            </Link>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;