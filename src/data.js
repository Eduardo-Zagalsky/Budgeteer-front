import { useState, useEffect } from "react";
const local = require("localStorage")
const URL = process.env.FULL_URL;
const Data = () => {
    const [data, setData] = useState(null);
    let currUser = local.getItem("token")
    if (currUser.username == "admin") {
        async function getData() {
            setData(await axios.get(`${URL}/data`))
        }
        return (
            <div>
                <table>
                    <thead>User</thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Income</th>
                        <th>Credit Score</th>
                    </tr>
                    <tr>
                        <td>{data.user.id}</td>
                        <td>{data.user.name}</td>
                        <td>{data.user.email}</td>
                        <td>{data.user.username}</td>
                        <td>{data.user.income}</td>
                        <td>{data.user.creditScore}</td>
                    </tr>
                </table>
                <table>
                    <thead>Accounts</thead>
                    <tr>
                        <th>Account ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Balance</th>
                        <th>Owner ID</th>
                    </tr>
                    <tr>
                        <td>{data.account.id}</td>
                        <td>{data.account.name}</td>
                        <td>{data.account.type}</td>
                        <td>{data.account.balance}</td>
                        <td>{data.account.ownerId}</td>
                    </tr>
                </table>
            </div>
        )
    } else {
        return (
            <div>
                <h1>You are not authorized to view this data!</h1>
            </div>
        )
    }
}
export default Data;