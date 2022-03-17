import React, {useState, useEffect} from 'react'
import CountryCard from './CountryCard'
import Header from './Header'
const Home = (props) => {

    const style = {
        backgroundColor: props.mode === 'light' ? 'hsl(0, 0%, 100%)' :'hsl(207, 26%, 17%)',
        color: props.mode === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'
    }

    const [countries, setCountries] = useState([]);

    const updateCountries = async () => {
        const url = 'https://restcountries.com/v2/all'
        let data = await fetch(url);
        let parsedData = await data.json()


    }

    useEffect(() =>{
        updateCountries()
    }, [])

  return (
    <div className="container-fluid" style={style}>
        <Header mode={props.mode} />
        <div className="container">
            <div className="row">
                    {
                        parsedData.map((ele) =>{
                            return <div className="col-md-3" key={ele.name}>
                                <CountryCard />
                            </div>
                        })
                    }
            </div>
        </div>
            

    </div>
  )
}

export default Home