// Write your Character component here
import React from "react";
import Character from './Character';

const CharacterList = (props) => {
    // console.log(props.starWarsCharacter.results.map)
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