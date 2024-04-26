import { NavLink } from "react-router-dom";
import "./navbar.css";
const local = require("localStorage");

const NavBar = () => {
    const logout = () => {
        local.removeItem('token');
        console.log(local.getItem('token'));
    }

    return (
        <nav>
            <h1 id="title">Budgeteer</h1>
            <NavLink className="nav-link" to="/">Home</NavLink>
            {local.getItem("token") !== null ? <span><NavLink className="nav-link" to="/login" onClick={logout}>Logout</NavLink></span> : <span><NavLink className="nav-link" to="/register">Sign Up</NavLink>
                <NavLink className="nav-link" to="/login">Log In</NavLink>
            </span>}

            <NavLink className="nav-link" to="/budget">Budget</NavLink>
            <NavLink className="nav-link" to="/credit">Credit</NavLink>
            <NavLink className="nav-link" to="/savings">Savings</NavLink>
        </nav>
    );
}
export default NavBar;