import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import GameSelection from './pages/GameSelection'
import GeneratedGames from './pages/GeneratedGames'
import ConfirmSelection from './pages/ConfirmSelection'
import VideoReveal from './pages/VideoReveal'
import Quiz from './pages/Quiz'
import FinalVideo from './pages/FinalVideo'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-selection" element={<GameSelection />} />
        <Route path="/confirm-selection" element={<ConfirmSelection />} />
        <Route path="/generated-games" element={<GeneratedGames />} />
        <Route path="/video-reveal" element={<VideoReveal />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/final-video" element={<FinalVideo />} />
      </Routes>
    </MemoryRouter>
  </StrictMode>,
)
