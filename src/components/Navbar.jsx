import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>Lama chat</span>
        <div className='user'>
            <img src="" alt="" />
            <span>john</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar