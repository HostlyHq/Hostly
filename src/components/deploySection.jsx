
import templatesDats from "../data/texmplates"
import compareData from "../data/comparesData"

export default function Deploy () {
    const templateElements = templatesDats.map( template => {
        return (
             <div key={template.id} className="w-[328px] h-[171px] border border-gray-200 justify-self-center">
                <div style={{backgroundImage: `url(${template.background})`}}
                    className={`w-full h-[113px] flex justify-center items-center justify-self-center`}>
                        <div className="w-[66px] h-[66px] rounded-full flex justify-center items-center">
                            <img className="animate-spin" src="/circle-vector.svg" alt="circle vector" />
                            <img className="w-8 h-8 absolute" src={`${template.icon}`}/>
                        </div>
                </div>
                <div className="w-full h-[56px] bg-white content-center">
                    <p className="text-gray-950 text-start font-semibold
                        px-5 ">{template.name}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="px-5 content-center"> 
            <div>
                <div className="flex flex-col gap-6">
                    <h1 className="text-blue-600 text-5xl font-bold">How Hostly Compares</h1>
                    <p className="text-gray-950 text-[20px]">See how Hostly stacks up against other popular Hosting apps.</p>
                </div>
                <div >
                    <CompareCards/>
                </div>
            </div>
            <div className="flex flex-col justify-self-center gap-20  border-2 border-l-gray-100
            border-r-gray-100 xl:flex-row">
                <div className="flex flex-col px-10 border-2 border-r-gray-100 py-5 
                    justify-center items-center">
                    <div className="mb-20">
                        <h1 className="text-gray-950 text-center xl:text-start
                            text-5xl font-semibold w-80 leading-13">Deploy your first app in seconds</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-3">
                            <div className="absolute flex">
                                <img className="w-4 h-4" src="deploy-icon-1.svg"/>
                                <img className="w-4 h-4" src="deplot-icon-2.svg"/>
                                <img className="w-4 h-4" src="deploy-icon-3.svg"/>
                                <img className="w-4 h-4" src="deploy-icon-4.svg"/>
                            </div>
                            <p className="relative ml-2 text-gray-500 text-start w-70 indent-15">Deploy automatically 
                                <span className="text-gray-950">from git</span> or with 
                                <span className="text-gray-950"> our CLI</span></p>
                        </div>
                        <div className="flex gap-3">
                            <img className="flex self-start mt-1 absolute" src="Wide.svg"/>
                            <p className="text-gray-500 text-start w-70 relative indent-8">
                                <span className="text-gray-950">Wide range</span> 
                                support for the most popular frameworks</p>
                        </div>
                        <div className="flex gap-3">
                            <img src="Previews.svg"/>
                            <p className="text-gray-500 text-start w-70">
                                <span className="text-gray-950">Previews</span> 
                                for evry push</p>
                        </div>
                        <div className="flex gap-3">
                            <img className="flex self-start mt-1 absolute" src="HTTPS.svg"/>
                            <p className="text-gray-500 text-start w-70 relative indent-7">
                                <span className="text-gray-950">Automatic HTTPS
                                </span> for all your domains</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[720px] gap-10">
                    {templateElements}
                </div>
            </div>
        </div>
    )
}

function CompareCards () {
    const compareElements = compareData.map( compare => {
        const borderColor = compare.ours ? 'border-blue-600 hover:bg-blue-100' : 'border-gray-100 hover:bg-blue-50'
        const badge = compare.ours ? <p className="text-[12px] text-blue-300 font-semibold bg-blue-50 px-2 py-0.5 rounded-full">You are here</p> : ''
        const headingColor = compare.ours ? 'text-blue-600' : 'text-gray-700'
        return (
            <div key={compare.id} className={`border-2 ${borderColor} max-w-[350px] h-[380px]
                p-6 content-center rounded-2xl shadow-2xl justify-self-center mb-10 cursor-pointer
                hover:scale-[1.02] transition-all`}>
                <div className="flex items-center gap-3 mb-6">
                    <p className={`text-2xl ${headingColor} font-bold
                        text-start`}>{compare.heading}</p>
                    {badge}
                </div>
                <div className="mb-3">
                    <p className="text-[14px] font-semibold text-gray-700
                        text-start">Deployement Speed</p>
                    <div className="flex gap-3">
                        <img src={`${compare.icons.deploy}`}/>
                        <p className="text-[14px] text-gray-700 
                            text-start">{compare.deploy}</p>
                    </div>
                </div>
                <div className="mb-3">
                    <p className="text-[14px] font-semibold text-gray-700
                        text-start">Server-side Support</p>
                    <div className="flex gap-3">
                        <img src={`${compare.icons.server}`}/>
                        <p className="text-[14px] text-gray-700 font-normal
                            text-start">{compare.server}</p>
                    </div>
                </div>
                <div className="mb-3">
                    <p className="text-[14px] font-semibold text-gray-700
                        text-start">Pricing</p>
                    <div className="flex gap-3">
                        <img src={`${compare.icons.pricing}`}/>
                        <p className="text-[14px] text-gray-700 font-normal
                            text-start">{compare.pricing}</p>
                    </div>
                </div>
                <div className="mb-3">
                    <p className="text-[14px] font-semibold text-gray-700
                        text-start">Free Tier</p>
                    <div className="flex gap-3">
                        <img src={`${compare.icons.tier}`}/>
                        <p className="text-[14px] text-gray-800 font-normal
                            text-start">{compare.tier}</p>
                    </div>
                </div>
                <div>
                    <p className="text-[14px] font-semibold text-gray-700
                        text-start">Custom Domains</p>
                    <div className="flex gap-3">
                        <img src={`${compare.icons.domains}`}/>
                        <p className="text-[14px] text-gray-700 font-normal
                            text-start">{compare.domain}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[700px] xl:grid-cols-4 
            xl:w-full gap-3 lg:py-10 xl:py-20 justify-self-center">
            {compareElements}
        </div>
    )
}