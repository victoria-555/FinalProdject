import React,{useState, useEffect} from 'react'

/*const directoryName = 'img'

const images= [
  <img src={`../${directoryName}/slider/1.jpg`} key='slide1'/>,
  <img src={`../${directoryName}/slider/2.jpg`} key='slide2'/>,
  <img src={`../${directoryName}/slider/3.jpg`} key='slide3'/>,
  <img src={`../${directoryName}/slider/4.jpg`} key='slide4'/>,
  <img src={`../${directoryName}/slider/5.jpg`} key='slide5'/>

 
]*/


function Slider(props){
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(()=>{
     setInterval (()=>{
      setActiveIndex(current =>   current === props.images.length - 1 ? 0 : current + 1
  )
      
    },4000)
    return ()=> clearInterval()

  },[])

   const prevIndex = activeIndex ? activeIndex-1 : props.images.length - 1
   const nextIndex = activeIndex === props.images.length - 1 ? 0 :activeIndex + 1


  return(
    <div className="slider_wrapper">
      <div className="slide  slide_prev" key= {prevIndex}>{props.images[prevIndex]}</div>
      <div className="slide" key= {activeIndex}> {props.images[activeIndex]}</div>
      <div className="slide slide_next"  key= {nextIndex}> {props.images[nextIndex]}</div>
    </div>
  )

}
export default Slider