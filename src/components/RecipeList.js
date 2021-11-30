import { Axios } from 'axios'
import React, { useState } from 'react'
import classes from './RecipeList.module.css'


const dummy = [
    {
        id: 1,
        name: 'lasagnia',
        ingredients: ['vegetables ', 'meat ', 'garlic ', 'pepers '],
        recipe: 'add to cups of water........',
        time: '25 mins'
    },
    {
        id: 2,
        name: 'lasagnia1',
        ingredients: ['vegetables ', 'meat ', 'garlic ', 'pepers '],
        recipe: 'add to cups of water........',
        time: '25 mins'
    },
    {
        id: 3,
        name: 'lasagnia2',
        ingredients: ['vegetables ', 'meat ', 'garlic ', 'pepers '],
        recipe: 'add to cups of water........',
        time: '25 mins'
    }
]

const url = 'https://api.edamam.com/api/recipes/v2?type=public&q=eggs&app_id=2fe8dbd7&app_key=8da60e03621775d245e6c92261d0a51e'


const RecipeList = () => {
    const [recipes, setRecipes] = useState([])

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
                    colories: recipeData.recipe.calories,

                    // image: recipeData.image,
                    // ingredients: recipeData.ingredients,
                    // mealtype: recipeData.mealType
                }
            })

            setRecipes(transformedRecipes)
            console.log(transformedRecipes)
        })
    }



    return (
        <div>
            <button recipes={recipes} onClick={fetchRecipeData}>fetch</button>
        </div>
    )
}

export default RecipeList


    // < ul >
    // { dummy.map((item) => (<li key={item.id}>{item.name}</li>)) }
    //     </ >