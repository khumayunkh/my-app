import React from "react";
import style from './header.module.css'


function Header(){
    return(
        <div className={style.Header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <img className={style.logo} src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135331201.jpg"/>
                    <a className={style.menu} href="#">All Categories</a>
                    <a className={style.menu} href="#">Top Categories</a>
                    <a className={style.menu} href="#">Top Deals</a>
                </div>
            </div>
        </div>
    )
}

export default Header