import { useState } from 'react'
import DemoBanner from './components/DemoBanner'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import MenuGallery from './components/MenuGallery'
import Offers from './components/Offers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'

function App() {
  const [showOrderModal, setShowOrderModal] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <DemoBanner />
      <Header />
      <main className="flex-grow">
        <Hero onOrderClick={() => setShowOrderModal(true)} />
        <Menu />
        <MenuGallery />
        <Offers />
        <Contact />
      </main>
      <Footer />
      {showOrderModal && (
        <OrderModal onClose={() => setShowOrderModal(false)} />
      )}
    </div>
  )
}

export default App
