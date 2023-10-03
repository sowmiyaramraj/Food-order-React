import React from "react";
import Landingpagelogo from "../images/landing.avif"
import Header from "./header";
import { Box, Grid } from "@mui/material";
import Footer from "./footer";

export default function Landingpage(){
    return(
        <div className="head" style={{width:"100%",margin:"10px",height:"350px"}}>
         <Header/> 
         <img style={{maxWidth:"1000px"}} src={Landingpagelogo}/>
         <Footer/>
        </div>
    );

}