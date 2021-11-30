import React from 'react'

const Recipes = (props) => {
    return (
        <li>
            <h2>{props.recipe}</h2>
            <h3>{props.label}</h3>
            <p>{props.ingredients}</p>
        </li>
    )
}

export default Recipes
