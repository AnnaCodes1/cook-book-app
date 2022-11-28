import React from 'react'
import MyButton from '../UI/button/MyButton'
import IngredientList from './IngredientList'
import classes from './RecipeBody.module.css'

const RecipeBody = ({ recipe, remove }) => {
  const { title, about, instructions, ...ingredients } = recipe
  return (
    <div className={classes.eachRecipe}>
      <h1 className={classes.recipeHeader}>{title}</h1>
      <p className={classes.aboutRecipe}>{about}</p>
      <IngredientList {...ingredients} />
      <p className={classes.recipeInstruction}>{instructions}</p>
      <span className={classes.recipeButtons}>
        <MyButton>Add to favourites</MyButton>
        <MyButton>Edit recipe</MyButton>
        <MyButton onClick={() => remove(recipe)}>Delete recipe</MyButton>
      </span>
    </div>
  )
}

export default RecipeBody
