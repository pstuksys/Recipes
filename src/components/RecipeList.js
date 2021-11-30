
import React, { useState } from 'react'
// import classes from './RecipeList.module.css'
import Recipes from './Recipes'


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
                    colories: recipeData.recipe.calories
                }
            })
            setRecipes(transformedRecipes)
            console.log(transformedRecipes)
        })
    }


    return (
        <div>
            {/* add later to header button */}
            <section>
                <button recipes={recipes} onClick={fetchRecipeData}>fetch</button>
            </section>
            <ul>
                {recipes.map((recipe) => (
                    <Recipes
                        title={recipe.title}
                        type={recipe.type}
                        ingredients={recipes.ingredients}
                        image={recipe.image}
                        colories={recipe.colories}
                    />
                ))}

            </ul>
        </div>
    )
}

export default RecipeList
