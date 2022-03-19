import React, {useState, useEffect} from 'react'
import axios from './axios/index'
import CountryCard from './CountryCard'
import CountryDetails from './CountryDetails'
import {useNavigate} from 'react-router-dom'
import Header from './Header'
const Home = (props) => {
    const navigate = useNavigate();
    const [countriesData, setCountriesData] = useState([])
    const [currentCountry, setCurrentCountry] = useState([])

    const style = {
        backgroundColor: props.mode === 'light' ? 'hsl(0, 0%, 100%)' :'hsl(207, 26%, 17%)',
        color: props.mode === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'
    }

    const updateCountries = async () => {
        
        const request = await axios.get();
        console.log(request);
        setCountriesData(request.data);

    }

    useEffect(() =>{
        updateCountries()
    }, [])

    const showCountry = async (id) =>{
        setCurrentCountry(id);
        props.details(id);
        console.log(id)
        navigate(`/${id}`);
    }


  return (
    <div className="container-fluid " style={style}> 
        <Header mode={props.mode} />
        <div className="container">
            <div className="row">
                    {
                        countriesData.map((ele) =>{
                            return <div className="col-auto country-card-component my-3 mx-4 " key={ele.alpha3Code} onClick={()=> showCountry(ele.alpha3Code)}>
                                <CountryCard flag={ele.flags.svg} title={ele.name} population={ele.population} region={ele.region} capital={ele.capital} mode={props.mode} />
                            </div>
                        })
                    }
            </div>
        </div>
            

    </div>
  )
}

export default Home