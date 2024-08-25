import axios from "axios"
import { useState, useContext } from "react";
import UserContext from "./context";
import { useHistory } from "react-router-dom"
const local = require("localStorage")
const URL = process.env.REACT_APP_URL
const INITIAL_VAL = { username: "", password: "" }
let resp = null

const Login = () => {
    let user = useContext(UserContext)
    const history = useHistory()
    const [formData, setFormData] = useState(INITIAL_VAL);
    const [error, setError] = useState();
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await axios.post(`${URL}/logon`, { formData });
            local.setItem("token", token.data);
            const value = local.getItem("token")
            if (value != null) {
                resp = await axios.get(`${URL}/`, { headers: { token: value } });
                user.setUser(resp.data);
                history.push('/');
            }
        }
        catch {
            console.log(error)
            e = "username/password are incorrect"
            setError(e)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <div className="boxes">
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                    <label htmlFor="username">Username: </label>
                </div>
                <div className="boxes">
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    <label htmlFor="password">Password: </label>
                </div>
                <div>{error}</div>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}
export default Login;