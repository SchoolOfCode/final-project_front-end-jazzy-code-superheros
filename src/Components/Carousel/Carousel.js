import { useState } from "react";
import "./Carousel.css"
import { CarouselData } from "./CarouselData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from  "react-icons/fa"

const Carousel = ({slides}) => {
 
    //the use state will be used with the index to move the slides of images
    const [slide,setSlide] = useState(0)
    const length = slides.length

 //this if is to check if the array exists and if so if there is a length
 if (!Array.isArray(slides) || slides.length<=0 ){
    return null
 }
//on click function to move for the next slide
function nextSlide() {
    setSlide( slide === length - 1 ? 0: slide + 1)
    console.log(slide)
    
}

//on click function to move for the previous slide
function previousSlide() {
    setSlide( slide === 0 ? length - 1 : slide - 1 )
    console.log(slide)
}

    return (
    <div className="Carousel-Container">      
    <h2><i>Our community :</i></h2>
    <div className="Carousel">
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide}/>
      {CarouselData.map((testimony,index)=>{
          return (
              <section className={index === slide ? "slide-active" : "slide" } key={index}>
                {index === slide && <><img src={testimony.urlImg} alt="testimony" className="img-slider"/>
                <h3>{testimony.name}</h3>
                <p>{testimony.job}</p>
                <p><i>" {testimony.testimony} "</i></p>
                </>
                }
            
            </section>
        )
    })} 
    </div>
    </div>
        );
}
 
export default Carousel;