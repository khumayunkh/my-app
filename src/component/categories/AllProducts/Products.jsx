import axios from "axios";
import React, { useEffect, useState } from "react";
import {Product} from './Product'

function fetchProducts(category){
   return  axios.get(`https://fakestoreapi.com/products/category/${category}`)
}

const CATEGORIES = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
]


function ProductsDashboard(){
    const [products, setProducts] = useState([])
    useEffect( () => {
        let responseProducts = []
        CATEGORIES.map(category => {
            fetchProducts(category).then((response) => {
                responseProducts.push({title: category, data: response.data})
                setProducts([...responseProducts])
            })
        })
        
    }, [])

    return(
        <div>

            {products && products.map((product)=>(
                    <Product title={product.title} data={product.data}/>
                 ))}
        </div>
    )
}

export default ProductsDashboard