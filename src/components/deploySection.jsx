
import templatesDats from "../data/texmplates"

export default function Deploy () {
    const templateElements = templatesDats.map( template => {
        console.log(template)
        return (
             <div key={template.id} className="w-[328px] h-[171px] border border-gray-200">
                <div className={`w-full h-[113px] bg-[url('${template.background}')] flex
                    justify-center items-center`}>
                        <div className="w-[66px] h-[66px] border border-gray-950 
                        border-dashed rounded-full flex justify-center items-center">
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
        <div>
            <div>
                <div className="flex flex-col gap-6">
                    <h1 className="text-blue-600 text-5xl font-bold">How Hostly Compares</h1>
                    <p className="text-gray-950 text-[20px]">See how Hostly stacks up against other popular Hosting apps.</p>
                </div>
                <div>
                    
                </div>
            </div>
            <div className="flex justify-self-center gap-20 mt-10 border-2 border-l-gray-100
            border-r-gray-100">
                <div className="px-10 border-2 border-r-gray-100 py-30">
                    <div className="mb-20">
                        <h1 className="text-gray-950 text-start
                            text-5xl font-semibold w-80 leading-13">Deploy your first app in seconds</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex">
                            <div className="relative flex">
                                <img className="w-4 h-4" src="deploy-icon-1.svg"/>
                                <img className="w-4 h-4" src="deplot-icon-2.svg"/>
                                <img className="w-4 h-4" src="deploy-icon-3.svg"/>
                                <img className="w-4 h-4" src="deploy-icon-4.svg"/>
                            </div>
                            <p className="text-gray-500 text-start w-70">Deploy automatically 
                                <span className="text-gray-950">from git</span> or with 
                                <span className="text-gray-950">our CLI</span></p>
                        </div>
                        <div className="flex gap-3">
                            <img className="flex self-start mt-1" src="Wide.svg"/>
                            <p className="text-gray-500 text-start w-70">
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
                            <img className="flex self-start mt-1" src="HTTPS.svg"/>
                            <p className="text-gray-500 text-start w-70">
                                <span className="text-gray-950">Automatic HTTPS
                                </span> for all your domains</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 max-w-[720px] gap-10">
                    {templateElements}
                </div>
            </div>
        </div>
        
    )
}