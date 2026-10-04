export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-ink-800 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="./images/profile.jpeg" 
              alt=""
              className="w-10 h-10 rounded-full object-cover"
              aria-hidden="true"
            />
            <span className="text-lg font-semibold">My Sushi to Go</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-300">
            <a href="tel:+17872286660" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 rounded px-1">
              (787) 228-6660
            </a>
            <a href="mailto:mysushitogo@icloud.com" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 rounded px-1">
              mysushitogo@icloud.com
            </a>
            <span>Río Grande, PR 00745</span>
          </div>

          <div className="w-full max-w-2xl border-t border-ink-600 pt-6">
            <p className="text-sm text-ink-300 leading-relaxed font-medium">
              Esta página no es el sitio oficial del restaurante.
            </p>
            <p className="mt-2 text-xs text-ink-400 leading-relaxed">
              Esta es una propuesta de demostración creada por una agencia de desarrollo web. 
              Este sitio no está afiliado, asociado, autorizado, respaldado ni conectado de ninguna manera 
              con My Sushi to Go Restaurant, ni con ninguno de sus subsidiarios o afiliados. 
              El uso de cualquier nombre comercial, marca o logotipo es únicamente con fines de identificación.
            </p>
          </div>

          <p className="text-xs text-ink-500">
            © {currentYear} Propuesta de Demostración
          </p>
        </div>
      </div>
    </footer>
  )
}
