import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing_Page from "./pages/landing_page.jsx";
import Pricing from "./components/pricing.jsx";
import Layout from "./pages/layout.jsx";
<<<<<<< HEAD
import ContactUs from "./pages/contactus.jsx";
=======
import NotFound from './components/not-found.jsx';
>>>>>>> 3c33044529688ba47b778f2006183c307f64ae66

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
