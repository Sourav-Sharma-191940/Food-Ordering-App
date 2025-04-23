import {useState} from 'react'
import { SITE_LOGO } from "../utils/constants";

const Header = () => {
    const [loginButton, setLoginButton] = useState("Login")
    return (
        <div className="header">
            <div>
                <img
                    className="logo"
                    src = {SITE_LOGO}
                />
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Food</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{loginButton==="Login" ? setLoginButton("Logout") : setLoginButton("Login")}}>
                    {loginButton}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;