import Home from "../components/home.jsx";
import Footer from "../components/footer.jsx";
import Deploy from "../components/deploySection.jsx";
import WhyChooseUS from "../components/why-us.jsx";
import Pricing from "../components/pricing.jsx";
import EarlyAccess from "../components/earlyAccess.jsx";

export default function Landing_Page () {
    return (
        <div className="landing-page-container">
            <Home/>
            <WhyChooseUS/>
            <Deploy/>
            <Pricing/>
            <EarlyAccess/>
            <Footer />
        </div>
        
    )
}