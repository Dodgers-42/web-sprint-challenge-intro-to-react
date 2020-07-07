// Write your Character component here
import React from "react";
import Character from './Character';
// import styled from 'styled-components';

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

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-item: center;
//     padding: 40px;
// `


export default CharacterList;