import { useState } from "react";
import "./Carousel.css"
import { CarouselData } from "./CarouselData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from  "react-icons/fa"

const Carousel = ({slides}) => {
 
    const [slide,setSlide] = useState(0)
    const length = slides.length

 if (!Array.isArray(slides) || slides.length<=0 ){
    return null
 }

function nextSlide() {
    setSlide( slide === length - 1 ? 0: slide + 1)
    console.log(slide)
    
}
function previousSlide() {
    setSlide( slide === 0 ? length - 1 : slide - 1 )
    console.log(slide)
}

    return (
    <div className="Carousel-Container">      
    <h2>Testimony</h2>
    <div className="Carousel">
        <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide}/>
      {CarouselData.map((testimony,index)=>{
          return (
              <section className={index === slide ? "slide-active" : "slide" } key={index}>
                {index === slide && <><img src={testimony.urlImg} alt="testimony" className="img-slider"/>
                <p>{testimony.name}</p>
                <p>{testimony.testimony}</p>
                </>
                }
            
            </section>
        )
    })} 
    < FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
    </div>
    </div>
        );
}
 
export default Carousel;