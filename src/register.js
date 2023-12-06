import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom";
const local = require("localStorage")
// const URL = "https://ez-budgeteer.onrender.com";
const URL = "http://127.0.0.1:5000";
const INITIAL_VAL = { name: "", email: "", username: "", password: "", income: "", creditScore: "" }

const Register = () => {
    const history = useHistory()
    const [formData, setFormData] = useState(INITIAL_VAL);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await axios.post(`${URL}/signup`, { formData });
        local.setItem("token", token);
        history.push('/credit-form')
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

                <button type='submit'>Register</button>
            </form>
        </div >
    )
};
export default Register;