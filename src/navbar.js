import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import UserContext from "./context";
const local = require("localStorage");

const NavBar = () => {
    let user = useContext(UserContext)
    const logout = () => {
        local.removeItem('token');
        console.log(local.getItem('token'));
        user.setUser(null)
    }
    return (
        <nav>
            <h1 id="title">Budgeteer</h1>
            <NavLink className="nav-link" to="/">Home</NavLink>
            {user['user'] !== null ? <span><NavLink className="nav-link" to="/login" onClick={logout}>Logout</NavLink>
                <NavLink className="nav-link" to="/budget">Budget</NavLink>
                <NavLink className="nav-link" to="/credit">Credit</NavLink>
                <NavLink className="nav-link" to="/savings">Savings</NavLink>
            </span> : <span><NavLink className="nav-link" to="/register">Sign Up</NavLink>
                <NavLink className="nav-link" to="/login">Log In</NavLink>
            </span>}
        </nav>
    );
}
export default NavBar;