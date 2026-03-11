import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const NoPath = () => {
  return (
    <div>
      There's no QR code like that!
    </div>
  )
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/backp0" element={<Navigate to="/" replace state={{item: "backpack"}} />} />
        <Route path="*" element={<NoPath />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
