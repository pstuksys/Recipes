
import React, { useState } from 'react'
import classes from './RecipeList.module.css'
import Recipes from './Recipes'


const RecipeList = () => {

    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('')


    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=2fe8dbd7&app_key=8da60e03621775d245e6c92261d0a51e`

    const onSubmit = (event) => {
        event.preventDefault()
        fetchRecipeData()
    }

    const onChangeQuery = (event) => {
        setQuery(event.target.value)
    }


    const fetchRecipeData = () => {
        fetch(url).then(response => {
            return response.json()
        }).then(data => {
            const ingredientData = data.hits.map((ingredientData) => {
                return {
                    text: ingredientData.recipe.ingredients.map(e => e.text),
                    quantity: ingredientData.recipe.ingredients.map(e => e.quantity),
                    measure: ingredientData.recipe.ingredients.map(e => e.measure),
                    food: ingredientData.recipe.ingredients.map(e => e.food),
                    weight: ingredientData.recipe.ingredients.map(e => e.weight)
                }
            })
            const transformedRecipes = data.hits.map(recipeData => {
                return {
                    title: recipeData.recipe.label,
                    type: recipeData.recipe.mealType,
                    ingredients: [
                        recipeData.recipe.ingredients.map(e => e.text)
                    ],
                    image: recipeData.recipe.image,
                    colories: recipeData.recipe.calories
                }
            })
            setRecipes(transformedRecipes)
            console.log(transformedRecipes)
            console.log(ingredientData)
        })
    }



    return (
        <div>
            <section>
                <form className={classes.form} onSubmit={onSubmit}>
                    <input type='text' placeholder='Search Recipes'
                        onChange={onChangeQuery} />
                    <input type='submit' placeholder='Search' />
                </form>
            </section>
            <div>
                <ul className={classes['recipe-list']}>
                    {recipes.map((recipe) => (
                        <Recipes
                            key={Math.random() * 99999}
                            title={recipe.title}
                            type={recipe.type}
                            ingredients={recipe.ingredients}
                            image={recipe.image}
                            colories={recipe.colories}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RecipeList
