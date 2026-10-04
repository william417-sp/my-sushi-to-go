import { ChevronDown } from 'lucide-react'

interface HeroProps {
  onOrderClick: () => void
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section className="hero-gradient text-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" aria-hidden="true" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 float-animation">
          <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white/10 backdrop-blur-sm">
            <span className="text-5xl sm:text-6xl">🍱</span>
          </div>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Sushi Fresco
          <br />
          <span className="text-sushi-400">Para Llevar</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-rice-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Disfruta de la auténtica experiencia del sushi preparado con ingredientes frescos, 
          listo para recoger en Río Grande, Puerto Rico.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOrderClick}
            className="inline-flex items-center justify-center px-8 py-4 bg-sushi-500 hover:bg-sushi-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sushi-400 focus:ring-offset-2 focus:ring-offset-nori-900 shadow-lg"
          >
            Ordenar Ahora
          </button>
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-nori-900"
          >
            Ver Menú
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#menu" className="text-white/50 hover:text-white transition-colors" aria-label="Ir al menú">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  )
}
