import { X, AlertTriangle, Phone, ExternalLink } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface OrderModalProps {
  onClose: () => void
}

export default function OrderModal({ onClose }: OrderModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeButtonRef.current?.focus()
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="bg-paper-50 rounded-2xl max-w-md w-full shadow-2xl overflow-hidden"
      >
        <div className="demo-banner p-4">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" aria-hidden="true" />
              <span className="font-semibold">Modo Demostración</span>
            </div>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="text-center mb-6">
            <img 
              src="./images/profile.jpeg" 
              alt=""
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              aria-hidden="true"
            />
            <h2 id="modal-title" className="text-xl font-bold text-ink-800 mb-2">
              Orden No Enviada
            </h2>
            <p className="text-ink-600 leading-relaxed">
              Este es un sitio de demostración. Tu orden <strong>no fue procesada</strong> ni 
              enviada al restaurante. No se realizó ningún cargo.
            </p>
          </div>

          <div className="bg-paper-200 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-ink-800 mb-2 text-sm">
              ¿Quieres ordenar de verdad?
            </h3>
            <p className="text-sm text-ink-600 mb-4">
              Para hacer un pedido real, comunícate directamente con My Sushi to Go:
            </p>
            
            <div className="space-y-2">
              <a
                href="tel:+17872286660"
                className="flex items-center justify-center gap-2 w-full py-3 bg-ink-800 hover:bg-ink-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ink-600 focus:ring-offset-2"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Llamar: (787) 228-6660</span>
              </a>
              
              <a
                href="https://linktr.ee/MySushiTogo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 border-2 border-ink-300 hover:border-ink-400 text-ink-700 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-ink-400 focus:ring-offset-2"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                <span>Ver Linktree Oficial</span>
              </a>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 border-2 border-ink-200 hover:border-ink-300 text-ink-600 font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-ink-400 focus:ring-offset-2"
          >
            Entendido, Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
