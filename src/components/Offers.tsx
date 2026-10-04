import { Tag, Clock } from 'lucide-react'

export default function Offers() {
  return (
    <section id="ofertas" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-nori-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ofertas y Promociones
          </h2>
          <p className="text-rice-300 text-lg">
            Descuentos especiales para nuestros clientes
          </p>
        </div>

        <div className="bg-nori-800 border border-nori-700 rounded-2xl p-8 sm:p-10 text-center">
          <div className="w-16 h-16 bg-nori-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <Tag className="w-8 h-8 text-rice-300" aria-hidden="true" />
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-4">
            Sin Promociones Verificadas
          </h3>
          
          <p className="text-rice-300 leading-relaxed max-w-lg mx-auto mb-6">
            Actualmente no tenemos promociones confirmadas para mostrar en esta propuesta. 
            Cualquier oferta o descuento especial será añadido una vez verificado 
            directamente con el restaurante.
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-rice-400">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>Las ofertas se actualizarán próximamente</span>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-rice-400 text-sm">
            Para conocer las promociones actuales, comuníquese directamente al{' '}
            <a 
              href="tel:+17872286660" 
              className="text-sushi-400 hover:text-sushi-300 font-medium underline focus:outline-none focus:ring-2 focus:ring-sushi-400 rounded"
            >
              (787) 228-6660
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
