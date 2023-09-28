import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {InstagramLogo,LinkedinLogo,TwitterLogo,YoutubeLogo} from "phosphor-react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function Footer(){
    return(
        <div style={{margintop:"10px"}}>
            <div>
             <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} >
        <Grid item xs={3}>
          <Item>
            <p>ABOUT YOON<br/>
            Who are we<br/>
           Work with us<br/>Contact us
            </p>
          </Item>
        </Grid>
        <Grid item xs={3} >
          <Item>
            <p>
                FOR RESTAURENT<br/>
                Partner with us<br/>
                App with us
            </p>
          </Item>
        </Grid>
        <Grid item xs={3} >
          <Item><p>
            LEARN mORE
            <br/>
            Privacy<br/>Security<br/>Terms</p></Item>
        </Grid>
        <Grid item xs={3} >
            <Item>
                <p>
                    SOCIAL LINKS<br/>
                    <InstagramLogo/>&nbsp;
                    <TwitterLogo/>&nbsp;
                    <YoutubeLogo/>&nbsp;
                    <LinkedinLogo/>&nbsp;

                </p>
            </Item>
        </Grid>
        </Grid>
    </Box>
    </div>
    <div style={{height:"20px",backgroundColor:"black"}}></div>
    </div>
    );
}