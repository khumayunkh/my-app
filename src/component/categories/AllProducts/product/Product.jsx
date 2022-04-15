import {useState} from 'react'
import style from './product.module.css'

export function Product(props) {
   
    const [visible, setVisible] = useState(4) 

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 1)
    }

    const closeItems = () =>{
        setVisible((prevValue)=> prevValue - 1)
    }
    return (
        <>
             <div className={style.container}>
                <h1 className={style.title}> {props.title}</h1>
                <div>     
                  <button className={style.btn} onClick={showMoreItems}>See More</button>
                  <button className={style.btn} onClick={closeItems}>Close</button>
                </div>
            </div>
        {
            props.data.slice(0, visible).map(
                (item) => (
                        <img className={style.img}  src={item.image}/>
                )
            )
        }
        </>
    )
}
