import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/SutasomaKrisnanda.github.io">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Hello" element={<div>Hello, Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)