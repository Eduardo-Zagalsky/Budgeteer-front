import axios from "axios"
import { useState } from "react"
const INITIAL_VAL = { username: "", password: "" }

const Login = () => {
    const [formData, setFormData] = useState(INITIAL_VAL);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await axios.post(`${URL}/logon`, { formData });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </form>
        </div>
    )
}
export default Login;