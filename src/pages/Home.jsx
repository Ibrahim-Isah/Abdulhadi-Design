import Header from "../components/Header"
import Body from "../components/home/Body"
import Foot from "../components/home/Foot"

const Home = () => {
    return (
        <div className="container bg-back-lg h-full w-full mx-auto">
           <Header /> 
           <Body />
           <Foot />
        </div>
    )
}

export default Home
