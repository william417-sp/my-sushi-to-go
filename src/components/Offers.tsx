import { Tag } from 'lucide-react'

export default function Offers() {
  return (
    <section id="ofertas" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-paper-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-800 mb-4">
            Ofertas y Promociones
          </h2>
        </div>

        <div className="bg-paper-200 border border-ink-200 rounded-xl p-8 sm:p-10 text-center">
          <div className="w-14 h-14 bg-paper-300 rounded-full flex items-center justify-center mx-auto mb-6">
            <Tag className="w-7 h-7 text-ink-500" aria-hidden="true" />
          </div>
          
          <h3 className="text-xl font-semibold text-ink-700 mb-4">
            Sin Promociones Verificadas
          </h3>
          
          <p className="text-ink-500 leading-relaxed max-w-md mx-auto">
            Actualmente no tenemos promociones confirmadas para mostrar en esta propuesta. 
            Cualquier oferta especial será añadida una vez verificada directamente con el restaurante.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-ink-500 text-sm">
            Para conocer las promociones actuales, comuníquese directamente al{' '}
            <a 
              href="tel:+17872286660" 
              className="text-accent-500 hover:text-accent-600 font-medium underline focus:outline-none focus:ring-2 focus:ring-accent-500 rounded"
            >
              (787) 228-6660
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
