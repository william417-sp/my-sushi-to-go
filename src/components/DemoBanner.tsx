import { AlertTriangle } from 'lucide-react'

export default function DemoBanner() {
  return (
    <div 
      className="demo-banner text-white py-3 px-4 text-center sticky top-0 z-50"
      role="banner"
      aria-label="Aviso de demostración"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2">
        <AlertTriangle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        <span className="text-base font-semibold tracking-wide">
          Propuesta de demostración — no es el sitio oficial
        </span>
      </div>
    </div>
  )
}
