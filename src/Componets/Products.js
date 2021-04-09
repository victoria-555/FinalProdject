import React, { Fragment, useContext, useEffect } from 'react'
import Context from './Context'
import Product from '../Product'
import UnionContext from './UnionContext'

function Products(){
     const {products, handleAddProduct, setProducts} = useContext(Context)
     const {search, radio} = useContext(UnionContext)
     const defaultProducts = JSON.parse(localStorage.getItem('defaultProducts'))

     useEffect(()=>{
       if(radio =="abs"){
         products.sort((a,b)=>{
           return a.price - b.price
         })
         setProducts([...products])
       }else if(radio =="desc"){
        products.sort((a,b)=>{
          return b.price - a.price 
        })
        setProducts([...products])
       }else if(radio == 'default'){
        setProducts([...defaultProducts])
       }
     },[radio])




    return(
        <Fragment>
        
        {products.filter((item)=>{
          if(search == ''){
            return item
          }else if(item.title.toLowerCase().includes(search.toLowerCase())){
            return item
          }
          else if(item.collection.toLowerCase().includes(search.toLowerCase())){
            return item
          }
        }).map((product, index)=>{
        return(
         <li className="catalog_item" key={index+new Date().getMilliseconds()}>
             <Product 
                id={product.id}
                title ={product.title}
                image ={product.image}
                collection = {product.collection}
                description ={product.description}
                price ={product.price}
                handleAddProduct={handleAddProduct}            
             
             />
        </li> 
        )
    })}
        
      </Fragment>    
    )
}

export default Products