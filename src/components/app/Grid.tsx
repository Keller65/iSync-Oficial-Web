import { Poppins } from 'next/font/google'
import Image from 'next/image'

const PoppinsFont = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

function Grid() {
  return (
    <section className='p-6 w-full flex flex-col items-center justify-center h-fit'>
      <div className='flex flex-col lg:w-[680px] gap-4 w-full'>
        <div className='w-full lg:w-[680px] h-auto lg:h-[460px] rounded-4xl bg-gray-100 p-6 overflow-hidden'>
          <div className='flex flex-col gap-2'>
            <h4 style={PoppinsFont.style} className='font-bold text-2xl lg:text-3xl tracking-[-1.6px]'>Sincronización en Tiempo Real</h4>
            <h4 style={PoppinsFont.style} className='font-normal text-sm lg:text-[15px] tracking-[-0.3px]'>
              Cada pedido, cotización y cobro se sincroniza automáticamente con SAP Business One. Sin retrasos, sin errores manuales, sin duplicados.
            </h4>
          </div>

          <Image
            src='/assets/images/cobros-module.png'
            alt='Grid'
            width={648}
            height={276}
            className='mt-6 rounded-2xl w-full lg:w-[90%] m-auto'
          />
        </div>

        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='w-full lg:w-1/2 bg-gray-100 rounded-4xl h-auto lg:h-[600px] overflow-hidden p-6'>
            <div className='flex flex-col gap-2'>
              <h4 style={PoppinsFont.style} className='font-bold text-2xl lg:text-3xl tracking-[-1.6px]'>Gestión Completa de Ventas</h4>
              <h4 style={PoppinsFont.style} className='font-normal text-sm lg:text-[15px] tracking-[-0.3px]'>
                Cotizaciones, pedidos, cobranza, inventario y clientes desde móvil y web. Todo conectado a SAP, todo en tiempo real.
              </h4>
            </div>

            <Image
              src='/assets/images/analitycs-module.png'
              alt='Grid'
              width={648}
              height={276}
              className='mt-6 rounded-2xl w-full m-auto'
            />
          </div>

          <div className='w-full lg:w-1/2 bg-gray-100 rounded-4xl h-auto lg:h-[600px] overflow-hidden p-6'>
            <div className='flex flex-col gap-2'>
              <h4 style={PoppinsFont.style} className='font-bold text-2xl lg:text-3xl tracking-[-1.6px]'>Gestión Integral</h4>
              <h4 style={PoppinsFont.style} className='font-normal text-sm lg:text-[15px] tracking-[-0.3px]'>
                Controla cotizaciones, pedidos, cobranza y clientes desde una plataforma integrada con SAP Business One en tiempo real.
              </h4>
            </div>

            <Image
              src='/assets/images/shop-module.png'
              alt='Grid'
              width={648}
              height={276}
              className='mt-6 rounded-2xl w-full m-auto'
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Grid