import Header from "./header.jsx";
import Footer from "./footer.jsx";
import PackageCard from "./packageCard.jsx";
import packagesData from "../data/packages.jsx";

export default function Landing_Page () {
    const packagesElement = packagesData.map(_package => {
        const listItem = _package.benefits.map(benefit => {
            return (
                <li className="h-6">{benefit}</li>
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
            <div className="h-screen bg-[url('/public/Intersect.svg')] bg-gray-900 bg-center
                bg-no-repeat bg-cover">
                <Header />
                <div className="text-center relative h-[515px] top-1/2 left-1/2
                    transform translate-x-[-50%] translate-y-[-50%] bg-transparent
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
            <div className="flex flex-col justify-center items-center">
                <p className="font-inter font-medium text-[18px] text-blue-600
                    leading-[147%] my-6 tracking-[10px] font-['Inter']">Why Choose Us</p>
                <h1 className="text-gray-600 font-bold text-6xl leading-[100%]
                    mb-10">Why Hostly is Different</h1>
                <div className="why-choose-us-cards-container">

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5  items-center 
                        max-w-6xl max-h-20 mb-6 rounded-full py-3 px-6 bg-blue-600">
                    <p className="text-2xl font-semibold">BE AMONG US TO EXPERIENCE NEXT-GEN HOSTING</p>
                    <button className="h-11 w-[337px] rounded-full bg-gray-700 justify-self-center">Get Early Access Now</button>
                </div>
            </div>
            <div className="flex flex-col gap-6 mt-12">
                <h1 className="text-gray-950 text-2xl font-semibold">Ready to get started with <br/>Hostly?</h1>
                <p className="text-2xl text-gray-950 leading-6 font-normal">Choose the package that suits you</p>
                <div className="flex justify-center gap-10">
                    <p className="text-[25px] font-[500] text-gray-950 self-center">Montly</p>
                    <div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input className="sr-only peer h-[50px]" type="checkbox" />
                            <div className="w-[93px] h-[53px] bg-blue-600 peer-focus:outline-none rounded-full 
                                    peer peer-checked:after:translate-x-full peer-checked:after:border-white 
                                    after:content-[''] after:absolute
                                    after:top-[5px] after:left-[0px] after:bg-white after:border after:rounded-full after:h-[43px]
                                    after:w-[43px] after:transition-all peer-checked:bg-gray-200"></div>
                        </label>
                    </div>
                    <div className="flex items-center gap-5">
                        <p className="text-[25px] font-[500] text-gray-950 align-middle">Yearly</p>
                        <p className="w-[87px] h-[24px] font-[600] text-[10px] text-gray-950 rounded-[8px] content-center bg-amber-200">20% discount</p>
                    </div>
                </div>
            </div>
            <div className="justify-self-center mt-6 grid grid-cols-1 md:grid-cols-3 gap-10  content-center items-center
                justify-between">
                {packagesElement}
            </div>
            <div className="mt-[50px] self-center content-center p-2.5 
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