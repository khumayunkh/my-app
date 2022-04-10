import axios from "axios";
import React, { useEffect, useState } from "react";

function fetchProducts(categories){

   return  axios.get(`https://fakestoreapi.com/products/category/${categories}`)
}

function Products(){
   
    const [products, setProducts] = useState([])

    useEffect( () => {
        categories.map(categories =>{
            fetchProducts(categories)
            .then ((response) => {
                setProducts([...products, {title:categories, data: response.data}])
            })
        })
    })

    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ]


    return(
        <div>
            {products.map((items)=>(
                    <>
                    <img src={items.data[0].image} alt="" />
                    <Product title={items.categories}/>
                    </>
                 ))}
        </div>
    )
}

export default Products