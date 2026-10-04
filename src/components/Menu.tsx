import { AlertCircle } from 'lucide-react'

interface MenuProps {
  onOrderClick: () => void
}

interface MenuItem {
  name: string
  price: number
  verified: boolean
}

const verifiedItems: MenuItem[] = [
  { name: 'Dragon XL Roll', price: 18, verified: true },
  { name: 'Shrimp Tempura Roll', price: 13, verified: true },
  { name: 'Pionono Roll', price: 18, verified: true },
  { name: 'Churro Roll', price: 15, verified: true },
  { name: 'Crazy Salad', price: 19, verified: true },
]

export default function Menu({ onOrderClick }: MenuProps) {
  return (
    <section id="menu" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-rice-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-nori-900 mb-4">
            Nuestro Menú
          </h2>
          <p className="text-nori-600 text-lg max-w-2xl mx-auto">
            Platillos preparados con ingredientes frescos y el arte tradicional del sushi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {verifiedItems.map((item) => (
            <article 
              key={item.name}
              className="menu-card bg-white rounded-2xl p-6 card-shadow card-shadow-hover"
            >
              <div className="w-full h-32 bg-gradient-to-br from-nori-800 to-nori-900 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-5xl">🍣</span>
              </div>
              
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-nori-900 leading-tight">
                  {item.name}
                </h3>
                <span className="text-xl font-bold text-sushi-600 whitespace-nowrap">
                  ${item.price}
                </span>
              </div>
              
              <button
                onClick={onOrderClick}
                className="mt-4 w-full py-2.5 bg-nori-900 hover:bg-nori-800 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-nori-600 focus:ring-offset-2"
              >
                Agregar
              </button>
            </article>
          ))}
        </div>

        <div className="bg-sushi-50 border border-sushi-200 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-sushi-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-sushi-600" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-nori-900 mb-2">
                Menú del Local — Por Confirmar
              </h3>
              <p className="text-nori-600 leading-relaxed">
                El restaurante ofrece una variedad más amplia de opciones. 
                Los artículos adicionales del menú no han sido verificados para esta propuesta 
                y serán añadidos una vez confirmados directamente con el negocio.
              </p>
              <p className="mt-3 text-sm text-nori-500">
                Para conocer el menú completo, visite el local o comuníquese al{' '}
                <a href="tel:+17872286660" className="text-sushi-600 hover:text-sushi-700 font-medium underline">
                  (787) 228-6660
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
