import React, { useState } from 'react'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import './LoginSignUp.css'

const LoginSignUp = () => {
    const [action, setAction] = useState("Sign Up")

    return (
        <div className='signin'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==='Login' ? <div></div> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Name' />
                </div>}
             
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email ID' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            {action==='Sign Up' ? <div></div> :   <div className="forgot-password">Forget password? <span>Click Here!</span></div>}
          
            <div className="submit-container">
                <div className={action === 'Sign Up' ? 'submit darkblue' : 'submit'} onClick={() => setAction('Sign Up')}>Sign Up</div>
                <div className={action === 'Login' ? 'submit darkblue' : 'submit'} onClick={() => setAction('Login')}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignUp
