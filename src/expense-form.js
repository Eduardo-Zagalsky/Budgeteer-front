import axios from "axios"
import { useState } from "react"
const local = require("localStorage")
const URL = process.env.FULL_URL;
const INITIAL_VAL = { name: "", type: "", amount: "", description: "", date: "" }

const ExpenseForm = () => {
    const [formData, setFormData] = useState(INITIAL_VAL);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = local.getItem("token")
        await axios.post(`${URL}/expense-form`, { headers: token, formData });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="type">Type: </label>
                <input type="text" name="type" value={formData.type} onChange={handleChange} />

                <label htmlFor="amount">Amount: </label>
                <input type="text" name="amount" value={formData.amount} onChange={handleChange} />

                <label htmlFor="description">Description: </label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} />

                <label htmlFor="date">Date: </label>
                <input type="text" name="date" value={formData.date} onChange={handleChange} />
            </form>
        </div>
    )
}
export default ExpenseForm;