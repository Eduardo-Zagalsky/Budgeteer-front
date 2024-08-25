import axios from "axios";
import { useState, useEffect, useContext } from "react";
import UserContext from "./context";
const local = require("localStorage");
const URL = process.env.REACT_APP_URL;
let resp = null

// user=data[0];
// expenses=data[1][0];
// credit=data[2][0];
// account=data[3][0];

const Home = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getData() {
            const value = local.getItem("token")
            if (value != null) {
                resp = await axios.get(`${URL}/home`, { headers: { token: value } });
                setData(resp.data);
            }
        }
        getData();
    }, []);
    let user = useContext(UserContext)
    return (
        <div>
            {user['user'] !== null && data !== null ?
                <div><h1>Hello {user["user"].full_name}!</h1>
                    <ul>
                        <h3>Your finances:</h3>
                        <li>Income: {data[3][0].balance}</li>
                        <li>Expenses: {data[1][0].amount}</li>
                    </ul>
                </div>
                : <h1>Welcome!</h1>}
        </div>
    );
}
export default Home;