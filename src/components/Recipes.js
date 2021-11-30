import React from 'react'

const Recipes = (props) => {
    return (
        <li>
            <h2>{props.title}</h2>
            <h3>{props.type}</h3>
            <p>{props.ingredients}</p>
            <img src={props.image} alt='recipe' />
            <h4>{props.colories}</h4>
        </li >
    )
}

export default Recipes
