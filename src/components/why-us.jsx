
export default function WhyChooseUS () {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="font-inter font-medium text-[12px] md:text-[14px]  
            lg-text-[18px] text-blue-600
                leading-[147%] my-6 tracking-[10px] font-['Inter']">Why Choose Us</p>
            <h1 className="text-gray-600 font-bold text-4xl lg:text-6xl leading-[45px]
                mb-10">Why Hostly is Different</h1>
            <div className="flex flex-col items-center lg:flex-row gap-10 my-6 mb-24">
                <ChooseCard icon="/lightning.png"
                            number='01'
                            heading="Lightning Deploy"
                            description="Launch sites in under 10 seconds"/>
                <NetworkCard icon={"/network.png"}
                            number="02"
                            heading="Built for Scale"
                            description="Auto-optimized for millions of visitors" />
                <ChooseCard icon="/checkmark.svg"
                            number='03'
                            heading="Zero Hassle"
                            description="No config files, No manual server setup"/>
            </div>
        </div>
    )
}

function NetworkCard(props) {
    return (
        <div className="flex flex-col gap-16 p-8 max-w-[451px] h-[366px]
                rounded-2xl border-2 shadow-2xl border-l-gray-200 border-r-gray-200 
                border-b-gray-200">
            <div className="flex justify-between">
                <div className="w-[92px] h-[92px] bg-blue-950 rounded-[5px] content-center">
                    <img className="justify-self-center" 
                        src={props.icon}/>
                </div>
                <div>
                    <p className="text-1x1 text-gray-950 font-medium">{props.number}</p>
                </div>
            </div>
            <div className="text-start">
                <p className="text-gray-950 text-[20px] font-medium
                    mb-2.5">{props.heading}</p>
                <p className="text-gray-600 text-[18px] font-normal
                    leading-[20px]">{props.description}</p>
            </div>
        </div>
    )
}

function ChooseCard (props) {
    return (
        <div className="flex flex-col justify-between p-8 max-w-[298px] h-[243px]
                rounded-2xl border-2 shadow-2xl border-l-gray-200 border-r-gray-200 
                border-b-gray-200">
            <div className="flex justify-between">
                <div className="w-12 h-12 bg-blue-600 rounded-[5px] content-center">
                    <img className="justify-self-center" 
                        src={props.icon}/>
                </div>
                <div>
                    <p className="text-1x1 text-gray-950 font-medium">{props.number}</p>
                </div>
            </div>
            <div className="text-start">
                <p className="text-gray-950 text-[20px] font-medium
                    mb-2.5">{props.heading}</p>
                <p className="text-gray-600 text-[18px] font-normal
                    leading-[20px]">{props.description}</p>
            </div>
        </div>
    )
}