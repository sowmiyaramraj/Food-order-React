import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { Card } from "@mui/material";
import axios from "axios";
import "./pages.css";
export default function Signin(){
    const navigate=useNavigate();
    const [formdata,setFormdata]=useState({
        email:"",
        password:"",
    });
    const handlesubmit=async(e)=>{
        e.preventdefault();
        // const responce=await axios.post("http://localhost:3001/register/signin",{...formdata});
        // if(responce.data){
            
        // }
        navigate("/");
        
    }
    return(
        <div className="Signin">

            <Card className="card">
                <form className="form" onSubmit={()=>navigate("/home")}>
                    <lable className="text">Signin</lable>
                    <input className="field" name="email" type="email" value={formdata.email} placeholder="Email"
                    onChange={(e)=>setFormdata({...formdata,email:e.target.value})}></input><br/>
                    <input className="field" name="password" type="password" value={formdata.password} placeholder="password"
                    onChange={(e)=>setFormdata({...formdata,password:e.target.value})}></input><br/>
                    <button className="submit" type="submit">Submit</button>
                </form>
                <p>or</p>
                <p>Don't have account <Link to="/signup">Signup</Link></p>
            </Card>

        </div>
    );
}