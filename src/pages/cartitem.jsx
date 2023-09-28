import React,{ useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { Grid,Card,Box, Typography,CardHeader ,CardMedia,CardContent } from "@mui/material";
export const CartItem=(props)=>{
    const {foodName,foodId,foodImage,foodPrice,foodDescription}=props.data;
    const {addtocart,cartItem,removefromcart,updatecartitemcount}=useContext(ShopContext);
    return(
        <div style={{margin:"20px",padding:"20px"}}>                         
            <Card style={{ maxWidth: 345,height:"fitContent"}}>
                  <CardMedia 
                    component="img"
                    height="194"
                    image={foodImage}
                    alt={foodName}/>

                    <CardContent>
                    <CardHeader title={foodName} subheader={foodPrice}/>

                    <Typography  variant="body2" color="text.secondary">
                        {foodDescription}
                                               
                        </Typography>    
                    </CardContent>
                <button onClick={()=>addtocart(foodId)}>+</button>&nbsp;
                <input style={{width:"30px"}} value={cartItem[foodId]} onChange={(e)=>updatecartitemcount(Number(e.target.value) ,foodId)}/>&nbsp;
                <button onClick={()=>removefromcart(foodId)}>-</button>
            </Card>
        </div>
    );
}