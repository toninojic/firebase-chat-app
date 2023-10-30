import React from 'react';

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Toni Chat</span>
            <span className='title'>Register</span>
            <form action="">
                <input type="email" placeholder='e-mail' />
                <input type="password" placeholder='****' />
                <button>Login In</button>
                <p>You do not have an account? Register</p>
            </form>
        </div>
    </div>
  )
}

export default Register