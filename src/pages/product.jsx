import React, { useContext, useState } from "react";
import { ShopContext } from "../context/shop-context";
import { Card, CardContent,Typography,CardHeader, CardMedia } from "@mui/material";

export const Product=(props)=>{
    const {cartItem,addtocart,addtowishlist}=useContext(ShopContext);
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
                    <CardHeader title={foodName} subheader={foodPrice}/>
                    <Typography  variant="body2" color="text.secondary">
                        {foodDescription}₹
                    </Typography>
                    <button className="addtocart" onClick={()=>addtocart(foodId)}>
                        Add to cart{amount>0 && <>({amount})</>}
                </button>
                <button onClick={(e)=>addtowishlist(e,foodId)} >add to wishlist</button>
                    
                </CardContent>
            </Card><br/>
            
            <div>
        
                
                    
            </div>

           
        </div>
    );
}