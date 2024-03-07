import axios from "axios";
import { useState, useEffect } from "react";
const local = require("localStorage");
const URL = process.env.REACT_APP_URL;
const resp = null
const Home = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function getUser() {
            const value = local.getItem("token")
            if (value != null) {
                resp = await axios.get(`${URL}/`, { headers: { token: value } });
            }
            setUser(resp);
        }
        getUser();
    }, []);
    return (
        <div>
            {user != null ?
                <div><h1>Hello {user.full_name}!</h1>
                    <ul>
                        <h3>Your finances:</h3>
                        <li>Income: {user.income}</li>
                        <li>Expenses: {user.expense}</li>
                        {/* <li>Debts: {user.credit.balance}</li> */}
                    </ul>
                </div>
                : <h1>Welcome!</h1>}
        </div>
    );
}
export default Home;