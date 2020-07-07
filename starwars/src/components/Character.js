import React from "react";


const Character = (props) => {
    // console.log(props.starWarsPics);
    return (

        <div className="starwarspics">
            <h1>{props.character.name}</h1>
            <span>{props.character.height}</span>
            <span>{props.character.mass}</span>
            <p>{props.character.hair_color}</p>
            <p>{props.character.skin_color}</p>


        </div>
    );
}

export default Character;