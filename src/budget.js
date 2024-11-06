import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const local = require("localStorage");
const URL = process.env.REACT_APP_URL
let resp;
let income;
let totalExpense;
let DTI;

const Budget = () => {
    const history = useHistory()
    const [budget, setBudget] = useState(null);
    useEffect(() => {
        async function getBudget() {
            const value = local.getItem("token")
            if (value != null) {
                resp = await axios.get(`${URL}/expense`, { headers: { token: value } });
            }
            setBudget(resp.data[1]);
            income = resp.data[0]
            totalExpense = resp.data[2]
        }
        getBudget();
    }, []);
    DTI = ((totalExpense / income) * 100).toFixed(2);
    const handleClick = () => {
        history.push("/expense-form")
    }
    return (
        <div>
            {budget != null ?
                <table>
                    <thead><th colSpan={2}>Expenses</th></thead>
                    <tbody>
                        {budget.map((expense) => <tr><td>{expense['name']} </td><td>{expense.amount}</td></tr>)}
                    </tbody>
                </table>
                : <div></div>}

            <button id="toForm" onClick={handleClick}>Add</button>

            <p>Ideally you would want your expenses to be less than 45% of your income, so let's try to come up with some ways to make that true!
                Let's see your expenses and decide which of these you could cut back on to try to get on the best path to financial freedom.</p>
            <p>Your income is <b>{income}</b> and your expenses are <b>{totalExpense}</b>.</p>
            <h4>Currently your DTI is {DTI}%</h4>
        </div>
    )
}
export default Budget;