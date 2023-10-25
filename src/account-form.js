import axios from "axios"
import { useState } from "react"
const local = require("localStorage")
const URL = process.env.FULL_URL;
const INITIAL_VAL = { name: "", type: "", balance: "" }

const AccountForm = () => {
    const [formData, setFormData] = useState(INITIAL_VAL);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = local.getItem("token")
        await axios.post(`${URL}/account-form`, { headers: token, formData });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="type">Type: </label>
                <input type="text" name="type" value={formData.type} onChange={handleChange} />

                <label htmlFor="balance">Balance: </label>
                <input type="text" name="balance" value={formData.balance} onChange={handleChange} />

            </form>
        </div>
    )
}
export default AccountForm;