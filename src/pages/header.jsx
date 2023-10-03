import Reacr from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div style={{background:"grey",height:"50px"}}>
            <Link style={{fontSize:"22px",color:"purple"}} to="/">Add Restaurent</Link> &nbsp;
            <Link style={{fontSize:"22px",color:"purple"}} to="/signin">Signin</Link>&nbsp;&nbsp;
            <Link style={{fontSize:"22px",color:"purple"}} to="/signup">Signup</Link>
        </div>
    );
}