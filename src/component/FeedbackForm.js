import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import classes from './FeedbackForm.module.css'
import Modal from './Modal';
import Backdrop from './Backdrop'

function FeedbackForm(){

    const [buttonState, setButtonState] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [login, setLogin] = useState(false)

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");

    console.log("[Form Rendering]")
    console.log("[Login]", login)

    const registerHandler = async () => {
        console.log("[Register Clicked]")

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
        console.log("[Login Clicked]")

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

    let link = "";
    if(login){
        link = "/"
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
                onChange = {(event) => setName(event.target.value)}/>  

            <p>Phone Number:</p>
            <input 
                type='tel'
                placeholder = " Phone Number"
                onChange = {(event) => setMobile(event.target.value)} />

            <p>Email Address:</p>
            <input 
                type='email'
                onChange = {(event) => setemail(event.target.value)}/>

            <p>Password:</p>
            <div className = {classes.tooltip}>
                <input 
                    type='password'
                    onChange = {(event) => setpassword(event.target.value)}
                    placeholder = " Password"
                    />
                <span className = {classes.tooltiptext}>Password length should be more than 8.</span>
            </div> <br/>

            <Link to = {link}><button onClick = {registerHandler}>Sign-Up</button></Link>

            <p style = {{fontSize : "12px"}}>Already have an account ? {" "} 
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
                <Link to = {link}><button onClick = {loginHandler}>Login</button></Link>

                <p style = {{fontSize : "12px"}}>Don't have an account ?  {" "} 
                    <span 
                        className = {classes.Option} 
                        onClick = {() => setButtonState(!buttonState)}>
                             Sign-up
                    </span>
                </p>
            </>
        )
    }
    
    return (
        <div>
            <Modal show = {errorMessage !== ""} error = {errorMessage}>
                {errorMessage}
            </Modal>
            <div className = {classes.FeedbackForm}>
                <div className = {classes.InputContainer}>
                    {Inputs}
                </div>
            </div>
        </div>
    )
    
    
}

export default FeedbackForm;