
import React, { useState } from 'react'
import classes from './RecipeList.module.css'
import Recipes from './Recipes'


// const url = 'https://api.edamam.com/api/recipes/v2?type=public&q=eggs&app_id=2fe8dbd7&app_key=8da60e03621775d245e6c92261d0a51e'

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
            const transformedRecipes = data.hits.map(recipeData => {
                return {
                    title: recipeData.recipe.label,
                    type: recipeData.recipe.mealType,
                    ingredients: recipeData.recipe.ingredients,
                    image: recipeData.recipe.image,
                    colories: recipeData.recipe.calories
                }
            })
            setRecipes(transformedRecipes)
            console.log(transformedRecipes)
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
                            ingredients={recipes.ingredients}
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


//fix ingredients nested array of objects.

// .then(data => {
//     const allIngredients = data.hits.ingredients.map((ingredientData) => {
//         return {
//             ingredient: ingredientData.text,
//             quantity: ingredientData.quantity,
//             measure: ingredientData.measure,
//             food: ingredientData.food,
//             weight: ingredientData.weight,
//             id: ingredientData.foodId
//         }
//     })
//     setIngredients(getIngredients)
//     console.log(allIngredients)
// })
