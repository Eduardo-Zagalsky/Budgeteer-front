import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const local = require("localStorage");
const URL = process.env.REACT_APP_URL;
const INITIAL_VAL = { name: "", type: "", balance: "" };

const AccountForm = () => {
    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_VAL);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const value = local.getItem("token")
        const config = { headers: { token: value } }
        await axios.post(`${URL}/account-form`, { formData }, config);
        history.push('/expense-form');
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

                <button type='submit'>Add</button>
            </form>
        </div >
    )
};
export default AccountForm;