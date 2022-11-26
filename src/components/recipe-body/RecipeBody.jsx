import React from 'react'
import MyButton from '../UI/button/MyButton'
import IngredientList from './IngredientList'
import '/home/anna/Desktop/JS/cook-book/cook-book-app/src/styles/App.css'

const RecipeBody = ({ recipeObject }) => {
  const eachRecipe = recipeObject.map(item => {
    const { id, title, about, recipe, ...ingredient } = item
    return (
      <div
        className='each-recipe'
        key={id}
      >
        <h1 className='recipe-header'>{title}</h1>
        <p className='about-recipe'>{about}</p>
        <IngredientList {...ingredient} />
        <p className='recipeInstruction'>{recipe}</p>
        <span className='recipeButtons'>
          <MyButton>Add to favourite</MyButton>
          <MyButton>Edit recipe</MyButton>
          <MyButton>Delete recipe</MyButton>
        </span>
      </div>
    )
  })
  return <div className='recipe-body'>{eachRecipe}</div>
}

export default RecipeBody
