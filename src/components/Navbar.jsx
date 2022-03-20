import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = (props) => {

    const style={
        backgroundColor: props.mode === 'light' ? 'hsl(0, 0%, 100%)' :'hsl(209, 23%, 22%)',
        color: props.mode === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)',
        height: '10vh'
    }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={style}>
        <div className="container">
            <Link className="navbar-brand heading mx-4 " to="/">Where in the world?</Link>

            <div className='mode' style={{color: props.textColor === 'light' ? 'black' : 'white'}} onClick={props.toggleMode}>

               {
                   props.mode === 'light' ? <span ><i className="fas fa-moon"></i> Dark mode</span> : <span><i className="fas fa-sun"></i> Light mode</span>
               }
            </div>
    
    
        </div>
    </nav>
  )
}

export default Navbar