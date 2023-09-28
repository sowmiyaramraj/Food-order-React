import React,{useContext} from "react";
import {Products} from "../component/products";
import { ShopContext } from "../context/shop-context";
import { CartItem } from "./cartitem";
import { useNavigate } from "react-router-dom";

export const Cart=()=>{
    const navigate=useNavigate();
    const {cartItem,addtocart,gettotalcartamount}=useContext(ShopContext);
    const totalamount=gettotalcartamount();
    return(
        <div>
            <div>
           {Products.map((product=>{
            
            if(cartItem[product.foodId] !== 0){
                return <CartItem data={product}/>
            }
           }))}
           </div>
           <div>
             <p>Subtotal: {totalamount}</p>
             <button onClick={()=>navigate("/home")}>Continue Shopping</button>
             <button>Place Order</button>
           </div>


        </div>
        );
}
