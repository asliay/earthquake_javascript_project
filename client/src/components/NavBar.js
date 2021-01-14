import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <div className="Navbar">
            <ul id="nav-bar">
                <li>
                    <Link 
                        to="/">Home</Link>
                </li>
                <li>
                    <Link 
                        to="/safety">Safety</Link>
                </li>
                <li>
                    <Link 
                        to="/history">History</Link>
                </li>
            </ul>
        </div>
        </>
    )
};


export default NavBar;