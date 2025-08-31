import Header from "./header.jsx";

export default function Home() {
  return (
    <div
      className="h-screen bg-[url('/hero-background1.jpg')] bg-gray-900 bg-center
            bg-no-repeat bg-cover backdrop-contrast-50 min-h-screen"
    >
      <Header />
      <div
        className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                justify-center items-center"
      >
        <p className="md:text-2xl font-semibold mb-5 animate-bounce">
          Welcome to Hostly!!
        </p>
        <h1
          className="text-3xl text-white font-bold max-w-[700px] text-center
            md:text-4xl lg:text-5xl"
        >
          Fast, Secure and Reliable Web Hosting with Hostly
        </h1>
        <div className="mt-3">
          <p className="text-[14px] md:text-base text-white text-center mt-4">
            Take your online presence to the next level with Hostly's fast,
            secure, and reliable web hosting solutions. Our expert support team
            and cutting-edge technology ensure your website is always up and
            running smoothly.
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-10 md:flex-row">
          <button
            className="border w-48 border-white py-3  rounded-full transition
                        hover:bg-gray-400 hover:text-slate-950 hover:border-gray-400"
          >
            See how it works
          </button>
          <button
            className="w-48 py-3 bg-gray-200 text-black rounded-full transition
                        hover:bg-gray-400"
          >
            Get early access
          </button>
        </div>
      </div>
    </div>
  );
}
