import Reacr from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <Link to="/">Add Restaurent</Link>
            <Link to="/signin">Signin</Link>
            <Link to="/signup">Signup</Link>
        </div>
    );
}