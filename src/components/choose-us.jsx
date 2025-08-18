
export default function ChooseCard (props) {
    return (
        <div className="flex flex-col justify-between p-8 max-w-[298px] h-[243px]
                rounded-2xl border border-gray-500">
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