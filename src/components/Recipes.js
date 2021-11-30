import React from 'react'
import classes from './Recipes.module.css'

const Recipes = (props) => {
    return (
        <li className={classes.recipe}>
            <h2>{props.title}</h2>
            <h3>{props.type}</h3>
            <p>{props.ingredients}</p>
            <img src={props.image} alt='recipe' />
            <h3> Colories: {props.colories.toFixed()}</h3>
        </li>
    )
}

export default Recipes
