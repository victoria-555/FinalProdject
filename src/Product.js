import React from 'react'
import { useHistory } from 'react-router'

function Product ({id,title,image,description,price,handleAddProduct,collection}){
    const history = useHistory()

    function handleClick(){
        history.push(`/product/${id}`,{
            id,
            title,
            description,
            price,
            image,
            collection
        })

    }
    
    return(
        <>
            <div className="catalog_item_img">
                 <img src={image}/>
            </div>
            <div className="catalog_caption">
            <div className="catalog_caption_name" onClick={()=>{handleClick()}}>{title}</div>
            <div className="catalog_caption_collection">Коллекция {collection}</div>
           
            <div className="catalog_caption_price">{price} $</div>
            <button className="catalog_caption_btn" data-id={id} onClick={(event)=>{handleAddProduct(event)}}>+</button>
            </div>
        </>
    )
}

export default Product