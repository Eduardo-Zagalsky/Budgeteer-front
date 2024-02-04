import { NavLink } from "react-router-dom";
import "./navbar.css";
const local = require("localStorage");

const NavBar = () => {
    return (
        <nav>
            <h1 id="title">Budgeteer</h1>
            <NavLink className="nav-link" to="/">Home</NavLink>
            {local != undefined ? <span><NavLink className="nav-link" to="/">Logout</NavLink></span> : <span><NavLink className="nav-link" to="/register">Sign Up</NavLink>
                <NavLink className="nav-link" to="/login">Log In</NavLink>
            </span>}

            <NavLink className="nav-link" to="/budget">Budget</NavLink>
            <NavLink className="nav-link" to="/credit">Credit</NavLink>
            <NavLink className="nav-link" to="/savings">Savings</NavLink>
        </nav>
    );
}
export default NavBar;