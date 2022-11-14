import React from 'react'
import IngredientList from './IngredientList'

const RecipeBody = ({ recipeObject }) => {
  const eachRecipe = recipeObject.map((item) => {
    const { title, about, recipe, ...ingredient } = item
    return (
      <div className='each-recipe'>
        <h1 className='recipe-header'>{title}</h1>
        <p className='about-recipe'>{about}</p>
        <IngredientList {...ingredient} />
        <p className='recipeInstruction'>{recipe}</p>
      </div>
    )
  })
  return <div className='recipe-body'>{eachRecipe}</div>
}

export default RecipeBody
