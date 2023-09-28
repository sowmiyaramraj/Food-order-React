import React, {createContext, useContext, useState} from "react";
import {Products }from "../component/products";
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let i=1;i<=Products.length;i++){
        cart[i]=0;   
    }    
    return cart;
}

export const ShopContextProvider=(props)=>{
        const [cartItem,setCartItem]=useState(getDefaultCart());

        const addtocart=(itemid)=>{
            setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}));           
          };
          const removefromcart=(itemid)=>{
            setCartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}));           
          };
          const updatecartitemcount=(newamount,itemid)=>{
            setCartItem((prev)=>({...prev,[itemid]:newamount}));
          }
          const gettotalcartamount=()=>{
            let totalamount=0;
            for(const item in cartItem){
              if(cartItem[item]>0){
                let itemInfo= Products.find((product)=>product.foodId===Number(item));
                totalamount += cartItem[item] * itemInfo.foodPrice;
              }
            }
            return totalamount;

          }
          
    console.log(cartItem);

    const contextvalue={cartItem,addtocart,removefromcart,updatecartitemcount,gettotalcartamount};
   
    return <ShopContext.Provider value={contextvalue}>
        {props.children}</ShopContext.Provider>
}

