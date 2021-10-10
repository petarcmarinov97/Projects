import React from "react";
import { Redirect } from "react-router";
import '../../Styles/RegisterPage/Register.css';
import { auth } from '../../utils/firebase'

const Register = ({history,isAuthenticated}) => {
    const onRegisterSubmitHandler = (e) => {

    const email = e.target.email.value;
    const password = e.target.password.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            history.push('/')
        })
}

    return (

        <section>
            {isAuthenticated
            ? history.push('/')
            : <form onSubmit={onRegisterSubmitHandler}>
            <div className="containerRegister">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>
            <label htmlFor="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" id="email" required />
            <label htmlFor="password"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" id="password" required/>
            <label htmlFor="repreatPassword"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="repeatPassword" id="repeatPassword" required/>
            <hr />
            <button type="submit" className="registerbtn">Register</button>
            </div>
    
            <div className="container signin">
            <p>Already have an account? <a href="/login">Login</a>.</p>
            </div>  
        </form>}
        </section>
    );
}
 
export default Register;