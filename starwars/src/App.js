import React, { useState, } from 'react';
import './App.css';
import axios from 'axios';
import CharacterList from './components/CharacterList';

function App() {
  //https://swapi.dev/
  const [starWars, setStarWars] = useState({results:[]});
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  React.useEffect(() => {
    axios
    .get("http://swapi.dev/api/people/")
      .then(res => {setStarWars(res.data)
      console.log(res)})
        .catch(err => console.log(err))
    
  }, []);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterList starWarsCharacter={starWars}/>
    </div>
  );
}

export default App;
