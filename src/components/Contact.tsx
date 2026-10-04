import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-paper-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-800 mb-4">
            Encuéntranos
          </h2>
          <p className="text-ink-500 text-lg">
            Visítanos o contáctanos para tu pedido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-paper-50 rounded-xl p-6 card-soft">
            <h3 className="text-lg font-semibold text-ink-800 mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-5">
              <a 
                href="tel:+17872286660"
                className="flex items-start gap-4 group focus:outline-none"
              >
                <div className="w-10 h-10 bg-paper-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-paper-300 transition-colors">
                  <Phone className="w-5 h-5 text-ink-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-ink-400 mb-1">Teléfono</p>
                  <p className="text-ink-700 font-medium group-hover:text-accent-500 transition-colors">
                    (787) 228-6660
                  </p>
                </div>
              </a>

              <a 
                href="mailto:mysushitogo@icloud.com"
                className="flex items-start gap-4 group focus:outline-none"
              >
                <div className="w-10 h-10 bg-paper-200 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-paper-300 transition-colors">
                  <Mail className="w-5 h-5 text-ink-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-ink-400 mb-1">Correo Electrónico</p>
                  <p className="text-ink-700 font-medium group-hover:text-accent-500 transition-colors break-all">
                    mysushitogo@icloud.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-paper-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-ink-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-ink-400 mb-1">Dirección</p>
                  <p className="text-ink-700 font-medium">
                    Calle Main
                    <br />
                    Río Grande, PR 00745
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-paper-50 rounded-xl p-6 card-soft">
            <h3 className="text-lg font-semibold text-ink-800 mb-6">
              Cómo Ordenar
            </h3>
            
            <p className="text-ink-500 mb-6 leading-relaxed">
              Para realizar tu pedido, comunícate directamente con el restaurante:
            </p>

            <div className="space-y-3">
              <a
                href="tel:+17872286660"
                className="flex items-center justify-center gap-2 w-full py-3 bg-ink-800 hover:bg-ink-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ink-600 focus:ring-offset-2"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Llamar Ahora</span>
              </a>
              
              <a
                href="https://linktr.ee/MySushiTogo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 border-2 border-ink-300 hover:border-ink-400 text-ink-700 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ink-400 focus:ring-offset-2"
              >
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
                <span>Ver Linktree</span>
              </a>

              <a
                href="https://facebook.com/104920601984656"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 border-2 border-ink-300 hover:border-ink-400 text-ink-700 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ink-400 focus:ring-offset-2"
              >
                <span className="text-lg font-bold" aria-hidden="true">f</span>
                <span>Visitar Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
