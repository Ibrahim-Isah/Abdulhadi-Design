import Header from "../components/Header"


const Contact = () => {
    return (
        <div>
            <Header />
            <div className="w-7/12 mx-auto">
                 <h1 className="font-bold text-5xl my-5 w-80 mx-auto">CONTACT US</h1>
                 <p className="w-3/5 mx-auto text-center">
                        Got a question? We’ll love to hear from you. Send us a message
                        and we”ll respond to you as soon as possible.
                </p>
                <form className="w-10/12 mx-auto">
                    <div className="flex flex-col w-12/12">
                        <label htmlFor="name">Name *</label>
                        <input type="text" className="bg-gray-400 h-12 my-4 px-5 py-auto w-3/5"/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mail">Email *</label>
                        <input type="email" className="bg-gray-400 h-12 my-4 px-5 py-auto w-3/5"/>

                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message">Message</label>
                        <input type="email" className="bg-gray-400 h-52 my-4 px-5 py-auto w-3/5 "/>
                    </div>
                    <input type="submit" className="bg-blue-500 h-12 my-4 px-5 py-auto w-3/5 font-thin text-white " value="Send Message"/>
                </form>
            </div>
            
        </div>
    )
}

export default Contact
