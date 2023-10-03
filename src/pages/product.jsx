import React, { useContext, useState } from "react";
import { ShopContext } from "../context/shop-context";
import { Card, CardContent,Typography,CardHeader, CardMedia, Grid } from "@mui/material";

export const Product=(props)=>{
    const {cartItem,addtocart}=useContext(ShopContext);
    const {foodName,foodId,foodImage,foodPrice,foodDescription}=props.data;
    const amount=cartItem[foodId];

    return(
        <div>
           
            <Card style={{ maxWidth: 345,height:"fitContent"}}>
                <CardContent>
                    <CardMedia
                    component="img"
                    height="194"
                    image={foodImage}
                    alt={foodName}/>
                    <CardHeader title={foodName}/>
                    <Typography  variant="body2" color="text.secondary">
                        {foodDescription}<br/>
                        ₹{foodPrice}
                    </Typography>
                    <button className="addtocart" onClick={()=>addtocart(foodId)}>
                        Add to cart{amount>0 && <>({amount})</>}
                </button>
                    
                </CardContent>
            </Card><br/>
        </div>
    );
}