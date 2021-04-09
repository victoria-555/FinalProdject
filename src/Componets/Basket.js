import React,{useState,useEffect,useContext} from 'react'
import '../style/style.css'
import UnionContext from './UnionContext'


function Basket(){
    const [basket,setBasket] = useState([])
    const {basketProduct, setBasketProduct} = useContext(UnionContext)  
 
    useEffect(()=>{
        const basketProduct = JSON.parse( localStorage.getItem('basket') || [])
         setBasket(basketProduct)
        
      
      },[])

      useEffect(()=>{
        localStorage.setItem('basket' ,JSON.stringify(basket))  
        setBasketProduct(basket)  
      },[basket])


    const removeItem=(id)=>{
        setBasket(prev => prev.filter(item => item.id !== id))   
        
    }

   function getSumm(arr){
        let summ = 0;
      
            arr.forEach((product) => {
              summ += product.summ
            });
            
            return summ
    }




    if(basket.length === 0){
        return(
         <div className='wrapper_basket'>
            <h1>Корзина пуста</h1>
            <hr />
         
         </div>
        )
    }

    
    
    return(
        <div className='wrapper_basket'>
        <h1>Моя корзина</h1>
        <hr />
       {basket.map(item=>{

         return(
            
            <div className = "basket_item_wrapper" key={item.id}>
                <div>
                    <img src={`.${item.image}`}/>
                    <h2 className = "basket_item_title">{item.title}</h2>
                </div>
                <div className = "basket_item_wrapper2">
                    <p>Цена: {item.price} $ </p>
                    <div>Количество: {item.count}</div>
                    <hr />
                    <div>Стоимость: {item.summ = item.count * item.price} $ </div> 
                    <button className='btn_delete' onClick={()=> removeItem(item.id)}>DELETE</button>
                   
                </div>
                
            </div>      
        )
        })}
            <hr />
            <div  className='total_price'>Общая сумма:<b> {getSumm(basket)} $</b></div>
      
            
       </div>
    )
}

export default Basket