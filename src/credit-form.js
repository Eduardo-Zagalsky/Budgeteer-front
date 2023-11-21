import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const local = require("localStorage");
const URL = process.env.URL;
const INITIAL_VAL = { creditor: "", type: "", limit: "", balance: "", interestRate: "", dueDate: "" };

const CreditForm = () => {
    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_VAL);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = local.getItem("token")
        await axios.post(`${URL}/credit-form`, { headers: token, formData });
        history.push('/account-form');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="creditor">Creditor: </label>
                <input type="text" name="creditor" value={formData.creditor} onChange={handleChange} />

                <label htmlFor="type">Type: </label>
                <input type="text" name="type" value={formData.type} onChange={handleChange} />

                <label htmlFor="limit">Limit: </label>
                <input type="text" name="limit" value={formData.limit} onChange={handleChange} />

                <label htmlFor="balance">Balance: </label>
                <input type="text" name="balance" value={formData.balance} onChange={handleChange} />

                <label htmlFor="interestRate">Interest Rate: </label>
                <input type="text" name="interestRate" value={formData.interestRate} onChange={handleChange} />

                <label htmlFor="dueDate">Due Date: </label>
                <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />

                <button type='submit'>Add</button>
            </form>
        </div >
    )
};
export default CreditForm;