import React,{useState} from 'react'
import classes from "./rooms.module.css"
import roomImg from "../images/img-1.jpg"
import roomImg1 from "../images/img-2.jpg"
import RoomDetails from "./RoomDetails"
const Rooms = () => {
    const rooms = [
        {
            id:1,
            title:"Nykaa Liquid Lipstick",
            discount:40,
            markedPrice:900,
            quantity:8,
            img:roomImg
        },
        {
            id:2,
            title:"Tonmoly Super10 Combo",
            discount:40,
            markedPrice:1000,
            quantity:5840,
            img:roomImg1
        },
        {
            id:3,
            title:"Nykaa Liquid Lipstick",
            discount:40,
            markedPrice:900,
            quantity:8,
            img:roomImg
        },
        {
            id:4,
            title:"Tonmoly Super10 Combo",
            discount:40,
            markedPrice:1000,
            quantity:5840,
            img:roomImg1
        },
        {
            id:5,
            title:"Nykaa Liquid Lipstick",
            discount:40,
            markedPrice:900,
            quantity:8,
            img:roomImg
        },
        {
            id:6,
            title:"Tonmoly Super10 Combo",
            discount:40,
            markedPrice:1000,
            quantity:5840,
            img:roomImg1
        },
        {
            id:7,
            title:"Nykaa Liquid Lipstick",
            discount:40,
            markedPrice:900,
            quantity:8,
            img:roomImg
        },
        {
            id:8,
            title:"Tonmoly Super10 Combo",
            discount:40,
            markedPrice:1000,
            quantity:5840,
            img:roomImg1
        },
    ]
    const [openRoomDetails,setOpenRoomDetails] = useState(false)
    const [detailsId,setDetailsId] = useState(0)
    const handleOnView = (id) => {
        setDetailsId(id)
        setOpenRoomDetails(true)
    }
  return (
    <div className={classes["rooms-container"]}>
        {openRoomDetails && <RoomDetails 
            onClose={() => setOpenRoomDetails(false)}
            id={detailsId}
        /> }
        <div className={classes.rooms}>
            {rooms.map(({id,title,markedPrice,discount,quantity,img}) => {
                return(
                    <>
                    <div id={id} className={classes.room}>
                        <div className={classes["img-container"]}>
                            <img src={img} alt="room" />

                            <div className={classes.react}>
                                <a href="#" className={classes.love}>
                                    <i className="fa fa-heart"></i>
                                </a>
                            </div>
                        </div>



                        <div className={classes["room-info"]}>
                            <h4>{title}</h4>
                            <p>MRP.<del>₹ {markedPrice} </del> ₹ {(100 - discount)/100 * markedPrice } | <span>{discount}% Off</span></p>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span>( 8 )</span>
                        </div>
                        <button onClick={() => handleOnView(id)} className={classes["room-btn"]}>view details</button>
                    </div>
                    </>
                )
            })
        }
        </div>

    </div>
  )
}

export default Rooms