import React from "react";
import Landingpagelogo from "../images/landing.avif"
import Header from "./header";
import { Box, Grid } from "@mui/material";

export default function Landingpage(){
    return(
        <div className="head">
            <div style={{ margin:"10px",backgroundSize: "contain",height:"350px", backgroundRepeat: "no-repeat",backgroundImage: `url(${Landingpagelogo})`}}>
            <Header/>
            </div>
            <Box>
            <Grid item xs={6}>
            <p>hello</p>
            </Grid>
            <Grid item xs={6}>
                <img style={{width:"20px",height:"50%"}} src={Landingpagelogo}/>

            </Grid>
            </Box>

             
             
        </div>
    );

}