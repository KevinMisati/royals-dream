import React from 'react'
import classes from "./login.module.css"
import ReactDOM from 'react-dom'

const Reset = ({onClose}) => {
  return (
      ReactDOM.createPortal(
    <div>
    <div onClick={onClose} className={classes.background}></div>
      <div  className={classes["reset-container"]}>
        
        <div style={{display:"flex",justifyContent:"space-between"}} className={classes.header}>
          <p>
            Password will be sent to your email
          </p>
          <button onClick={onClose} type="button" /* class="btn-close" */ data-bs-dismiss="modal" aria-label="Close">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <div className={classes["form-control-container"]}>
          <div className={classes["form-control"]}>
            <input placeholder='Email address' />
          </div>
          <button className={classes["send-btn"]}>Send</button>
        </div>

        
      


      </div>

    </div>
    ,


    document.getElementById("root")
  )
    )
}

export default Reset