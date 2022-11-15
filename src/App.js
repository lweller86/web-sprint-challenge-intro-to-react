import React, { useEffect, useState } from 'react';
import Character from './components/Character.js';
import axios from 'axios';
import theme from './components';





const App = () => {


  const [character, setCharacter] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacter(res.data)

      })
      .catch(err => console.log(err))
  }, []);
  return (

    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="char">
        {character.map(person => {
          return <Character info={person} />
        })}
      </div>
    </div>
  );

};

export default App;
