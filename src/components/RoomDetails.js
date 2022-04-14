import React,{useState,useEffect,useRef}from 'react'
import ReactDOM from 'react-dom'
import classes from "./roomDetails.module.css"
import roomImg from "../images/img-1.jpg"
import roomImg1 from "../images/img-1.jpg"
import roomImg2 from "../images/img-1.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const RoomDetails = ({onClose,id}) => {
        const rooms = [
            {
                id: 1,
                title: "Nykaa Liquid Lipstick",
                discount: 40,
                markedPrice: 900,
                quantity: 8,
            },
            {
                id: 1,
                title: "Nykaa Liquid Lipstick",
                discount: 40,
                markedPrice: 900,
                quantity: 8,
            },
            {
                id: 1,
                title: "Nykaa Liquid Lipstick",
                discount: 40,
                markedPrice: 900,
                quantity: 8,
            },
            {
                id: 1,
                title: "Nykaa Liquid Lipstick",
                discount: 40,
                markedPrice: 900,
                quantity: 8,
            }
        ]
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows:false
        };
        const [product,setProduct] = useState({})

        useEffect(() => {
            let product = rooms.filter(room => room.id === id  )
           setProduct(product) 
        },[])
        const handleClick = (e) => {
            e.preventDefault()
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
        }
    const slider = useRef()
    const next = () =>  {
        slider.current.slickNext()
    }
    const previous = () => {
        slider.current.slickNext()
    }

    return ReactDOM.createPortal (
        <div>
            <div onClick={handleClick} className={classes.background}></div>
        
            <div onClick={onClose} className={classes["room-details-container"]}>
                <div onClick={handleClick} className={classes["modal-container"]}>
                <div className={classes["room-details"]}>

                    <div className={classes.title}>
                        <h5>Product details</h5>
                        
                            <button onClick={onClose} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        
                        
                    </div>

                    <div className={classes.container}>
                        <div className={classes["img-container"]}>
                            
                                <button onClick={previous} className={classes["prev-btn"]} >
                                {"<"}
                                </button>
                          
                                <Slider ref={slider} {...settings}>
                                <img src={roomImg} alt="product" />
                                <img src={roomImg} alt="product" />
                                <img src={roomImg} alt="product" />
                            </Slider>
                            
                                <button onClick={next} className={classes["next-btn"]}>
                                {">"}
                                </button>
                            
                        </div>
                        
                    <div className={classes["room-info"]}>
                        <p className={classes["title-p"]}>Nykaa Liquid Lipstick</p>
                        <p>MRP.<del>₹ 900</del> ₹ 540 | <span>40% Off</span></p>
                        <p>
                            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                        </p>
                        <div className={classes.rating}>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span>( 8 )</span>
                        </div>
                    </div>
                    </div>
                    <div className={classes["btns-container"]}>
                        <button className={classes.btn}>Add to Cart</button>
                        <button className={classes.btn}>Buy Now</button>
                    </div>
                </div>
                
                </div>
            </div>
        </div>
        ,
    document.getElementById("root")
    )
}
export default RoomDetails