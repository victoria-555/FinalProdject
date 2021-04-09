import React, {Fragment, useContext, useEffect, useState } from 'react'
import '../style/catalog.css'
import Products from "./Products";
import Context from './Context';
import Preload from './Preload';
import UnionContext from './UnionContext'
import FilterModul from './FilterModul'
import Search from './Search'

function Catalog(){
  const ul = React.useRef();
  const {basketProduct, setBasketProduct} = useContext(UnionContext)  
 
  const [products, setProducts] = useState([])
  const [prelaod, setPrelaod] = useState(true)
  const [filter, setFilter] = useState(false)


  useEffect(()=>{
    fetch('./data.json')
            .then(res=>res.json())
            .then(json=>{
              setProducts(json)
              localStorage.setItem('defaultProducts', JSON.stringify(json))
              setPrelaod(false)
            })
  },[])

  


  function heandlerNextPrev(direction){
    const ulWidth = ul.current.offsetWidth;
    const li = [...ul.current.getElementsByTagName('li')];
    const liFirst = li[0].offsetWidth;
    const liFirstitem = li[0];
    const liFirst_mr = parseInt(window.getComputedStyle(li[0]).getPropertyValue('margin-right'))
    const liFirstFull_width = liFirst_mr + liFirst

    let liFirst_ml = Math.abs(parseInt(window.getComputedStyle(li[0]).getPropertyValue('margin-left')))
  
    let ml = 70;
    let breakPoint = li.length*liFirstFull_width - ulWidth
  
    if(liFirst_ml < breakPoint - liFirstFull_width ){ml = liFirst_ml + liFirstFull_width*(direction == 'prev'? -1 : 1);
    } 
    
    liFirstitem.style.marginLeft = `-${ml}px` ;

  }

  function handleAddProduct(event){
    const id = +event.target.dataset.id
      products.forEach((product)=>{
        let flag = true; 
        if(product.id === id){  
                   
           if(basketProduct?.length == 0){
             product.count = 1;
             basketProduct.push(product)
           }else{
            basketProduct.forEach((basketItem)=>{
                  if(basketItem.id == id){                      
                        basketItem.count +=1;
                        flag = false
                        }})

              if(flag){
                product.count = 1;
                console.log(product)
                basketProduct.push(product)              
                
              }
           
           }
         }
      })

      localStorage.setItem('basket',JSON.stringify(basketProduct))
      
     setBasketProduct([...basketProduct])
   

     
     

  }
  
  return(
      <Fragment>
      
            <div className="main_header">
            
            <div className="main_filter">
              <div className="main_filter_name">Наш каталог</div>
              <button className="main_filter_btn" onClick={()=>{setFilter(true)}}><span className="main_filter_logo"></span></button>
            {filter == true? <FilterModul setFilter={setFilter}/> :''}
            </div>
           
            
            <Search />
          </div>
          <div className="catalog">
            {prelaod ?<Preload/>:<ul ref={ul} className="catalog_items">
              <Context.Provider value={{products, handleAddProduct, setProducts}}>
                  <Products />
              </Context.Provider>
            </ul> }            
            
          </div>
          <div className="main_nav">
              <button className="btn_prev" onClick={()=>{heandlerNextPrev('prev')}} ><span className="btn_arrow">&#8592;</span></button> 
              <button className="btn_next" onClick={()=>{heandlerNextPrev('next')}}><span className="btn_arrow">&#8594;</span></button>             
            </div>
    </Fragment>
    )
}

export default Catalog