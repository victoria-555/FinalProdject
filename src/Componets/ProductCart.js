import React from 'react'
import { useHistory } from 'react-router'
import Slider from './Slider'



function ProductCart({location:{state:{id,title,description,price,image}}}){
    
    
    const directoryName = title;
    console.log(directoryName);



 const images= [
  <img src={`../img/${directoryName}/1.jpg`} key='slide1'/>,
  <img src={`../img/${directoryName}/2.jpg`} key='slide2'/>,
  <img src={`../img/${directoryName}/3.jpg`} key='slide3'/>,


 ]
   

    const history = useHistory()

    function returnHome(){
        history.push('/catalog');

    }

    return(

        <div className = "product_cart_wrapper">
        <button  className = "product_cart_btn"onClick={()=>{returnHome()}}>&#8592; В КАТАЛОГ</button>
            <h2 className = "product_cart_title">{title}</h2>
            < Slider images ={images}/>
            <p className = "product_cart_desc"> Свадебное платье {title}<br />{description}</p>
            
        
        </div>
    )
}

export default ProductCart