import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom"
const local = require("localStorage")
const URL = process.env.URL;
const INITIAL_VAL = { username: "", password: "" }

const Login = () => {
    const history = useHistory()
    const [formData, setFormData] = useState(INITIAL_VAL);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await axios.post(`${URL}/logon`, { formData });
        local.setItem("token", token);
        history.push('/');
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
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}
export default Login;