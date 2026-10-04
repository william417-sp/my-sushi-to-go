import { AlertTriangle } from 'lucide-react'

export default function DemoBanner() {
  return (
    <div className="demo-banner text-white py-2 px-4 text-center sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
        <span className="text-sm font-medium">
          Propuesta de demostración — no es el sitio oficial
        </span>
      </div>
    </div>
  )
}
