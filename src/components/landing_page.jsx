import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Deploy from "./deploySection.jsx";
import WhyChooseUS from "./why-us.jsx";
import Pricing from "./pricing.jsx";

export default function Landing_Page () {
    return (
        <div className="landing-page-container">
            <div className="h-screen bg-[url('/public/Intersect.svg')] bg-gray-900 bg-center
                bg-no-repeat bg-cover">
                <Header/>
                <div className="text-center relative h-[515px] top-1/2 left-1/2 w-[75%]
                    transform -translate-x-1/2 -translate-y-1/2 bg-transparent
                    backdrop-blur-md flex flex-col justify-center rounded-4xl min-w-0">
                    <h1 className="font-['Merriweather'] mb-4 font-black
                        text-5xl">YOUR IDEAS. LIVE IN SECONDS</h1>
                    <p className="text-2xl mb-8">
                        From code to global scene <br/> Hostly makes deployment instant, 
                        secure, and effortless
                    </p>
                    <section className="flex justify-center gap-4">
                        <button className="w-[207px] h-9 text-1x1 rounded-full
                            bg-blue-600">See how it works</button>
                        <button className="w-[207px] h-9 text-1x1 rounded-full
                            bg-blue-900">Get early Access</button>
                    </section>
                </div>
            </div>
            <WhyChooseUS/>
            <Deploy/>
            <Pricing/>
            <div className="mt-[50px] justify-self-center content-center py-20 w-[80%]
                bg-gradient-to-r from-blue-700 to-blue-100 rounded-3xl">
                <h1 className="text-gray-950 text-3xl font-semibold mb-6">
                    Be amaong the first to experience next-gen hosting
                </h1>
                <p className="text-[16px] text-gray-950 mb-9">
                    Let's embody your beutiful ideas together, simplify
                    the way you visualize your next big things.
                </p>
                <button className="bg-blue-600 w-[245px] h-[56px] rounded-4xl text-[18px] text-[500]">Get early acceess</button>
            </div>
            <Footer />
        </div>
        
    )
}