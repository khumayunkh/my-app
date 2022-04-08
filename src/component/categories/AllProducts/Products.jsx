import { applyMiddleware } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useEffect, useState } from "react";

export function Products(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/`)
        .then((res)=>{
            setProducts(res.data)
        })
    },[])
    return(
        <div>
            {products.map((products)=>{
               <img src={products.image} />                 
            })}    
        </div>
    )
}