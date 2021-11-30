import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import classes from './Header.module.css'
import recipeslogo from '../images/recipeslogoo.jpg'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Recipes</h1>
                <input type='text' placeholder='Search recipe' />
            </header>
            <div className={classes['logo-image']}>
                <img src={recipeslogo} alt='recipes' />
            </div>
        </Fragment>
    )
}

export default Header
