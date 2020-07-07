// Write your Character component here
import React from "react";
import Character from './Character';
import styled from 'styled-components';

const CharacterList = (props) => {
    // console.log(props.starWarsCharacter.results.map)
    console.log(props);
    return (
        <div className="character">

           {/* <StarWarsPics starWarsPics = {props.starWarsCharacter.results}/>  */}

           {props.starWarsCharacter.results.map((p,i) =>(
               <Character key={i} character={p}/>
           ))}
        
        </div>

    );
}




export default CharacterList;