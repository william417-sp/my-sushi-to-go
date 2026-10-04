import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface LightboxProps {
  imageUrl: string
  alt: string
  itemName: string
  onClose: () => void
}

export default function Lightbox({ imageUrl, alt, itemName, onClose }: LightboxProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/90"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Foto de ${itemName}`}
    >
      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white text-lg font-medium truncate pr-4">
            {itemName}
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex-shrink-0 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="relative bg-ink-800 rounded-xl overflow-hidden">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-auto max-h-[80vh] object-contain"
          />
        </div>
        
        <p className="mt-3 text-center text-sm text-ink-300">
          Presiona Escape o haz clic afuera para cerrar
        </p>
      </div>
    </div>
  )
}
