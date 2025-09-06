import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing_Page from "./pages/landing_page.jsx";
import Pricing from "./components/pricing.jsx";
import Layout from "./pages/layout.jsx";
import ContactUs from "./pages/contactus.jsx";
import NotFound from "./pages/not-found.jsx";
import Signup from "./pages/sign-up.jsx";
import Layout2 from "./pages/layout-2.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route element={<Layout2 />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
