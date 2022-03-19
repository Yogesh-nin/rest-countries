import React from 'react'
import './Header.css'
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
                    <li><a className="dropdown-item" href="#" style={style}>Africa</a></li>
                    <li><a className="dropdown-item" href="#" style={style}>America</a></li>
                    <li><a className="dropdown-item" href="#" style={style}>Asia</a></li>
                    <li><a className="dropdown-item" href="#" style={style}>Europe</a></li>
                    <li><a className="dropdown-item" href="#" style={style}>Australia</a></li>
                </ul>
                </div>
              </div>
          </div>

      </header>
  )
}

export default Header