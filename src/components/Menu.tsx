import { AlertCircle } from 'lucide-react'

interface MenuItem {
  name: string
  price: number
}

const verifiedItems: MenuItem[] = [
  { name: 'Dragon XL Roll', price: 18 },
  { name: 'Shrimp Tempura Roll', price: 13 },
  { name: 'Pionono Roll', price: 18 },
  { name: 'Churro Roll', price: 15 },
  { name: 'Crazy Salad', price: 19 },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-paper-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <img 
            src="./images/sushi-menu-header.jpeg" 
            alt="Sushi Menu"
            className="h-16 sm:h-20 mx-auto mb-6 object-contain"
          />
          <p className="text-ink-500 text-lg max-w-2xl mx-auto">
            Platillos preparados con ingredientes frescos
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-ink-700 mb-6 text-center">
            Artículos Verificados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {verifiedItems.map((item) => (
              <div 
                key={item.name}
                className="bg-paper-50 rounded-xl p-5 card-soft flex items-center justify-between"
              >
                <span className="text-ink-800 font-medium">{item.name}</span>
                <span className="text-xl font-bold text-accent-500">${item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-paper-50 border border-ink-200 rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-paper-300 rounded-full flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-ink-600" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ink-800 mb-2">
                Menú del Local — Por Confirmar
              </h3>
              <p className="text-ink-600 leading-relaxed">
                El restaurante ofrece una variedad más amplia de opciones. 
                Los artículos adicionales del menú no han sido verificados para esta propuesta 
                y serán añadidos una vez confirmados directamente con el negocio.
              </p>
              <p className="mt-3 text-sm text-ink-500">
                Para conocer el menú completo, visite el local o comuníquese al{' '}
                <a href="tel:+17872286660" className="text-accent-500 hover:text-accent-600 font-medium underline">
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
