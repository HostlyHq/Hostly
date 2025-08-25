import formatPrice from '../utils/formatPrice.jsx';

export default function PackageCard (props) {
   return (
        <div key={props.header} className="flex flex-col max-w-[300px] min-w-[300px] text-gray-950
            rounded-2xl border-2 border-solid border-gray-500 h-[615px] content-center
            p-5 hover:scale-[1.03] hover:translate-y-[-20px] hover:transform hover:shadow-lg 
            hover:bg-gray-100 transition-all hover:border-b-blue-800 hover:text-blue-600">
            <p className="text-[28px] font-semibold mb-2
                text-start">{props.header}</p>
            <p className="text-[12px] text-start mb-5">
                {props.description}
            </p>
            <p className="text-5xl leading-8 font-semibold
                text-start mb-1.5">{formatPrice(props.priceCents)}</p>
            <p className="text-[14px] font-light text-start
                mb-6">Per month</p>
            <button className="w-full h-12 text-gray-950 mb-6 
                bg-white rounded-[14px] border-2 text-[14px]
                font-semibold border-gray-950 hover:bg-blue-600 hover:border-blue-600
                hover:text-white transition-all">Choose this plan</button>
            <div>
                <ul className='text-start pl-5 text-gray-600 font-semibold
                    leading-6 list-disc'>
                    {props.benefit}
                </ul>
            </div>
        </div>
   )           
}
