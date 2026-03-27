import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Video from './video.jsx'
import PlaceholderPage from './PlaceholderPage.jsx'
import About from './About.jsx'
import Support from './Support.jsx'
import GetInvolved from './GetInvolved.jsx'
import Essence from './Essence.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/involved" element={<GetInvolved />} />
        <Route path="/events" element={<PlaceholderPage title="Events" />} />
        <Route path="/news" element={<PlaceholderPage title="News" />} />
        <Route path="/video" element={<Video title="Video" />} />
        <Route path="/about" element={<About title="About CACHI" />} />
        <Route path="/support" element={<Support title="Support & services" />} />
        <Route path="/essence" element={<Essence />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)