import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { BlurFade } from '@/components/ui/blur-fade';
import { CheckCircle, ArrowRight } from 'phosphor-react';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

const SYSTEMS = [
  {
    name: 'SAP Business One',
    src: '/assets/images/SAP-B1.png',
    description: 'Integración nativa con SAP B1',
  },
  {
    name: 'CONTPAQi',
    src: '/assets/images/contpaqi.png',
    description: 'Compatible con CONTPAQi',
  },
];

const features = [
  'Sincronización en tiempo real',
  'Sin errores manuales',
  'Sin duplicados de datos',
  'Actualizaciones automáticas',
];

export default function Sistemas() {
  return (
    <section className={`w-full py-20 px-6 bg-gradient-to-b from-white to-gray-50 ${poppins.className}`}>
      <style jsx>{`
        @keyframes flow {
          0% { opacity: 0; transform: translateX(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(20px); }
        }
        .animate-flow {
          animation: flow 2s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px -5px rgba(26, 61, 89, 0.3); }
          50% { box-shadow: 0 0 30px -5px rgba(26, 61, 89, 0.6); }
        }
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <BlurFade delay={0.1} inView>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1a3d59]">
              🔗 Integración ERP
            </span>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Conectado directamente con tu ERP
            </h2>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              iSync actúa como el puente inteligente entre tu equipo y SAP Business One. Sincronización automática en tiempo real, sin errores, sin duplicados.
            </p>
          </BlurFade>
        </div>

        {/* Main Integration Diagram */}
        <div className="relative mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
            {/* Left System */}
            <BlurFade delay={0.4} inView>
              <div className="w-full lg:w-1/3 flex justify-end px-4">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
                  <div className="relative bg-white border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs">
                    <div className="flex items-center justify-center h-24 mb-4">
                      <Image
                        src={SYSTEMS[0].src}
                        alt={SYSTEMS[0].name}
                        width={180}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-sm font-medium text-gray-700">
                      {SYSTEMS[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Center - iSync Logo with animated connection */}
            <BlurFade delay={0.5} inView>
              <div className="relative w-full lg:w-1/3 flex justify-center py-8 lg:py-0">
                {/* Animated lines background */}
                <div className="absolute -inset-8 hidden lg:block">
                  <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(26, 61, 89, 0.2)" />
                        <stop offset="50%" stopColor="rgba(26, 61, 89, 0.4)" />
                        <stop offset="100%" stopColor="rgba(26, 61, 89, 0.2)" />
                      </linearGradient>
                    </defs>
                    <line x1="0" y1="100" x2="200" y2="100" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="5,5" />
                  </svg>
                </div>

                <div className="relative">
                  <div className="pulse-glow absolute inset-0 rounded-3xl"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-[#1a3d59] to-[#2a5a7a] rounded-3xl flex items-center justify-center border-2 border-white shadow-2xl">
                    <Image
                      src="/iSync_logo_white.svg"
                      alt="iSync"
                      width={60}
                      height={60}
                      className="w-14 h-14"
                    />
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Right System */}
            <BlurFade delay={0.6} inView>
              <div className="w-full lg:w-1/3 flex justify-start px-4">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
                  <div className="relative bg-white border border-gray-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs">
                    <div className="flex items-center justify-center h-24 mb-4">
                      <Image
                        src={SYSTEMS[1].src}
                        alt={SYSTEMS[1].name}
                        width={180}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center text-sm font-medium text-gray-700">
                      {SYSTEMS[1].description}
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map((feature, index) => (
            <BlurFade key={index} delay={0.7 + index * 0.1} inView>
              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 hover:border-[#1a3d59]/20 transition-all">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} weight="fill" className="text-green-600" />
                </div>
                <span className="text-sm font-medium text-gray-900">{feature}</span>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* CTA Section */}
        <BlurFade delay={1.1} inView>
          <div className="bg-gradient-to-r from-[#1a3d59] to-[#2a5a7a] rounded-3xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ¿Listo para integrar tu ERP con iSync?
            </h3>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Conecta tu empresa directamente con SAP Business One y optimiza todas tus operaciones comerciales en tiempo real.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-[#1a3d59] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Solicitar integración
              <ArrowRight size={20} />
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}