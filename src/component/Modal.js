import React from "react";
import classes from './Modal.module.css'


const Modal = (props) => {
    let Description = "";

    if(props.error === "Request failed with status code 400"){
        Description = "Entries missing or incorrect"
    }
    else if(props.error === "Request failed with status code 402"){
        Description = "Account already exists."
    }

    return (
        <>
            <div className = {classes.ModalContainer}
            style = {{ transform : props.show ? 'translateY(0)' : 'translateY(-75vh)'}}>
            <h1>Error</h1>
            {props.error}
            <p><strong>{Description}</strong></p>
        </div>
        </>
    )
}

export default Modal