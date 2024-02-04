const local = require("localStorage");

const Logout = () => {
    //clear all the data from local storage
    local.removeItem('token');
    local.setItem("token", "undefinded");
    setTimeout(history.push('/'), 5000)
    return (
        <div>
            <h1>Logged out!</h1>
            <blockquote>Thank you, logging out now!</blockquote>
        </div>
    )
}
export default Logout;
