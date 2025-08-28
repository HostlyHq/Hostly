import { BrowserRouter, Routes, Route } from 'react-router-dom'  
import './App.css'
import Landing_Page from './pages/landing_page.jsx'
import Pricing from "./components/pricing.jsx";
import Layout from "./pages/layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
