import Header from "../components/Header"

const Service = () => {
    return (
        <div>
            <Header />
            <div className="flex-col md:flex-row flex justify-between align-center px-20 mt-10 pb-24">
            <div className="flex flex-col  ">
                <div className="text-gray-400 text-lg font-bold">WE GOT THIS.</div>
                <div className="text-5xl font-bold w-full leading-tight pb-8 pt-2" >
                    OUR SERVICES. <span>
                            <img src="/images/curve.png" className="w-28 ml-60"/>
                        </span>
                </div>
            </div>
            <div className="h-4/12 w-0.5 bg-gray-500 "></div>
            <div className="w-5/12">
                <img src="/images/workspace.png" alt="workspace" />
            </div>
        </div>
        <div className="absolute px-20 top-80">
            <p className="w-2/5 font-bold mb-10">Your website is the center of your digital eco-system,
                            like a brick and mortar location, the experience matters
                            once a customer enters, just as much as the erception 
                            they have of you before they walk through your door.
            </p>
            <div className="flex bg-blue-600 px-5 py-2 rounded-full w-max text-white align-center font-bold">
                    <p>Get started</p>
            </div>
        </div>
        <div className="p-20 bg-blue-500 text-white w-full flex justify-evenly items-center">
            <div className="w-80">
                <div className="flex">
                    <span><img src="/images/paint.png" alt="paint icon" className="w-8 mr-2" /></span><p className="font-extrabold">Web Design</p>
                </div>
                <p className="my-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                         Esse a pariatur repellendus error nobis evenie.
                </p>
                <div className="flex bg-green-600 px-5 py-2 w-max text-black align-center font-bold">
                    <p>Read More</p>
                </div>
            </div>
            <div className="w-80">
                <div className="flex">
                    <span><img src="/images/laptopicon.png" alt="laptop icon"  className="w-8 mr-2" /></span><p className="font-extrabold">Web Development</p>
                </div>
                <p className="my-2">                                     
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Esse a pariatur repellendus error nobis evenie.
                </p>
                <div className="flex bg-green-600 px-5 py-2 w-max text-black align-center font-bold">
                    <p>Read More</p>
                </div>
            </div>
            <div className="w-80">
                <div className="flex">
                    <span><img src="/images/interneticon.png" alt="world icon"  className="w-8 mr-2"/></span><p className="font-extrabold">Web Hosting</p>
                </div>
                <p className="my-2">                                       
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Esse a pariatur repellendus error nobis evenie.
                </p>
                <div className="flex bg-green-600 px-5 py-2 w-max text-black align-center font-bold">
                    <p>Read More</p>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Service
