import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Page/HomePage/HomePage'
import PricePage from './Page/PricePage/PricePage'
import PartnerPage from './Page/PartnerPage/PartnerPage'
import DownloaderPage from './Page/DownloaderPage/DownloaderPage'
import BuyPage from './Page/BuyPage/BuyPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pakets" element={<PricePage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/download" element={<DownloaderPage />} />
          <Route path="/inform" element={<BuyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
