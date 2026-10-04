import { Phone, MapPin } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-nori-900 text-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sushi-500 flex items-center justify-center">
              <span className="text-xl">🍣</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">My Sushi to Go</h1>
              <p className="text-rice-300 text-sm">Sushi fresco para llevar</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 text-sm">
            <a 
              href="tel:+17872286660" 
              className="flex items-center gap-2 text-rice-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sushi-400 focus:ring-offset-2 focus:ring-offset-nori-900 rounded px-2 py-1"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>(787) 228-6660</span>
            </a>
            <div className="flex items-center gap-2 text-rice-300">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Río Grande, PR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
