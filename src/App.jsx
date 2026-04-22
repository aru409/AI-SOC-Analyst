import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import PricingPage from './pages/PricingPage'

function App() {
  const location = useLocation()

  return (
    <SiteLayout>
      <div key={location.pathname} className="animate-pageEnter">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </SiteLayout>
  )
}

export default App
