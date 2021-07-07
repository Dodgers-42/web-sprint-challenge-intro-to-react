import React from "react";
import styled from 'styled-components';
import { Button } from 'reactstrap';
const Character = (props) => {
    // console.log(props.starWarsPics);
    return (

        <Container className="starwarspics">
            <Button>{props.character.name}</Button>
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
align-items: center;
border: solid 2px;
padding: 40px;
  button{
      width: 200px;
  }  
`


export default Character;