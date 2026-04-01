import Head from 'next/head'
import Navbar from '@/components/app/Navbar'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

function TerminosYCondiciones() {
  const sections = [
    {
      title: 'Descripción de Servicios',
      content: 'iSync proporciona soluciones de software empresarial integradas con SAP Business One, incluyendo portal web, aplicaciones móviles, sincronización automática, reportes y análisis en tiempo real.'
    },
    {
      title: 'Registro, Cuentas y Seguridad',
      content: 'Debe proporcionar información exacta, mantener credenciales confidenciales y notificar inmediatamente cualquier acceso no autorizado. iSync implementa autenticación segura.'
    },
    {
      title: 'Suscripciones y Pagos',
      content: 'Los servicios se facturan según el plan elegido. El cliente autoriza cargos y es responsable de impuestos. iSync puede modificar precios con 30 días de notificación.'
    },
    {
      title: 'Cancelación y Reembolsos',
      content: 'Puede cancelar su suscripción en cualquier momento. La cancelación es efectiva al final del período actual. Las políticas de reembolso se detallan en el contrato comercial.'
    },
    {
      title: 'Propiedad Intelectual',
      content: 'Todo software, código y diseño son propiedad de iSync. Está prohibido copiar, modificar, descompilar o distribuir sin autorización.'
    },
    {
      title: 'Datos, Privacidad y Seguridad',
      content: 'iSync implementa encriptación y medidas de seguridad. Conservamos datos mientras sea necesario y cumplimos leyes de protección de datos. No somos responsables por pérdida causada por negligencia del usuario.'
    },
    {
      title: 'Soporte Técnico',
      content: 'Soporte disponible vía portal online, email y teléfono. Los tiempos de respuesta dependen del plan contratado.'
    },
    {
      title: 'Jurisdicción y Ley Aplicable',
      content: 'Estos Términos se rigen por las leyes de Honduras. Se aceptan los tribunales competentes de Honduras para resolver disputas.'
    }
  ]

  return (
    <>
      <Head>
        <title>Términos y Condiciones — iSync</title>
        <meta name="description" content="Términos y condiciones legales de iSync Web. Información sobre licencia, servicios, seguridad y privacidad de datos." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://isynchn.com/terminos-y-condiciones" />
      </Head>
      <Navbar />

      <main className={`${poppins.className}`}>
        {/* Hero */}
        <section className="bg-[#1a3d59] pt-32 pb-20 px-6 text-center">
          <div className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.15)_0,rgba(0,163,255,0)_60%)] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative">
            <span className="text-xs font-semibold tracking-widest text-blue-300 uppercase">
              Documentos Legales
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mt-3 mb-4 tracking-tight leading-tight">
              Términos y Condiciones
            </h1>
            <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Última actualización: 31 de marzo, 2026. Conoce las reglas y políticas de uso de los servicios de iSync.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16 px-6">
          <article className="max-w-4xl mx-auto">
            {/* Introducción */}
            <div className="mb-12 bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Estos Términos y Condiciones constituyen un acuerdo legal entre usted (cliente, usuario o persona que accede al servicio) e <strong>iSync ERP</strong> respecto al uso de nuestros servicios de software empresarial, incluyendo iSync Web, iSync Mobile y todas sus integraciones.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Al acceder, utilizar o contratar cualquiera de nuestros servicios, usted acepta íntegramente estos Términos.</strong> Si no está de acuerdo, le solicitamos que no use nuestros servicios.
              </p>
            </div>

            {/* Secciones principales */}
            <div className="space-y-6">
              {sections.map((section, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {idx + 1}. {section.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* EULA Section */}
            <div className="mt-6 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                9. Acuerdo de Licencia de Usuario Final (EULA)
              </h2>

              <div className="space-y-4 text-gray-600 text-sm">
                <p>
                  Este EULA es un acuerdo legal entre usted e iSync respecto al software iSync. Al instalar o usar el software, usted acepta estar sujeto a estos términos.
                </p>

                <div className="pl-4 border-l-2 border-gray-200 space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">9.1 Concesión de Licencia</h3>
                    <p>iSync le otorga una licencia revocable, no exclusiva e intransferible para descargar, instalar y usar el software conforme a estos Términos.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">9.2 Restricciones</h3>
                    <p>Está prohibido vender, alquilar, modificar, descompilar, remover avisos de propiedad intelectual o transferir la licencia sin autorización.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">9.3 Modificaciones</h3>
                    <p>iSync se reserva el derecho de modificar, suspender o descontinuar el software con o sin previo aviso.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">9.4 Terminación</h3>
                    <p>Puede terminar esta licencia dejando de usar el software. iSync puede terminarla si incumple estos Términos.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">9.5 Exención de Garantías</h3>
                    <p className="text-red-600 font-semibold">EL SOFTWARE SE PROPORCIONA "TAL CUAL" Y "SEGÚN DISPONIBILIDAD"</p>
                    <p className="mt-2">iSync no ofrece garantías expresas o implícitas. El usuario asume todo riesgo derivado del uso.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Limitación de Responsabilidad */}
            <div className="mt-6 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                10. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-600 text-sm font-semibold mb-3">
                EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY:
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                iSync no será responsable por daños indirectos, incidentales o especiales. La responsabilidad total no excederá lo pagado en los últimos 12 meses. iSync no es responsable por interrupción de servicio, pérdida de datos o pérdida de ingresos.
              </p>
            </div>

            {/* Contacto */}
            <div className="mt-6 bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-100">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">¿Preguntas?</h2>
              <div className="space-y-2 text-gray-600 text-sm">
                <p><strong>Soporte:</strong> desarrollo@solteci.com</p>
                <p className="pt-2">Si tiene preguntas sobre estos Términos, contacte con nuestro equipo legal.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-[#1a3d59] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#2a5a7a] transition-colors duration-200"
              >
                Hablar con un asesor
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default TerminosYCondiciones