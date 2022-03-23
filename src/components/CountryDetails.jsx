import React, {useState, useEffect} from 'react'
import axios from './axios/index'
import {Link, useParams} from 'react-router-dom'
const CountryDetails = (props) => {

    const [countriesData, setCountriesData] = useState([])
    const { id } = useParams();
    const style = {
        backgroundColor: props.mode === 'light' ? 'hsl(0, 0%, 100%)' :'hsl(207, 26%, 17%)',
        color: props.mode === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)',
        height : '90vh'
    }

    const btnStyle = {
        backgroundColor: props.mode === 'light' ? 'hsl(0, 0%, 100%)' :'hsl(209, 23%, 22%)',
        color: props.mode === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)',
        display: 'inline-block'
    }



    const updateCountries = async () => {
        props.setProgress(30);
        const request = await axios.get();
        props.setProgress(60);
        console.log(request);
        setCountriesData(request.data);
        props.setProgress(100);

    }

    useEffect(() =>{
        updateCountries()
    }, [])

    

  return (
    <div className='container-fluid' style={style}>
        <div className='container' style={style}>
            <div className='row'>
                <div className='col-auto'>
                    <Link className={`btn back-btn-${props.mode} my-4`} to="/" style={btnStyle}>&#8592; Back</Link>
                </div>
            </div>
            {
                countriesData.map((ele) =>{
                    if(ele.alpha3Code === id)
                    {
                        return <div className='row py-4' key={ele.alpha3Code}>
                            <div className='col-12 col-md-5'>
                                <div className="flex-shrink-0">
                                    <img src={ele.flags.svg} className='img img-fluid' alt="country flag" height='20%' />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className="row my-3">
                                    <h2>{ele.name}</h2>
                                </div>
                                <div className='row my-3'>
                                    <div className='col-12 col-md-6'>
                                        <span><strong>Native name: </strong>{ele.nativeName}</span><br />
                                        <span><strong>Population: </strong>{ele.population}</span><br />
                                        <span><strong>Region: </strong>{ele.region}</span><br />
                                        <span><strong>Subregion: </strong>{ele.subregion}</span><br />
                                        <span><strong>Capital: </strong>{ele.capital}</span><br />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <span><strong>Top level Domain: </strong>{ele.topLevelDomain}</span><br />
                                        <span><strong>Currencies: </strong>{ele.currencies[0].name}</span><br />
                                        <span><strong>Languages: </strong>{ele.languages[0]?.name}</span><br />
                                    </div>
                                </div>

                                <div className="row my-3">
                                    <div className='col-auto'>
                                        <span><strong>Border countries: </strong></span>
                                    </div>
                                    <div className='col-auto'>
                                        <span><a className="btn btn-dark" href="#" role="button">France</a></span>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    }
                })
            }
            
        </div>

    </div>
  )
}

export default CountryDetails