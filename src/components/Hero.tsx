interface HeroProps {
  onOrderClick: () => void
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section className="bg-paper-100 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 leading-tight tracking-tight">
              Sushi Fresco
              <br />
              <span className="text-accent-500">Para Llevar</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-ink-600 mb-10 leading-relaxed max-w-xl">
              Disfruta de la auténtica experiencia del sushi preparado con ingredientes frescos, 
              listo para recoger en Río Grande, Puerto Rico.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onOrderClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
              >
                Ordenar Ahora
              </button>
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-ink-300 hover:border-ink-400 text-ink-700 font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ink-400 focus:ring-offset-2"
              >
                Ver Menú
              </a>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <img 
              src="./images/logo-bamboo.jpeg" 
              alt="My Sushi to Go - Panda mascot with sushi tray"
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover card-soft"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
