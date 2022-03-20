import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = (props) => {

    const style = {
        backgroundColor: props.mode === 'light' ? 'hsl(0, 0%, 100%)' :'hsl(209, 23%, 22%)',
        color: props.mode === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'
    }


  return (
      <header className="container">
          <div className="row py-4 d-flex align-items-center justify-content-between">
              <div className="col-12 col-md-4 my-4">
                <div className={`search d-flex align-items-center input-${props.mode}`}>
                    <i className="fa fa-search" style={{color: 'black'}}></i> <input type="text" className="form-control" placeholder="Search for a country" />
                </div>
              </div>

              <div className='col-5 col-md-2 my-4'>
              <div className="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" id={`dropdown-btn-${props.mode}`} data-bs-toggle="dropdown" aria-expanded="false"  style={style}>
                    Filter by region &nbsp;
                </button>
                <ul className="dropdown-menu" aria-labelledby="regions"  style={style}> 
                    <li onClick={()=> props.filter('Africa')}><Link className="dropdown-item" to="" style={style}>Africa</Link></li>
                    <li onClick={()=> props.filter('Americas')}><Link className="dropdown-item" to="" style={style}>America</Link></li>
                    <li onClick={()=> props.filter('Asia')}><Link className="dropdown-item" to="" style={style}>Asia</Link></li>
                    <li onClick={()=> props.filter('Europe')}><Link className="dropdown-item" to="" style={style}>Europe</Link></li>
                    <li onClick={()=> props.filter('Oceania')}><Link className="dropdown-item" to="" style={style}>Oceania</Link></li>
                </ul>
                </div>
              </div>
          </div>

      </header>
  )
}

export default Header