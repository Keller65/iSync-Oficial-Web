import { ShoppingCart, Cardholder, Printer, ChartBar, MapPin, FilePdf, Bell, Fingerprint, FileText, Package, Users, MagnifyingGlass, ArchiveBox, Tag } from "phosphor-react";
import Navbar from "@/components/app/Navbar";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { BlurFade } from "@/components/ui/blur-fade";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

const beneficios = [
	{
		icono: <ShoppingCart size={24} weight="regular" className="text-white" />,
		titulo: "Pedidos y Carrito de Compras",
		descripcion: "Gestiona pedidos de clientes en tiempo real, optimizando el flujo de ventas y asegurando transacciones rápidas y organizadas desde la app móvil.",
	},
	{
		icono: <Cardholder size={24} weight="regular" className="text-white" />,
		titulo: "Cobros y Facturación en PDF",
		descripcion: "Genera recibos y facturas digitales en PDF, envíalos y gestiona todo el proceso de cobro integrado con el ERP.",
	},
	{
		icono: <Printer size={24} weight="regular" className="text-white" />,
		titulo: "Impresión de Recibos",
		descripcion: "Imprime recibos directamente desde la app o en impresoras térmicas conectadas, facilitando entregas y comprobantes en el punto de venta.",
	},
	{
		icono: <ChartBar size={24} weight="regular" className="text-white" />,
		titulo: "Dashboard Comparativo",
		descripcion: "Panel visual interactivo para comparar ventas, cobros y desempeño, con reportes claros y gráficos intuitivos para mejores decisiones.",
	},
	{
		icono: <MapPin size={24} weight="regular" className="text-white" />,
		titulo: "Rutas y Geolocalización",
		descripcion: "Crea rutas optimizadas y actualiza ubicaciones en tiempo real, mejorando la logística y el seguimiento de operaciones comerciales.",
	},
	{
		icono: <FilePdf size={24} weight="regular" className="text-white" />,
		titulo: "Exportación de Catálogo",
		descripcion: "Organiza y exporta el catálogo por categorías, compártelo en PDF y presenta tus productos de forma profesional.",
	},
	{
		icono: <Bell size={24} weight="regular" className="text-white" />,
		titulo: "Notificaciones Push",
		descripcion: "Mantén informados a clientes y equipo con notificaciones push inmediatas y personalizadas en tiempo real sobre pedidos y alertas importantes.",
	},
	{
		icono: <Fingerprint size={24} weight="regular" className="text-white" />,
		titulo: "Seguridad Biométrica",
		descripcion: "Acceso seguro y rápido mediante Face ID o huella digital, protegiendo la información sensible de tu empresa.",
	},
	{
		icono: <FileText size={24} weight="regular" className="text-white" />,
		titulo: "Cotizaciones",
		descripcion: "Crea y gestiona cotizaciones profesionales, permite revisiones y aprobaciones para convertirlas fácilmente en pedidos.",
	},
	{
		icono: <Package size={24} weight="regular" className="text-white" />,
		titulo: "Consignaciones",
		descripcion: "Administra productos en consignación, lleva control de stock consignado y facilita la facturación y retorno según acuerdos.",
	},
	{
		icono: <Users size={24} weight="regular" className="text-white" />,
		titulo: "Cartera de Clientes",
		descripcion: "Los usuarios pueden acceder fácilmente a su cartera de clientes asignados, permitiendo un seguimiento personalizado y eficiente.",
	},
	{
		icono: <MagnifyingGlass size={24} weight="regular" className="text-white" />,
		titulo: "Vista Detallada de Productos",
		descripcion: "Accede a información completa de cada producto, incluyendo especificaciones, precios y disponibilidad, para tomar decisiones informadas.",
	},
	{
		icono: <ArchiveBox size={24} weight="regular" className="text-white" />,
		titulo: "Control de Inventarios",
		descripcion: "Monitorea el stock en tiempo real por almacén, reduce errores y optimiza la reposición de productos para mantener la disponibilidad.",
	},
	{
		icono: <Tag size={24} weight="regular" className="text-white" />,
		titulo: "Precios y Descuentos",
		descripcion: "Modifica precios de productos directamente desde la app y muestra descuentos por cantidad para facilitar la venta.",
	},
];

export default function Beneficios() {
	return (
		<>
			<Head>
				<title>Beneficios de iSync | Optimiza ventas y cotizaciones con SAP Business One</title>
				<meta name="description" content="Descubre los beneficios de iSync: app móvil integrada directamente con SAP Business One que optimiza cotizaciones, ventas y cobranzas. Reduce errores operacionales, acelera procesos y sincroniza datos en tiempo real." />
				<meta name="keywords" content="iSync, SAP Business One, app móvil ERP, integración SAP, gestión de ventas, inventarios en tiempo real, fuerza de ventas" />
				<link rel="canonical" href="https://isynchn.com/beneficios" />
				<meta property="og:title" content="Beneficios de iSync" />
				<meta property="og:description" content="Optimiza ventas, inventarios y clientes con iSync, la app móvil integrada con SAP Business One y ERP." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://isynchn.com/beneficios" />
				<meta property="og:image" content="https://isynchn.com/og-beneficios.png" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Beneficios de iSync" />
				<meta name="twitter:description" content="Conoce cómo iSync mejora la gestión empresarial con integración ERP." />
				<meta name="twitter:image" content="https://isynchn.com/og-beneficios.png" />
			</Head>

			<Navbar />

			{/* Hero */}
			<section className={`bg-[#1a3d59] pt-32 pb-20 px-6 text-center ${poppins.className}`}>
				<div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.15)_0,rgba(0,163,255,0)_60%)] pointer-events-none" />
				<BlurFade delay={0.1} inView>
					<span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">
						App móvil · SAP Business One
					</span>
				</BlurFade>
				<BlurFade delay={0.2} inView>
					<h1 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4 tracking-tight leading-tight">
						Todo lo que iSync <br className="hidden sm:block" /> hace por tu negocio
					</h1>
				</BlurFade>
				<BlurFade delay={0.3} inView>
					<p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
						Una app móvil conectada a tu ERP que pone el control de ventas, inventario
						y cobranza en manos de tu equipo, en tiempo real.
					</p>
				</BlurFade>
			</section>

			{/* Video highlight */}
			<section className={`bg-white py-16 px-6 ${poppins.className}`}>
				<div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
					{/* Phone mockup */}
					<div className="flex-shrink-0 flex justify-center">
						<div className="relative w-[240px] sm:w-[280px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gray-900 bg-black">
							<div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-10 flex items-center justify-center">
								<span className="w-16 h-1.5 rounded-full bg-gray-700" />
							</div>
							<video
								src="https://pub-faf12f6f8bc0463ca7cbe2ceb0bb13eb.r2.dev/Anuncio%20iSync.mp4"
								loop
								autoPlay
								muted
								playsInline
								controls={false}
								className="w-full pt-6"
							/>
						</div>
					</div>

					{/* Text */}
					<div className="flex-1 text-center lg:text-left">
						<span className="text-xs font-semibold tracking-widest text-[#1a3d59] uppercase">
							Míralo en acción
						</span>
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4 tracking-tight leading-tight">
							Diseñada para la fuerza <br className="hidden sm:block" /> de ventas en campo
						</h2>
						<p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
							iSync combina velocidad, simplicidad y potencia para que tus vendedores
							puedan gestionar pedidos, cobrar y consultar inventario desde su celular,
							sin depender de la oficina.
						</p>
						<div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
							{["Pedidos", "Cobranza", "Inventario", "Rutas", "Dashboard"].map(tag => (
								<span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Benefits grid */}
			<section className={`bg-gray-50 py-16 px-6 ${poppins.className}`}>
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-2">
							{beneficios.length} funciones pensadas para tu operación
						</h2>
						<p className="text-gray-500 text-sm max-w-md mx-auto">
							Cada módulo está integrado con SAP Business One para que nunca pierdas el hilo de tu negocio.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{beneficios.map((beneficio, index) => (
							<BlurFade key={index} delay={0.05 * (index % 8)} inView>
								<div className="bg-white rounded-3xl p-5 h-full flex flex-col gap-3 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
									<div className="w-10 h-10 bg-[#1a3d59] rounded-xl flex items-center justify-center flex-shrink-0">
										{beneficio.icono}
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 text-sm mb-1 leading-snug">
											{beneficio.titulo}
										</h3>
										<p className="text-gray-500 text-xs leading-relaxed">
											{beneficio.descripcion}
										</p>
									</div>
								</div>
							</BlurFade>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className={`py-20 px-6 bg-[#1a3d59] text-center ${poppins.className}`}>
				<div className="max-w-xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
						¿Listo para optimizar tu operación?
					</h2>
					<p className="text-white/60 text-sm mb-8">
						Contáctanos y un asesor te ayudará a configurar iSync para tu equipo.
					</p>
					<a
						href="/contacto"
						className="inline-flex items-center gap-2 bg-white text-[#1a3d59] px-7 py-3 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
					>
						Hablar con un asesor
					</a>
				</div>
			</section>
		</>
	);
}
