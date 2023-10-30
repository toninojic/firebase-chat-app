import React from 'react';
import Add from '../img/addAvatar.png';

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Toni Chat</span>
            <span className='title'>Register</span>
            <form action="">
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='e-mail' />
                <input type="password" placeholder='****' />
                <input style={{display: "none"}} type="file" id='file'/>
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                <p>You do have an account? Login</p>
            </form>
        </div>
    </div>
  )
}

export default Register