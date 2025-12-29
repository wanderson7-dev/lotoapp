import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import GameSelection from './pages/GameSelection'
import GeneratedGames from './pages/GeneratedGames'
import ConfirmSelection from './pages/ConfirmSelection'
import VideoReveal from './pages/VideoReveal'
import Quiz from './pages/Quiz'
import FinalVideo from './pages/FinalVideo'
import Up1 from './pages/Up1'
import DwUp1 from './pages/DwUp1'
import Up2 from './pages/Up2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-selection" element={<GameSelection />} />
        <Route path="/confirm-selection" element={<ConfirmSelection />} />
        <Route path="/generated-games" element={<GeneratedGames />} />
        <Route path="/video-reveal" element={<VideoReveal />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/final-video" element={<FinalVideo />} />
        <Route path="/up1" element={<Up1 />} />
        <Route path="/dw-up1" element={<DwUp1 />} />
        <Route path="/up2" element={<Up2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
