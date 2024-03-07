import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useHistory } from "react-router-dom";
const local = require("localStorage");

const NavBar = () => {
    const history = useHistory();
    const logout = () => {
        local.removeItem('token');
        local.setItem("token", null);
        history.push("/")
    }

    return (
        <nav>
            <h1 id="title">Budgeteer</h1>
            <NavLink className="nav-link" to="/">Home</NavLink>
            {local.getItem("token") != null ? <span><NavLink className="nav-link" to={logout}>Logout</NavLink></span> : <span><NavLink className="nav-link" to="/register">Sign Up</NavLink>
                <NavLink className="nav-link" to="/login">Log In</NavLink>
            </span>}

            <NavLink className="nav-link" to="/budget">Budget</NavLink>
            <NavLink className="nav-link" to="/credit">Credit</NavLink>
            <NavLink className="nav-link" to="/savings">Savings</NavLink>
        </nav>
    );
}
export default NavBar;