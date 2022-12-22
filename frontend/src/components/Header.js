import { Link } from "react-router-dom"

function Header() {
    return <nav>
                <div className="containernav">
                        <Link className="itemsnav" to={"/"}>Home</Link>
                        <Link className="itemsnav" to={"/About"}>About</Link>
                        <Link className="itemsnav" to={"/products"}>Products</Link>
                        <Link className="itemsnav" to={"/Contact"}>Contact US</Link>
                </div>
            </nav>
}
export default Header