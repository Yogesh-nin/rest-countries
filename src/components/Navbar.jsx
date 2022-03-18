import React, { useState } from 'react'
import './Navbar.css'
const Navbar = (props) => {

    const style={
        backgroundColor: props.mode === 'light' ? 'hsl(0, 0%, 100%)' :'hsl(209, 23%, 22%)',
        color: props.mode === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)',
        height: '10vh'
    }

  return (
    <nav class={`navbar navbar-expand-lg navbar-${props.mode}`} style={style}>
        <div class="container">
            <a class="navbar-brand heading mx-4 " href="#">Where in the world?</a>

            <div className='mx-4 mode' style={{color: props.textColor === 'light' ? 'black' : 'white'}} onClick={props.toggleMode}>

               {
                   props.mode === 'light' ? <span ><i class="fas fa-moon"></i> Dark mode</span> : <span><i class="fas fa-sun"></i> Light mode</span>
               }
            </div>
    
    
        </div>
    </nav>
  )
}

export default Navbar