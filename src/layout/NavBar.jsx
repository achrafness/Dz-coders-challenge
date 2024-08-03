import { Link } from "react-router-dom"
import { Component } from "react"
class NavBar extends Component {
    render() {
        return (
            <nav className="w-full  flex  px-12 justify-between py-4 items-center h-[77px] ">
                <img src="./flag.png" alt="algeria" className="image rounded-[10px] h-[45px]" />
                <ul className="flex gap-5 cursor-pointer leading-7">
                    <Link to="/about" ><li> عن الثورة</li></Link>
                    <Link to="/characters" ><li> الثوار</li></Link>
                    <Link to="/"><li>الصفحة الرئسية </li></Link>
                </ul>
            </nav>
        )
    }
}
export default NavBar