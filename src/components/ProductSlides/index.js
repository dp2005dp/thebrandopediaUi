import {useState} from "react";
import "./index.css";


const productItems = [
    {
        id: 1,
        image: "/images/2.jpeg",
        alt: "product1"
    },
    {
        id: 2,
        image: "/images/7.jpeg",
        alt: "product2"
    },
    {
        id: 3,
        image: "/images/4.jpeg",
        alt: "product3"
    }
]

const ProductSlides = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const lastIndex = productItems.length - 1;

    const increaseIndex = () => {
        setCurrentIndex((prevIndex => prevIndex  === lastIndex ? 0 : prevIndex + 1))
    }
    
    const decreaseIndex = () => {
       setCurrentIndex((prevIndex => prevIndex  === 0 ? lastIndex : prevIndex - 1))
        
    }

     
    console.log(currentIndex)
     return (
    <div className="slide-container">
    
    <div className="arrow-container" onClick={increaseIndex}>
    <img src="iconsAndlogs/1.svg" className="arrow-icon" alt="left arrow" />
    </div>

    <img src={productItems[currentIndex].image} className="product-image" alt={productItems[currentIndex].alt} />

    <div className="arrow-container" onClick={decreaseIndex}>
    <img src="iconsAndlogs/2.svg" className="arrow-icon" alt="right arrow" />
    </div>
   
    </div>

)
}

export default ProductSlides;