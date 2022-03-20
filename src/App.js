import './App.css';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import { useState } from 'react'
import Home from './components/Home';
import {useNavigate} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [mode, setMode] = useState('light');
  let { id } = useParams()
  const [progress, setProgress] = useState(0)

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }


  const style = {
    backgroundColor: mode === 'light' ? 'hsl(0, 0%, 100%)' :'hsl(207, 26%, 17%)',
    color: mode === 'light' ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)'
}
  return (
    <>
    <Router>
      <Navbar mode={mode} textColor={mode === 'light' ? 'light' : 'dark'} toggleMode={toggleMode} />
      <LoadingBar color= '#0b76e1' progress={progress}  />
      <Routes>
        <Route exact path="/" element={<Home mode={mode} progress={progress} setProgress={setProgress} />} />
        <Route exact path='/:id' element={<CountryDetails mode={mode} setProgress={setProgress} />} />
      </Routes>
      
    </Router>
      
    </>
  );
}

export default App;
