import React from 'react';
import Templates from './components/Templates.js';
import Mene from './components/Mene';

import { useState ,useEffect } from 'react';
import './App.css';

function App() {
  const[templates,setTemplates]=useState([]);
  const[mene,setMene]=useState(null);
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then((res) => res.json())
    .then((data) =>{
      setTemplates(data.data.memes);
      
    }
    );
  


  },[]);
  
  return (
    <div className="App">
      <h1>meme</h1>
      {mene===null?<Templates templates={templates} setMene={setMene}/> 
      :<Mene mene={mene} setMene={setMene}/>}
      
      
    </div>
    
  );
};

export default App;
