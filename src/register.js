import axios from "axios"
import { useState, useContext } from "react";
import UserContext from "./context";
import { useHistory } from "react-router-dom";
const local = require("localStorage")
const URL = process.env.REACT_APP_URL
const INITIAL_VAL = { name: "", email: "", username: "", password: "", income: "", creditScore: "" }
let resp = null


const Register = () => {
    let user = useContext(UserContext)
    const history = useHistory()
    const [formData, setFormData] = useState(INITIAL_VAL);
    const [error, setError] = useState("");
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await axios.post(`${URL}/signup`, { formData });
            local.setItem("token", token.data);
            const value = local.getItem("token")
            if (value != null) {
                resp = await axios.get(`${URL}/`, { headers: { token: value } });
                user.setUser(resp.data);
                history.push('/account-form')
                // sumbit app goes to account form, but then returns i need to send it to expense form, then home.
            }
        }
        catch (error) {
            console.log(error)
            e = "username already exists"
            setError(e)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <div className="boxes">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <label htmlFor="name">Full Name: </label>
                </div>
                <div className="boxes">
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    <label htmlFor="email">Email: </label>
                </div>
                <div className="boxes">
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                    <label htmlFor="username">Username: </label>
                </div>
                <div className="boxes">
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                    <label htmlFor="password">Password: </label>
                </div>
                <div className="boxes">
                    <input type="text" name="income" value={formData.income} onChange={handleChange} />
                    <label htmlFor="income">Income: </label>
                </div>
                <div className="boxes">
                    <input type="text" name="creditScore" value={formData.creditScore} onChange={handleChange} />
                    <label htmlFor="creditScore">Credit Score: </label>
                </div>
                <div>{error}</div>

                <button type='submit'>Register</button>
            </form>
        </div >
    )
};
export default Register;