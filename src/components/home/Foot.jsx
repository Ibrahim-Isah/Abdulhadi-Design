const Foot = () => {
    return (
        <div className="flex justify-between items-center h-96">
            <div className="bg-white h-full mx-auto w-full flex justify-evenly items-center align-center">
                <div className="shadow-quote-shadow h-48 rounded-xl px-5">
                    <img src="/images/abdulhadi.png" alt="" className=""/>
                    <p>Abdulhadi Allahnana</p>
                </div>
                <div className="shadow-quote-shadow h-48 rounded-xl px-5 ">
                    <img src="/images/isah.png" alt="" className=""/>
                    <p>Isah Abba Ibrahim</p>
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
