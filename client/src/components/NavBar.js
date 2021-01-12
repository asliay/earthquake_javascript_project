import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <ul id="nav-bar">
            <li>
                <Link 
                    to="/" 
                    style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            </li>
            <li>
                <Link 
                    to="/safety" 
                    style={{ textDecoration: 'none', color: 'white'}}>Safety</Link>
            </li>
            <li>
                <Link 
                    to="/history" 
                    style={{ textDecoration: 'none', color: 'white' }}>History</Link>
            </li>
        </ul>
    )
};


export default NavBar;