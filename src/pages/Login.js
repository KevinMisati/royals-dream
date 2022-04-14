import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import classes from "./login.module.css"

const Login = ({onOpen,open,onClose,onOpenReset}) => {

  const [showSignUpPage,setShowSignUpPage] = useState(true)
  const openResetPassword = () => {
    
  }
  
  if (!open) return
  return ReactDOM.createPortal(
    <div>
    <div onClick={onClose} className={classes.background}></div>
      { !showSignUpPage && <div  className={classes["login-container"]}>
        dfj
        <div className={classes.header}>
          <button onClick={() => setShowSignUpPage(false)}>
            Log in
          </button>
          <button onClick={() => setShowSignUpPage(true)}>
            Sign Up
          </button>
          <button onClick={onClose} type="button"  data-bs-dismiss="modal" aria-label="Close">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <div className={classes["form-control-container"]}>
          <div className={classes["form-control"]}>
            <input placeholder='Email address' />
          </div>
          <div className={classes["form-control"]}>
            <input placeholder='Password' />
            <div className={classes["password-details"]}>
                <p>
                <em>minimum 6 characters</em>
              </p>
              <p onClick={onOpenReset}>
                <a href="#">I forgot my Password</a>
              </p>
            </div>
            
          </div>
          <button className={classes["send-btn"]}>Send</button>
        </div>
      </div>
  }


      { showSignUpPage && <div  className={classes["signup-container"]}>
        <div className={classes.header}>
          <button onClick={() => setShowSignUpPage(false)}>
            Log in
          </button>
          <button onClick={() => setShowSignUpPage(true)}>
            Sign up
          </button>
          <button className={classes["cancel-btn"]} onClick={onClose} type="button"  data-bs-dismiss="modal" aria-label="Close">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <div className={classes["form-control-container"]}>
          <div className={classes["form-control"]}>
            <input placeholder='First Name' />
          </div>
          <div className={classes["form-control"]}>
            <input placeholder='Last Name' />
          </div>
          <div className={classes["form-control"]}>
            <input placeholder="Email" />
          </div>
          <div className={classes["form-control"]}>
            <input placeholder='Password' />
          </div>
          <div className={classes["form-control"]}>
            <input placeholder='Country' />
          </div>
          
          <button className={classes["send-btn"]}>Sign Up</button>
        </div>
      </div> }


    </div>
    ,


    document.getElementById("root")
  )
}

export default Login