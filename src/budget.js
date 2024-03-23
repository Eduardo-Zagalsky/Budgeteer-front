import axios from "axios";
import { useState, useEffect } from "react";
const local = require("localStorage");
const URL = process.env.REACT_APP_URL
let resp;

const Budget = () => {
    const [budget, setBudget] = useState(null);
    useEffect(() => {
        async function getBudget() {
            const value = local.getItem("token")
            if (value != null) {
                resp = await axios.get(`${URL}/expense`, { headers: { token: value } });
            }
            setBudget(resp);
        }
        getBudget();
    }, []);
    return (
        <div>
            <p>Your income is <b>${budget.name}</b> and your expenses are <b>${budget.amount}</b>.</p>
            <h4>Currently your DTI is {(budget.amount * 100)}%</h4>
            <p>Ideally you would want your expenses to be less than 45% of your income, so let's try to come up with some ways to make that true!
                Let's see your expenses and decide which of these you could cut back on to try to get on the best path to financial freedom.</p>
        </div>
    )
}
export default Budget;