import Header from "../../components/Header"

const OurWork = () => {
    return (
        <div>
            <Header />
            <div className="flex-col md:flex-row flex justify-between align-center px-20 mt-10 pb-24">
            <div className="flex flex-col justify-center align-center my-auto">
                <div className="text-gray-400 text-lg font-bold">WE GOT THIS.</div>
                <div className="text-5xl font-bold w-96 leading-tight pb-8 pt-2" >
                    OUR WORK.<br /> DONE RIGHT. <span>
                            <img src="/images/curve.png" className="ml-44 w-28"/>
                        </span>
                </div>
            </div>
            <div className="h-4/12 w-0.5 bg-gray-500 "></div>
            <div className="w-5/12 my-auto">
                <p>Your website is the center of your digital eco-system,
                    like a brick and mortar location, the experience matters
                    once a customer enters, just as much as the erception 
                    they have of you before they walk through your door.
                </p>
            </div>
        </div>
        <div className="grid grid-cols-3 mx-auto gap-4 px-20">
            <img src="/images/laptop.png" alt="" className="h-80"/>
            <img src="/images/laptoptwo.png" alt="" className="h-80"/>
            <img src="/images/screen.png" alt="" className="h-80"/>
            <img src="/images/workspace.png" alt="" className="h-80"/>
            <img src="/images/phone.png" alt="" className="h-80"/>
            <img src="/images/screentwo.png" alt="" className="h-80"/>
        </div>
        <div className="my-10 px-20 mx-auto">
            <div className="text-gray-400 text-lg font-bold">CLIENT CASE STUDY.</div>
            <div className="text-5xl font-bold leading-tight pb-8 pt-2">SOME COMPANY</div>
        </div>
        <img src="/images/phone.png" alt="" className="w-full h-80 object-cover mb-10"/>
        <div className="w-5/12 mx-auto my-14 align-center font-bold">
            <p>Your website is the center of your digital eco-system,
                like a brick and mortar location, the experience matters
                once a customer enters, just as much as the erception 
                they have of you before they walk through your door.
            </p>
        </div>
        </div>
        
    )
}

export default OurWork
