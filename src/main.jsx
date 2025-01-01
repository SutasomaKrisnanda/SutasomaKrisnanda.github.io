import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import App from './App'
import HomePage from './pages/HomePage/HomePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hello" element={<div>Hello, Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
