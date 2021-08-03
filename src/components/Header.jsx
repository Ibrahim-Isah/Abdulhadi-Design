import Logo from "./Logo"
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <div className="mx-auto w-full h-24 bg-back-lg md:py-4 py-3 md:px-5 px-3 bg-red-200" >
            <div className="flex justify-between align-center">
                <div className="flex">
                    <div className="mt-3">
                        <Logo />
                    </div>
                    <div className="flex align-center items-center justify-center mx-5 md:mx-10">
                        <Link to={'/'}>
                            <p className="md:mr-3">Home</p>
                        </Link>
                        <Link to={'/work'}>
                            <p className="md:mr-3">Our work</p>
                        </Link>
                        <Link to={'/service'}>
                            <p className="md:mr-3">Services</p>
                        </Link>
                        <Link to={'/contact'}>
                            <p className="md:mr-3">Contact</p>
                        </Link>
                    </div>
                </div>
                <div className="flex align-center items-center justify-center h-20">
                    <p className="text-lg bold bg-white py-1 px-2 rounded-full  text-blue-500 shadow-quote-shadow h-18">Get a Quote</p>
                </div>
            </div>
        </div>
    )
}

export default Header
