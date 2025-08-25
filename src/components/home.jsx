import Header from "./header.jsx";

export default function Home () {
    return (
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
    )
}