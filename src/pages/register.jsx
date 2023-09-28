import React from "react";
import { Link } from "react-router-dom";
import { SignIn } from 'phosphor-react';
export default function Register(){
    return(
        <div>
            <Link to="/signin">Signin</Link>
            <Link to="/signup">Signup</Link>
        </div>
    );
}