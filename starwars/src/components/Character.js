import React from "react";
import styled from 'styled-components';

const Character = (props) => {
    // console.log(props.starWarsPics);
    return (

        <Container className="starwarspics">
            <h1>{props.character.name}</h1>
            <span>{props.character.height}</span>
            <span>{props.character.mass}</span>
            <p>{props.character.hair_color}</p>
            <p>{props.character.skin_color}</p>


        </Container>
    );
}

const Container = styled.div`
display: flex;
flex-direction: column;
border: solid 2px;
padding: 40px;
    
`
export default Character;