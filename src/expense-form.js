import axios from "axios"
import { useState } from "react"
import { useHistory,useLocation } from "react-router-dom";
const local = require("localStorage")
const URL = process.env.REACT_APP_URL;
const INITIAL_VAL = { name: "", type: "", amount: "", description: "", date: "" }

const ExpenseForm = () => {
    const history = useHistory();
    const location = useLocation();
    const [formData, setFormData] = useState(INITIAL_VAL);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    const handleAdd = async (e) => {
        e.preventDefault();
        const value = local.getItem("token")
        const config = { headers: { token: value } }
        await axios.post(`${URL}/expense-form`, { formData }, config);
        setFormData(INITIAL_VAL)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const value = local.getItem("token")
        const config = { headers: { token: value } }
        await axios.post(`${URL}/expense-form`, { formData }, config);
        if(location.search.includes('q=test')){
            history.push('/credit-form?q=test')
        }else{
            history.goBack();
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Expenses</h2>
                <div className="boxes">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <label htmlFor="name">Name: </label>
                </div>
                <div className="boxes">
                    <input type="text" name="type" value={formData.type} onChange={handleChange} />
                    <label htmlFor="type">Type: </label>
                </div>
                <div className="boxes">
                    <input type="text" name="amount" value={formData.amount} onChange={handleChange} />
                    <label htmlFor="amount">Amount: </label>
                </div>
                <div className="boxes">
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                    <label htmlFor="description">Description: </label>
                </div>
                <div className="boxes">
                    <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    <label htmlFor="date">Date: </label>
                </div>
                <button type="button" onClick={handleAdd}>Add</button>
                <button type='submit'>Submit</button>
            </form>
        </div >
    )
};
export default ExpenseForm;