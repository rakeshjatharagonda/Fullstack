import React from 'react'


const Navbar = ({showLoginHandler,showRegisterHandler}) => {

  return (
    <div className="navbar">
        <div className='dashboard'>
            <h3>Dashboard</h3>
        </div>
   <div>
    <a href="#" onClick={showLoginHandler}>Login </a>
   <a href="#" onClick={showRegisterHandler}>Register</a>
   </div>
    
</div>
  )
}

export default Navbar
