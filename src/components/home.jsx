import Header from "./header.jsx";

export default function Home () {
    return (
        /*<div className="h-screen bg-[url('/public/Intersect.svg')] bg-gray-900 bg-center
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
                <section className="flex flex-col justify-center items-center gap-4">
                    <button className="w-[207px] h-13 text-1x1 rounded-full
                        bg-blue-600">See how it works</button>
                    <button className="w-[207px] h-13 text-1x1 rounded-full
                        bg-blue-900">Get early Access</button>
                </section>
            </div>
        </div>*/

        <div className="h-screen bg-[url('/hero-background1.jpg')] bg-gray-900 bg-center
            bg-no-repeat bg-cover backdrop-contrast-50 min-h-screen">
            <Header/>
            <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-5xl text-white font-bold w-[500px] text-start
                    ">Fast, Secure and Reliable Web Hosting with Hostly</h1>
                <div className="mt-3">
                    <p className="text-white text-start w-[500px] mt-4">
                        Take your online presence to the next level with Hostly's fast, 
                        secure, and reliable web hosting solutions. Our expert support team 
                        and cutting-edge technology ensure your website is always up and 
                        running smoothly.
                    </p>
                </div>
                <div className="flex gap-10 mt-10">
                    <button className="border w-48 border-white py-3  rounded-full">See how it works</button>
                    <button className="w-48 py-3 bg-gray-200 text-black rounded-full">Get early access</button>
                </div>
                
            </div>
        </div>
    )
}