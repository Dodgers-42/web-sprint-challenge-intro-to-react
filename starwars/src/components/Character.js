// Write your Character component here
import React from "react";
// import StarWarsPics from './components/StarWarsPics';

const Character = (props) => {
    console.log(props.starWarsCharacter)
    return (
        <div className="character">

           {/* <StarWarsPics starWarsPics = {props.starWarsCharacter.people}/>  */}
        </div>

    );
}

export default Character;