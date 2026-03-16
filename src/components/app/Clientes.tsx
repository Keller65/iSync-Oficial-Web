import Image from 'next/image';

const clients = [
  { name: 'Alfa & Omega', logo: '/assets/clientes/alfayomega.png' },
  { name: 'Cemplus', logo: '/assets/clientes/cemplus.png' },
  { name: 'WCS Soluciones', logo: '/assets/clientes/wscsoluciones.png' },
];

function Clientes() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center text-gray-600 mb-8">Confían en nosotros</h3>
        <div className="flex flex-wrap justify-center items-center gap-20">
          {clients.map((client) => (
            <div key={client.name} className="relative w-48 h-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clientes