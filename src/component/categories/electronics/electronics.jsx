import axios from "axios";
import React, {useState, useEffect } from "react";
import style from './electronics.module.css'

function Electronics(){
    const [electronics, setElectronics] = useState([])
    const [visible, setVisible] = useState(4) 

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3)
    }

    const closeItems = () =>{
        setVisible((prevValue)=> prevValue - 2)
    }

    useEffect (() => {
        axios.get('https://fakestoreapi.com/products/category/electronics')
        .then((response) => {
            setElectronics(response.data)
        })
    },[])

    return(
        <>
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <h1>Electronics</h1>
                    <button onClick={showMoreItems}>See More</button>
                    <button onClick={closeItems}>Close</button>
                </div>
            </div>
        </div>
        <div className={style.electronics}>
            <div className={style.container}>
            {electronics.slice(0, visible).map((e)=>(
                <div className={style.electronics_in}>
                   <img src={e.image}/>
                </div>
                 ))}
            </div>
        </div>
        </>
    )
}

export default Electronics