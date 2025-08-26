import formatPrice from '../utils/formatPrice.jsx';
import packagesData from '../data/packages';

export default function Pricing () {
    return (
        <div id='pricing' className='py-10'>
            <div className="flex flex-col gap-6 mt-12">
                <h1 className="text-gray-950 text-2xl font-semibold">Ready to get started with <br/>Hostly?</h1>
                <p className="text-2xl text-gray-950 leading-6 font-normal">Choose the package that suits you</p>
                <div className="flex justify-center gap-10">
                    <p className="text-[25px] font-[500] text-gray-950 self-center">Montly</p>
                    <div className='flex items-center'>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input className="sr-only peer h-[50px]" type="checkbox" />
                            <div className="w-[93px] h-[53px] bg-blue-600 peer-focus:outline-none rounded-full 
                                    peer peer-checked:after:translate-x-full peer-checked:after:border-white 
                                    after:content-[''] after:absolute 
                                    after:top-[5px] after:left-[0px] after:bg-white after:border after:rounded-full after:h-[43px]
                                    after:w-[43px] after:transition-all peer-checked:bg-gray-200"></div>
                        </label>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <p className="text-[25px] font-[500] text-gray-950 align-middle">Yearly</p>
                        <p className="w-[87px] h-[24px] font-[600] text-[10px] text-gray-950 rounded-[8px] content-center bg-amber-200">20% discount</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-self-center w-[80%]
                justify-center mb-20 mt-20">
                <a className="w-[50%]" href="">
                    <p className="text-gray-950 text-3xl 
                        border-b-4 border-blue-700 pb-4">Basic</p>
                </a>
                <a className="w-[50%]" href="">
                    <p className="text-gray-950 text-3xl
                    border-b-4 border-gray-300 pb-4">Premium</p>
                </a>  
            </div>
            <div>
                <PackageCards/>
            </div>
        </div>
    )
}

function PackageCards () {
    const packagesElement = packagesData.map(_package => {
        const listItem = _package.benefits.map(benefit => {
            return (
                <div className="flex items-center gap-7 mb-3.5">
                    <img className="fill-black" src="checkmark.svg" alt="" />
                    <p key={benefit} className="h-6 content-center">{benefit}</p>
                </div>
            )
        })
        return (
            <div key={_package.header} className="flex flex-col max-w-[300px] min-w-[300px] text-gray-950
                rounded-2xl border-2 border-solid border-gray-500 h-[615px] content-center
                p-5 hover:scale-[1.03] hover:translate-y-[-20px] hover:transform hover:shadow-lg 
                hover:bg-blue-100 transition-all hover:border-b-blue-800 hover:text-blue-600
                hover:shadow-blue-600 hover:border-x-blue-600">
                <p className="text-[28px] font-semibold mb-2
                    text-start">{_package.header}</p>
                <p className="text-[12px] text-start mb-5">
                    {_package.description}
                </p>
                <p className="text-5xl leading-8 font-semibold
                    text-start mb-1.5">{formatPrice(_package.priceCents)}</p>
                <p className="text-[14px] font-light text-start
                    mb-6">Per month</p>
                <button className="w-full h-12 text-gray-950 mb-6 
                    bg-white rounded-[14px] border-2 text-[14px]
                    font-semibold border-gray-950 hover:bg-blue-600 hover:border-blue-600
                    hover:text-white transition-all">Choose this plan</button>
                <div>
                    <ul className='text-start pl-5 text-gray-600 font-semibold
                        leading-6 list-disc'>
                        {listItem}
                    </ul>
                </div>
            </div>
        )
    })
   return (
        <div className="justify-self-center mt-6 grid grid-cols-1 lg:grid-cols-3 gap-10  content-center items-center
                justify-between">
            {packagesElement}
        </div>
   )           
}