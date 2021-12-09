import React from "react";
import { Link } from 'react-router-dom';

function LandingPage(){

    return(
        <div>
            <div>
                <h1>Landing Page</h1>
                <Link to = "/signUp"><button>Log-Out</button></Link>
            </div>
        </div>
    )
}

export default LandingPage;