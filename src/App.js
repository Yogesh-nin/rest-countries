import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { useState } from 'react'
import Home from './components/Home';
function App() {
  const [mode, setMode] = useState('light');

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
      <Navbar mode={mode} textColor={mode === 'light' ? 'light' : 'dark'} toggleMode={toggleMode} />
      <Home mode={mode} />
    </>
  );
}

export default App;
