const menuPhotos = [
  { src: './images/menu/menu-08.jpg', alt: 'Sushi party platters' },
  { src: './images/menu/menu-14.jpg', alt: 'Variety of sushi rolls and appetizers' },
  { src: './images/menu/menu-19.jpg', alt: 'Dragon roll with octopus' },
  { src: './images/menu/menu-12.jpg', alt: 'Sushi roll with crab topping' },
  { src: './images/menu/menu-05.jpg', alt: 'Salmon nigiri' },
  { src: './images/menu/menu-06.jpg', alt: 'Sushi roll and gyoza' },
  { src: './images/menu/menu-11-crabsalad.jpg', alt: 'Crab Salad', label: 'Crab Salad' },
  { src: './images/menu/menu-09.jpg', alt: 'Crab salad with avocado' },
  { src: './images/menu/menu-10.jpg', alt: 'Assorted sushi and fried items' },
  { src: './images/menu/menu-18.jpg', alt: 'Shrimp tempura' },
  { src: './images/menu/menu-04.jpg', alt: 'Rice bowl with shrimp and plantains' },
  { src: './images/menu/menu-03.jpg', alt: 'Rice bowl with glazed chicken' },
  { src: './images/menu/menu-17.jpg', alt: 'Stuffed tostones trio' },
  { src: './images/menu/menu-02.jpg', alt: 'Crispy wontons with sweet chili' },
  { src: './images/menu/menu-15.jpg', alt: 'Egg rolls' },
  { src: './images/menu/menu-01.jpg', alt: 'Dessert with ice cream and strawberries' },
  { src: './images/menu/menu-07.jpg', alt: 'Pistachio dessert with strawberries' },
  { src: './images/menu/menu-13.jpg', alt: 'Ice cream dessert plate' },
  { src: './images/menu/menu-16.jpg', alt: 'Cream-filled pastry dessert' },
]

export default function MenuGallery() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-paper-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink-800 mb-3">
            Fotos del Menú
          </h2>
          <p className="text-ink-500 text-sm max-w-xl mx-auto">
            Fotos del menú público del restaurante. Los nombres y precios de los platillos 
            están por confirmar, excepto los cinco artículos verificados arriba.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {menuPhotos.map((photo, index) => (
            <div 
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg card-soft group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {photo.label && (
                <div className="absolute bottom-0 left-0 right-0 bg-ink-900/80 text-white text-xs font-medium py-1.5 px-2 text-center">
                  {photo.label}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-400">
          Fuente: menú público de My Sushi to Go vía Linktree
        </p>
      </div>
    </section>
  )
}
