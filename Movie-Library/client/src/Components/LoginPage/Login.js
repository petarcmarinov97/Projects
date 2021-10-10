import React from "react";
import '../../Styles/LoginPage/Login.css';
import { auth } from '../../utils/firebase';



const Login = ({history}) => {

    const onLoginSubmitHandler = (e) =>{
        e.preventDefault();
    
        const email=e.target.email.value;
        const password=e.target.password.value
    
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
               history.push('/');
            })
    }

    return (
    <form onSubmit={onLoginSubmitHandler}>
        <div className="containerLogin">
        <h1>Login</h1>
        <p>Please fill in this form to create an account.</p>
        <hr/>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Enter Email" name="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password" name="password" id="password" required/>
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