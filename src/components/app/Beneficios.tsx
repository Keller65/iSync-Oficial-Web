import { Nata_Sans } from "next/font/google";
import {
  ShoppingCart, Globe, CloudArrowUp,
  FileText, ChartBar, MapPin, Package, Bell, Fingerprint, Printer, Cardholder, FilePdf
} from "phosphor-react";

const nataSans = Nata_Sans({ subsets: ["latin"] });

const beneficios = [
  {
    icono: <ShoppingCart size={32} weight="regular" className="text-white" />,
    titulo: "Pedidos y Carrito de Compras",
    descripcion:
      "Gestiona pedidos de clientes en tiempo real, optimizando el flujo de ventas y asegurando transacciones rápidas y organizadas desde la app móvil.",
  },
  {
    icono: <Cardholder size={28} weight="regular" className="text-white" />,
    titulo: "Cobranza",
    descripcion:
      "Controla cuentas por cobrar, genera comprobantes en PDF y administra el flujo de caja desde cualquier dispositivo.",
  },
  {
    icono: <Printer size={32} weight="regular" className="text-white" />,
    titulo: "Impresión de Recibos",
    descripcion:
      "Imprime recibos directamente desde la app o en impresoras térmicas conectadas, facilitando entregas y comprobantes en el punto de venta.",
  },
  {
    icono: <ChartBar size={32} weight="regular" className="text-white" />,
    titulo: "Dashboard Comparativo",
    descripcion:
      "Panel visual interactivo para comparar ventas, cobros y desempeño, con reportes claros y gráficos intuitivos para mejores decisiones.",
  },
  {
    icono: <MapPin size={32} weight="regular" className="text-white" />,
    titulo: "Rutas y Geolocalización",
    descripcion:
      "Crea rutas optimizadas y actualiza ubicaciones en tiempo real, mejorando la logística y el seguimiento de operaciones comerciales.",
  },
  {
    icono: <FilePdf size={32} weight="regular" className="text-white" />,
    titulo: "Exportación de Catálogo de Productos",
    descripcion:
      "Organiza y exporta el catálogo por categorías, compártelo en PDF y presenta tus productos de forma profesional.",
  },
  {
    icono: <Bell size={32} weight="regular" className="text-white" />,
    titulo: "Notificaciones Push (FCM)",
    descripcion:
      "Mantén informados a clientes y equipo con notificaciones push inmediatas y personalizadas en tiempo real sobre pedidos, promociones y alertas importantes.",
  },
  {
    icono: <Fingerprint size={28} weight="regular" className="text-white" />,
    titulo: "Seguridad Biométrica",
    descripcion:
      "Acceso seguro y rápido mediante Face ID o huella digital, protegiendo la información sensible de tu empresa.",
  },
  {
    icono: <FileText size={32} weight="regular" className="text-white" />,
    titulo: "Cotizaciones",
    descripcion:
      "Crea y gestiona cotizaciones profesionales, permite revisiones y aprobaciones para convertirlas fácilmente en pedidos.",
  },
  {
    icono: <Package size={32} weight="regular" className="text-white" />,
    titulo: "Consignaciones",
    descripcion:
      "Administra productos en consignación, lleva control de stock consignado y facilita la facturación y retorno según acuerdos.",
  },
  {
    icono: <Globe size={28} weight="regular" className="text-white" />,
    titulo: "Acceso desde cualquier lugar",
    descripcion:
      "Sin instalaciones ni configuraciones. Accede a toda la plataforma desde cualquier navegador y dispositivo. (solo web)",
  },
  {
    icono: <CloudArrowUp size={28} weight="regular" className="text-white" />,
    titulo: "Sincronización automática",
    descripcion:
      "Cada acción realizada en la web o en la app móvil se refleja en tiempo real en tu ERP, sin duplicados ni retrasos.",
  },
];

function Beneficios() {
  return (
    <section className={`w-full py-20 px-4 sm:px-6 md:px-8 lg:px-12 ${nataSans.className}`}>
      <div className="grid max-w-5xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {beneficios.map((feature, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-3xl p-5 flex flex-col gap-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="w-11 h-11 bg-[#1a3d59] rounded-xl flex items-center justify-center flex-shrink-0">
              {feature.icono}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{feature.titulo}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{feature.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Beneficios;