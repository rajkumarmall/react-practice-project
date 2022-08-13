
import React, {useState} from 'react'

import './App.css';

import Textarea from './Components/Textarea';

import Navbar from './Components/Navbar';

import Darkmode from './Components/Darkmode/Darkmode';

import Carousel from './Components/Carousel';

import ReactPage from './Components/Darkmode/ReactPage';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light');

  const tooglemode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = 'grey';
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
    }
  };

  return (
    <BrowserRouter>
      <Navbar titel="REACT APP" mode={mode} tooglemode={tooglemode}/>
      <Routes>
        <Route path='REACT' element={<ReactPage />} />
         <Route path='Darkmode' element={<Darkmode />} />
          <Route path="/Home" element={<Textarea label = "Type Something Here..." mode = {mode}/>} />

          <Route path="/Carousel" element={<Carousel />} />

          <Route path='*' element={<h1>Error 404 This Page Is Not Found!!!</h1>} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
