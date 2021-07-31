const Foot = () => {
    return (
        <div className="flex justify-between items-center h-96">
            <div className="bg-white h-full mx-auto w-full flex justify-evenly items-center align-center">
                <div className="flex flex-col justify-center shadow-quote-shadow h-48 rounded-xl px-5">
                    <img src="/images/abdulhadi.png" alt="" className="w-16 mx-auto static mb-5"/>
                    <p className="text-blue-500 font-semibold my-2">Abdulhadi Allahnana</p>
                    <div className="font-thin">
                        <p >Award Winning</p>
                        <p >Product Designer</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center shadow-quote-shadow h-48 rounded-xl px-5 ">
                    <img src="/images/isah.png" alt="" className="w-16 mx-auto static mb-5"/>
                    <p className="text-blue-500 font-semibold my-2">Isah Abba Ibrahim</p>
                    <div className="font-thin">
                        <p>Award Winning</p>
                        <p>Frontend Developer</p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-600 h-full w-full text-white mx-auto flex justify-center align-center items-center">
                <p className="w-96">Your website is the center of your digital eco-system,
                    like a brick and mortar location, the experience matters
                    once a customer enters, just as much as the erception 
                    they have of you before they walk through your door.
                </p>
            </div>
        </div>
    )
}

export default Foot
