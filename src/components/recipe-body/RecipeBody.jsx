import React from 'react'
import MyButton from '../UI/button/MyButton'
import IngredientList from './IngredientList'
import classes from './RecipeBody.module.css'

const RecipeBody = ({ recipeObject }) => {
  const eachRecipe = recipeObject.map(item => {
    const { id, title, about, recipe, ...ingredient } = item
    return (
      <div
        className={classes.eachRecipe}
        key={id}
      >
        <h1 className={classes.recipeHeader}>{title}</h1>
        <p className={classes.aboutRecipe}>{about}</p>
        <IngredientList {...ingredient} />
        <p className={classes.recipeInstruction}>{recipe}</p>
        <span className={classes.recipeButtons}>
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
