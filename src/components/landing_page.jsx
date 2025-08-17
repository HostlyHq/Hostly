import Header from "./header.jsx";
import Footer from "./footer.jsx";
import '../styles/landing-page.css';
import PackageCard from "./packageCard.jsx";
import packagesData from "../data/packages.jsx";

export default function Landing_Page () {
    const packagesElement = packagesData.map(_package => {
        const listItem = _package.benefits.map(benefit => {
            return (
                <li className="benefit-list-item">{benefit}</li>
            )
        })
        return (
            <PackageCard header={_package.header}
                            description={_package.description}
                            priceCents={_package.priceCents}
                            benefit={listItem}
            />
        )
    })
    return (
        <div className="landing-page-container">
            <div className="hero-section">
                <Header />
                <div className="hero-content-section">
                    <h1 className="hero-heading">YOUR IDEAS. LIVE IN SECONDS</h1>
                    <p className="hero-description">
                        From code to global scene <br/> Hostly makes deployment instant, 
                        secure, and effortless
                    </p>
                    <section className="hero-section-buttons">
                        <button className="see-how-it-works-button">See how it works</button>
                        <button className="get-early-access-button">Get early Access</button>
                    </section>
                </div>
            </div>
            <div className="why-choose-us-container">
                <p className="why-choose-us-first-header">Why Choose Us</p>
                <h1 className="why-choose-us-main-header">Why Hostly is Different</h1>
                <div className="why-choose-us-cards-container">

                </div>
                <div className="be-among-us-container">
                    <p className="be-among-us-heading">BE AMONG US TO EXPERIENCE NEXT-GEN HOSTING</p>
                    <button className="among-us-get-early-access-button">Get Early Access Now</button>
                </div>
            </div>
            <div className="get-started-container">
                <h1 className="ready-to-get-started-text">Ready to get started with <br/>Hostly?</h1>
                <p className="choose-package-text">Choose the package that suits you</p>
                <div className="package-header-container">
                    <p className="monthly-text">Montly</p>
                    <input className="package-radio-input" type=""/>
                    <div className="yearly-package-container">
                        <p className="yearly-text">Yearly</p>
                        <p className="yearly-discount-text">20% discount</p>
                    </div>
                </div>
            </div>
            <div className="packages-grid">
                {packagesElement}
            </div>
            <div className="first-experience-container">
                <h1 className="text-gray-950 text-4xl font-semibold mb-6">
                    Be amaong the first to experience next-gen hosting
                </h1>
                <p className="first-experience-text">
                    Let's embody your beutiful ideas together, simplify
                    the way you visualize your next big things.
                </p>
                <button className="first-experience-button">Get early acceess</button>
            </div>
            <Footer />
        </div>
        
    )
}