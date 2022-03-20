import React from 'react'
import './CountryCard.css'
const CountryCard = (props) => {

  const style = {
    backgroundColor: props.mode === 'light' ? 'hsl(0, 0%, 100%)' :'hsl(209, 23%, 22%)',
    color: props.mode === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'
  }
  return (
    <div>
        <div className={`card card-${props.mode}`} style={style} >
        <img src={props.flag} className="card-img-top img-fluid" alt="..." />

            
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <span className='card-content'><strong>Population: </strong>{props.population}</span> <br></br>
                <span className='card-content'><strong>Region: </strong> {props.region}</span><br></br>
                <span className='card-content'><strong>Capital:</strong>  {props.capital}</span><br></br>
            </div>
            </div>
    </div>
  )
}

export default CountryCard