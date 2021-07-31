const Body = () => {
    return (
        <div className="flex justify-between align-center px-20 mt-10 pb-24">
            <div className="flex flex-col justify-center align-center">
                <div className="text-gray-400 text-lg font-bold">AWARD WINNING DEV.</div>
                <div className="text-5xl font-bold w-96 leading-tight pb-8 pt-2" >
                    We make your website look great. <span>
                            <img src="/images/curve.png" className="w-28"/>
                        </span>
                </div>
                <div className="flex bg-blue-600 px-5 py-2 rounded-full w-max text-white align-center font-bold">
                    <img src="/images/search.png" alt="" className="w-5 mr-1"/>
                    <p>Our work</p>
                </div>
            </div>
            <div className="w-5/12">
                <img src="/images/monitor.png" alt="monitor" />
            </div>
        </div>
    )
}

export default Body
