export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-nori-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sushi-500 flex items-center justify-center">
              <span className="text-base">🍣</span>
            </div>
            <span className="text-lg font-semibold">My Sushi to Go</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-rice-300">
            <a href="tel:+17872286660" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sushi-400 rounded px-1">
              (787) 228-6660
            </a>
            <a href="mailto:mysushitogo@icloud.com" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sushi-400 rounded px-1">
              mysushitogo@icloud.com
            </a>
            <span>Río Grande, PR 00745</span>
          </div>

          <div className="w-full max-w-2xl border-t border-nori-700 pt-6">
            <p className="text-xs text-rice-400 leading-relaxed">
              Esta es una propuesta de demostración creada por una agencia de desarrollo web. 
              Este sitio no está afiliado, asociado, autorizado, respaldado ni conectado de ninguna manera 
              con My Sushi to Go Restaurant, ni con ninguno de sus subsidiarios o afiliados. 
              El uso de cualquier nombre comercial, marca o logotipo es únicamente con fines de identificación.
            </p>
          </div>

          <p className="text-xs text-rice-500">
            © {currentYear} Propuesta de Demostración
          </p>
        </div>
      </div>
    </footer>
  )
}
