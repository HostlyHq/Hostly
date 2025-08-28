import { BrowserRouter, Routes, Route } from 'react-router-dom'  
import './App.css'
import Landing_Page from './pages/landing_page.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_Page/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
