import React from "react";
import '../../Styles/LoginPage/Login.css';


const Login = () => {
    return (
    <form action="">
        <div className="containerLogin">
        <h1>Login</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" required />
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
        <hr />
        <button type="submit" className="loginbtn">Login</button>
        </div>

        <div className="container register">
        <p>Don't have an account? <a href="/auth/register">Sign up</a>.</p>
        </div>  
    </form>
    );
}
 
export default Login;