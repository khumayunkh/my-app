import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ItemsThunk } from "../../redux/ItemsReducer";

function Products(){
    const dispatch = useDispatch()
    
    const Data = useSelector((state) => state.Products.datat)
    const isLoading = useSelector((state) => state.Products.isLoading)

    // useEffect(()=>{
    //     dispatch(ItemsThunk({data: image}))
    // })

    return(
        <div>
            {/* { dispatch(ItemsThunk({data: image}))} */}
        </div>
    )
}

export default Products