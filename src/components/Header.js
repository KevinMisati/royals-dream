import React,{useState} from 'react'
import Logo from "../images/logo-royel-new.png"
import classes from "./header.module.css"
import Login from "../pages/Login"
import Reset from "../pages/Reset"
import {
    Link
} from "react-router-dom";

const Header = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [isResetOpen,setIsResetOpen] = useState(false)
    const [showSmallNav,setShowSmallNav] = useState(false)
    const openDialog = () => {
        setIsOpen(true)
    }
    const openResetDialog = () => {
        setIsResetOpen(true)
        setIsOpen(false)
    }
    const closeResetDialog = () => {
        setIsResetOpen(false)
    }
    const onCloseDialog =  () => {
        setIsOpen(false)
    }
    const handleToggleSmallNav = () => {
        setShowSmallNav(!showSmallNav)
    }
return (
    <header className={classes["header-container"]}>
        <div className={`container ${classes.header}`}>
        
            <div className={classes.logo}>
                <img src={Logo} alt="logo" />
            </div>
            <div onClick={handleToggleSmallNav} className={classes["hamburger-container"]}>
                <div className={classes["nav-btn-hamburger"]}></div>
            </div>

            <nav className={classes["large-nav"]}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>
                <button 
                onClick={openDialog}
                className={classes["right-btn"]}
                >login</button>
            </nav> 

            { showSmallNav && <nav className={classes["small-nav"]}>
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <button 
                onClick={openDialog}
                className={classes["right-btn"]}
                >login</button>
            </nav> 
            }

        </div>
        {openDialog && <Login onOpen={openDialog} open ={isOpen} onOpenReset={openResetDialog} onClose={onCloseDialog}/>} 
        {isResetOpen && <Reset onClose={closeResetDialog}/> }
    </header>
)
}

export default Header