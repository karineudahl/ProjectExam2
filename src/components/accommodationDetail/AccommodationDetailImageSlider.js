import { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function AccommodationDetailImageSlider( {accommodationDetail} ) {
    const [slideIndex, setSlideIndex] = useState(1); 

    const nextSlide = () => {
        if(slideIndex !== accommodationDetail.attributes.image.data.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === accommodationDetail.attributes.image.data.length) {
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(accommodationDetail.attributes.image.data.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            nextSlide();        
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <>
            <div className="accommodationDetail__imageCarousel">
                {accommodationDetail.attributes.image.data.map((images, index) => (         
                <div key={images.id} className={slideIndex === index + 1 ? "accommodationDetail__imageCarousel-slide-active" : "accommodationDetail__imageCarousel-slide" }>
                    <img src={images.attributes.url}  alt={images.attributes.name} className="accommodationDetail__imageCarousel-images"></img>
                </div>
                ))}          
                <BsArrowRight onClick={nextSlide} className="accommodationDetail__imageCarousel-button right" /> 
                <BsArrowLeft onClick={prevSlide} className="accommodationDetail__imageCarousel-button left"/>
                <div className="accommodationDetail__imageCarousel-dots">
                    {accommodationDetail.attributes.image.data.map((item, index) => (
                    <div key={item.id}>
                        <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "accommodationDetail__imageCarousel-dots-dot active" : "accommodationDetail__imageCarousel-dots-dot"}></div>
                    </div>
                    ))}
                </div>         
            </div>
            <div className="accommodationDetail__imageCarousel-smallimages">
                {accommodationDetail.attributes.image.data.map((images, index) => (
                <div key={images.id}>
                    <img src={images.attributes.url} alt={images.attributes.name} onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "accommodationDetail__imageCarousel-smallimages active" : "accommodationDetail__imageCarousel-smallimages"} ></img>
                </div>
                ))}
            </div>
        </>
    )
}