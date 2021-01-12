import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/safety">Safety</Link>
            </li>
            <li>
                <Link to = "/history">History</Link>
            </li>
        </ul>
    )
};


export default NavBar;