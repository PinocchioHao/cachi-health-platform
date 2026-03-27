import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Video from './video.jsx'
import PlaceholderPage from './placeholderPage.jsx'
import About from './about.jsx'
import Support from './support.jsx'
import GetInvolved from './getInvolved.jsx'
import Essence from './essence.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/involved" element={<GetInvolved />} />
        <Route path="/placeholderPage" element={<PlaceholderPage title="Placeholder Page" />} />
        <Route path="/video" element={<Video title="Video" />} />
        <Route path="/about" element={<About title="About CACHI" />} />
        <Route path="/support" element={<Support title="Support & services" />} />
        <Route path="/essence" element={<Essence />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)