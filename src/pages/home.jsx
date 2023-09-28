import React from "react";
import Footer from "./footer";
import {Product} from "./product";
import { Products } from "../component/products";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
export default function Home(){
    return(
        <div>
            <div style={{position: "fixed",width:"100%"}}><Navbar/></div><br/>
            
            <div className="product" style={{marginLeft:"10px",marginTop:"50px"}}>
            {" "}
                {Products.map((product)=>(
                    <Product key={product.productId} data={product}/>
                     
                ))}
            </div>
            <div>
                <Footer/>
            </div>


        </div>
    );
}