import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import './App.css';
import CharacterList from './components/CharacterList'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [baseURL] = useState('https://swapi.dev/api/people')
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(() => {
    axios
    .get(baseURL)
    .then(res => {
      console.log('axios call', res.data)
      setCharacters(res.data)
    })
    .catch(err => console.log(err))
  },[])



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
      <CharacterList characters={characters} />
      
 
    </div>
  );
}

// character={character}

export default App;
