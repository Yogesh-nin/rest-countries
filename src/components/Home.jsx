import React, {useState, useEffect} from 'react'
import axios from './axios/index'
import CountryCard from './CountryCard'
import CountryDetails from './CountryDetails'
import {useNavigate} from 'react-router-dom'
import Header from './Header'
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = (props) => {
    const navigate = useNavigate();
    const [countriesData, setCountriesData] = useState([])
    const [currentCountry, setCurrentCountry] = useState([])
    const [filter, setFilter] = useState('')
    const [countrySearch, setCountrySearch] = useState('')

    const handleSearch = (e) =>{
        e.preventDefault()
        setCountrySearch(e.target.value)
        
        console.log(countrySearch)
    }

    const style = {
        backgroundColor: props.mode === 'light' ? 'hsl(0, 0%, 100%)' :'hsl(207, 26%, 17%)',
        color: props.mode === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)',
        height: props.progress != 100 ? '90vh' : ''
    }

    const updateCountries = async () => {
        
        props.setProgress(10);
        const request = await axios.get();
        props.setProgress(70);
        setCountriesData(request.data);
        props.setProgress(100);

    }

    useEffect(() =>{
        updateCountries()
    }, [])

    const showCountry = async (id) =>{
        setCurrentCountry(id);
        console.log(id)
        navigate(`/${id}`);
        props.setProgress(0);
    }

    const filterCountries = (name)=>{
        setFilter(name)
    }


  return (
    <div className="container-fluid " style={style}>
        <Header mode={props.mode} filter={filterCountries} search={handleSearch}  />
        <InfiniteScroll 
        dataLength='12'
        next={updateCountries}
        hasMore={true}
        >
            <div className="container">
            <div className="row">
                    {
                        countriesData.map((ele) =>{
                            
                            if(filter == ''){
                                return <div className="col-auto country-card-component my-3 mx-4 " key={ele.alpha3Code} onClick={()=> showCountry(ele.alpha3Code)} filter={filter}>
                                    <CountryCard flag={ele.flags.svg} title={ele.name} population={ele.population} region={ele.region} capital={ele.capital} mode={props.mode} />
                                </div>
                            }
                            
                            if(filter === ele.region) {
                                return <div className="col-auto country-card-component my-3 mx-4 " key={ele.alpha3Code} onClick={()=> showCountry(ele.alpha3Code)} filter={filter}>
                                    <CountryCard flag={ele.flags.svg} title={ele.name} population={ele.population} region={ele.region} capital={ele.capital} mode={props.mode} />
                                </div>
                            }
                            
                        })
                    }
            </div>
            </div>
        </InfiniteScroll>
        
            

    </div>
  )
}

export default Home