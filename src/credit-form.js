import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const local = require("localStorage");
const URL = process.env.REACT_APP_URL;
const INITIAL_VAL = { creditor: "", type: "", limit: "", balance: "", interestRate: "", dueDate: "" };

const CreditForm = () => {
    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_VAL);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    const handleAdd = async (e) => {
        e.preventDefault();
        const value = local.getItem("token")
        const config = { headers: { token: value } }
        await axios.post(`${URL}/credit-form`, { formData }, config);
        setFormData(INITIAL_VAL)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const value = local.getItem("token")
        const config = { headers: { token: value } }
        await axios.post(`${URL}/credit-form`, { formData }, config);
        history.goBack();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Debts</h2>
                <div className="boxes">
                    <input type="text" name="creditor" value={formData.creditor} onChange={handleChange} />
                    <label htmlFor="creditor">Creditor: </label>
                </div>
                <div className="boxes">
                    <input type="text" name="type" value={formData.type} onChange={handleChange} />
                    <label htmlFor="type">Type: </label>
                </div>
                <div className="boxes">
                    <input type="text" name="limit" value={formData.limit} onChange={handleChange} />
                    <label htmlFor="limit">Limit: </label>
                </div>
                <div className="boxes">
                    <input type="text" name="balance" value={formData.balance} onChange={handleChange} />
                    <label htmlFor="balance">Balance: </label>
                </div>
                <div className="boxes">
                    <input type="text" name="interestRate" value={formData.interestRate} onChange={handleChange} />
                    <label htmlFor="interestRate">Interest Rate: </label>
                </div>
                <div className="boxes">
                    <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
                    <label htmlFor="dueDate">Due Date: </label>
                </div>
                <button type="button" onClick={handleAdd}>Add</button>
                <button type='submit'>Submit</button>
            </form>
        </div >
    )
};
export default CreditForm;