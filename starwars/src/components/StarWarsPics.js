import React from "react";


const StarWarsPics = (props) => {
    console.log(props.starWarsPics);
    return (

        <div className="starwarspics">
            <img src={props.starWarsPics}/>


        </div>
    );
}

export default StarWarsPics