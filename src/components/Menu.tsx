import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import Lightbox from './Lightbox'

interface VerifiedItem {
  name: string
  price: number
}

interface MenuItem {
  id: string
  imageUrl: string
  name: string | null
  price: number | null
  confirmed: boolean
}

const verifiedItems: VerifiedItem[] = [
  { name: 'Dragon XL Roll', price: 18 },
  { name: 'Shrimp Tempura Roll', price: 13 },
  { name: 'Pionono Roll', price: 18 },
  { name: 'Churro Roll', price: 15 },
  { name: 'Crazy Salad', price: 19 },
]

const menuItems: MenuItem[] = [
  { id: 'menu-19', imageUrl: './images/menu/menu-19.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-12', imageUrl: './images/menu/menu-12.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-08', imageUrl: './images/menu/menu-08.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-05', imageUrl: './images/menu/menu-05.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-06', imageUrl: './images/menu/menu-06.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-11', imageUrl: './images/menu/menu-11-crabsalad.jpg', name: 'Crab Salad', price: null, confirmed: true },
  { id: 'menu-09', imageUrl: './images/menu/menu-09.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-14', imageUrl: './images/menu/menu-14.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-10', imageUrl: './images/menu/menu-10.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-18', imageUrl: './images/menu/menu-18.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-17', imageUrl: './images/menu/menu-17.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-04', imageUrl: './images/menu/menu-04.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-03', imageUrl: './images/menu/menu-03.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-02', imageUrl: './images/menu/menu-02.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-15', imageUrl: './images/menu/menu-15.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-01', imageUrl: './images/menu/menu-01.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-07', imageUrl: './images/menu/menu-07.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-13', imageUrl: './images/menu/menu-13.jpg', name: null, price: null, confirmed: false },
  { id: 'menu-16', imageUrl: './images/menu/menu-16.jpg', name: null, price: null, confirmed: false },
]

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  return (
    <section id="menu" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-paper-200">
      <div className="max-w-6xl mx-auto">
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
            Artículos con Precio Verificado
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
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
          <p className="text-center text-xs text-ink-400">
            Precios verificados vía DoorDash. Fotos no disponibles para estos artículos específicos.
          </p>
        </div>

        <div className="section-divider my-12" />

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-ink-700 mb-2 text-center">
            Menú Completo del Restaurante
          </h3>
          <p className="text-center text-sm text-ink-500 mb-6">
            Fotos del menú público. Toca una foto para verla en grande.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="menu-card menu-card-animate group relative aspect-square overflow-hidden rounded-xl card-soft focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 text-left"
                style={{ '--delay': `${index * 0.05}s` } as React.CSSProperties}
                aria-label={`Ver foto de ${item.name || 'platillo por confirmar'}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.name || 'Platillo del menú'}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  {item.name ? (
                    <span className="text-white text-sm font-medium">{item.name}</span>
                  ) : (
                    <span className="text-ink-300 text-xs italic">Nombre por confirmar</span>
                  )}
                  {item.price && (
                    <span className="block text-accent-300 text-sm font-bold">${item.price}</span>
                  )}
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
              </button>
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
                Los nombres y precios de los platillos en las fotos no han sido verificados 
                y serán añadidos una vez confirmados directamente con el negocio. 
                Las fotos provienen del menú público del restaurante.
              </p>
              <p className="mt-3 text-sm text-ink-500">
                Para conocer el menú completo con precios, comuníquese al{' '}
                <a href="tel:+17872286660" className="text-accent-500 hover:text-accent-600 font-medium underline">
                  (787) 228-6660
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {selectedItem && (
        <Lightbox
          imageUrl={selectedItem.imageUrl}
          alt={selectedItem.name || 'Platillo del menú'}
          itemName={selectedItem.name || 'Platillo por confirmar'}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  )
}
