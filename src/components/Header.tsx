import { Phone, MapPin } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-paper-200 border-b border-ink-200 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="./images/profile.jpeg" 
              alt="My Sushi to Go - Panda mascot logo"
              className="w-14 h-14 rounded-full object-cover border-2 border-paper-400"
            />
            <div>
              <h1 className="text-xl font-bold text-ink-800 tracking-tight">My Sushi to Go</h1>
              <p className="text-ink-500 text-sm">Sushi fresco para llevar</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 text-sm">
            <a 
              href="tel:+17872286660" 
              className="flex items-center gap-2 text-ink-600 hover:text-accent-600 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded px-2 py-1"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>(787) 228-6660</span>
            </a>
            <div className="flex items-center gap-2 text-ink-500">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>Río Grande, PR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
