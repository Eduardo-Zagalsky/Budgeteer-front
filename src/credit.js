import axios from "axios";
import { useState, useEffect } from "react";
const local = require("localStorage");
const URL = process.env.REACT_APP_URL;
let resp;

const Credit = () => {
    const [credit, setCredits] = useState();
    useEffect(() => {
        async function getCredit() {
            const value = local.getItem("token")
            if (value != null) {
                resp = await axios.get(`${URL}/credit`, { headers: { token: value } });
            }
            setCredits(resp.data);
        }
        getCredit();
    }, []);
    return (
        <div>
            <h1>Credit</h1>
            {credit != null ?
                <table>
                    <thead><th>Accounts</th></thead>
                    <tbody>
                        {credit.map((item) => {
                            <tr>
                                <th>name:{item.ownerId}</th>
                                <td>account:{item.id}</td>
                                <td>creditor:{item.creditor}</td>
                                <td>type:{item.type}</td>
                                <td>balance:{item.balance}</td>
                                <td>limit:{item.limit}</td>
                                <td>interest_rate:{item.interest_rate}</td>
                                <td>due_date:{item.due_date}</td>
                            </tr>
                        })}
                    </tbody>
                </table> : <div></div>}
            <hr />
            <blockquote>
                If you plan on borrowing money, whether a fixed loan or a revolving loan(credit cards) here are somethings to know.
                Every time a Creditor runs your Credit, it counts as a hard inquiry and hard inquiries go on your record and will lower your score,
                they will disappear on their own after 2 full years.
            </blockquote>
            <br />
            <h4>Credit Cards</h4>
            <p>Revolving Lines of Credit, such as credit cards and lines of credit, allow  you to spend more than once and only pay interest on what you spend.
                The most important thing to know here is that Credit Bereaus only see your credit once per month, when your creditors report it.
                So there is a strategy to maximize your credit impact, figure out the due date and plan payments around it.</p>
            <br />
            <h4>Loans</h4>
            <p>Fixed Loans you receive a fixed amount once and pay it back over a certain time period</p>
            <b>The most important thing happens when you pay it off!</b>
            <p>When the loan is fully paid off, it disappears from your credit history for about 3 months while the history of the loan is analyzed.
                After, the loan will appear on your credit history as a closed loan and it will prove that you paid off a loan in it's entirity.</p>
        </div>
    )
}

export default Credit;