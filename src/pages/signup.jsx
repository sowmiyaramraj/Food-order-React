import React, { useState } from "react";
import {Card} from "@mui/material";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import "./pages.css";

export default function Signup(){
    const navigate=useNavigate();
    const [formdata,setFormdata]=useState(
        {
            name:"",
            email:"",
            phno:"",
            password:"",
            confirmpassword:"",
        }
    );
    const handlesubmit=async(e)=>{
        e.preventdefault();
        const responce=await axios.post("http://localhost:3001/register/signup",{
            name:formdata.name,
            email:formdata.email,
            phno:formdata.phno,
            password:formdata.password,
            confirmpassword:formdata.confirmpassword,
        })
        setFormdata([...formdata,responce.data]);
        navigate("/");
    }
    return(
        <div className="Signup">
            <Card className="card1">
                <form className="form" onSubmit={()=>navigate("/home")}>
                    <lable className="text">Signup</lable>
                    <input className="field" type="text" name="name" placeholder="Full Name" value={formdata.name} onChange={(e)=>setFormdata({...formdata,name:e.target.value})}></input><br/>
                    <input className="field" type="email" name="email" placeholder="Email" value={formdata.email} onChange={(e)=>setFormdata({...formdata,email:e.target.value})}></input><br/>
                    <input className="field" type="number" name="phno" placeholder="mobile number" value={formdata.phno} onChange={(e)=>setFormdata({...formdata,phno:e.target.value})}></input><br/>
                    <input className="field" type="password" name="password" placeholder="Password" value={formdata.password} onChange={(e)=>setFormdata({...formdata,password:e.target.value})}></input><br/>
                    <input className="field" type="password" name="confirmpassword" placeholder="Re-enter Password" value={formdata.confirmpassword} onChange={(e)=>setFormdata({...formdata,confirmpassword:e.target.value})}></input><br/>
                    <p>I agree to yoon's 
                        <Link>Terms of Service</Link>, 
                        <Link>Privacy Policy</Link>
                        and <Link>Content Policies</Link>
                    </p>
                    <button className="submit" type="submit">Create account  </button>
                    <p>or</p>
                    <p>Already have a account <Link to="/signin">Signin</Link></p>
                </form>
            </Card>
            

        </div>
    );
}