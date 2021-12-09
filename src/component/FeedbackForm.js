import React, { useState } from "react";
import axios from "axios";

import classes from './FeedbackForm.module.css'
import Modal from './Modal'
import LandingPage from './LandingPage'
import Backdrop from './Backdrop'

function FeedbackForm(){

    const [buttonState, setButtonState] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [login, setLogin] = useState(false)

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");

    const registerHandler = async () => {

        const user = {email,password, name, mobile};

        axios.post("https://ttmg-backend.herokuapp.com/api/auth/staffRegister", user)
            .then(res => {
                if(res.status === 200){
                    setLogin(true);
                }
            }).catch(error => {
                setErrorMessage(error.message);
            })
    }

    const loginHandler = async () => {

        let item = {email, password};

        axios.post("https://ttmg-backend.herokuapp.com/api/auth/staffLogin", item)
            .then(res => {
                if(res.status === 200){
                    setLogin(true);
                }
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    const errorDeletehandler = () => {
        setErrorMessage("")
    }

    let Inputs = (
        <>
            <Backdrop 
                show = {errorMessage !== ""}
                errorDeletehandler = {errorDeletehandler}/>
            <p>Name:</p>
            <input 
                type='text' 
                placeholder = " Full Name"
                onChange = {(event) => setName(event.target.value)}
                />                
            <p>Phone Number:</p>
            <input 
                type='tel'
                placeholder = " Phone Number"
                onChange = {(event) => setMobile(event.target.value)}
                />
            <p>Email Address:</p>
            <input 
                type='email'
                onChange = {(event) => setemail(event.target.value)}
                placeholder = " Email"
                />
            <p>Password:</p>
            <div className = {classes.tooltip}>
                <input 
                    type='password'
                    onChange = {(event) => setpassword(event.target.value)}
                    placeholder = " Password"
                    />
                <span className = {classes.tooltiptext}>Password length should be more than 8.</span>
            </div>
            <br/>
            <button onClick = {registerHandler}>Sign-Up</button>

            <p style = {{fontSize : "12px"}}>Already have an account ? 
                <span 
                    className = {classes.Option} 
                    onClick = {() => setButtonState(!buttonState)}>
                        Login
                </span>
            </p>
        </>
        
    )

    if(buttonState){
        Inputs = (
            <>
                <Backdrop 
                    show = {errorMessage !== ""}
                    errorDeletehandler = {errorDeletehandler}/>
                <p>Email Address:</p>
                <input 
                    type='email'
                    onChange = {(event) => setemail(event.target.value)}
                    placeholder = " Email"/>
                <p>Password:</p>
                <input 
                    type='password'
                    onChange = {(event) => setpassword(event.target.value)}
                    placeholder = " Password"/>
                <br/>
                <button onClick = {loginHandler}>Login</button>

                <p style = {{fontSize : "12px"}}>Don't have an account ?  
                    <span 
                        className = {classes.Option} 
                        onClick = {() => setButtonState(!buttonState)}>
                             Sign-up
                    </span>
                </p>
            </>
        )
    }

    let MainContent =  null;
    
    if(!login){
        MainContent = (
            <div className = {classes.FeedbackForm}>
                <div className = {classes.InputContainer}>
                    {Inputs}
                </div>
            </div>
        )
    }

    else{
        MainContent = <LandingPage />
    }
    
    return (
        <div>
            <Modal show = {errorMessage !== ""} error = {errorMessage}>
                {errorMessage}
            </Modal>
            {MainContent}
        </div>
    )
    
    
}

export default FeedbackForm;