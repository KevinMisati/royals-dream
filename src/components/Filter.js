import React,{useState} from 'react'
import classes from "./filter.module.css"

const Filter = () => {
    const [openButtons,setOpenButtons] = useState(false)
    const handleToggleButtons = () => {
        setOpenButtons(!openButtons)
    }
return (
<section className={classes["filter-btns-container"]}>
    <div className={classes["filter-btns"]}>
        <button onClick={handleToggleButtons} className={classes["main-filter-btn"]}>filter</button>
        {openButtons && <div className={classes["toggle-btns"]}>
            <button>button-1</button>
            <button>button-2</button>
            <button>button-3</button>
            <button>button-4</button>
            <button>button-5</button>
            <button>button-6</button>
            <button>button-8</button>
            <button>button-9</button>
            <button>button-10</button>
            
        </div>
}
        
    </div>
</section>

)
}

export default Filter