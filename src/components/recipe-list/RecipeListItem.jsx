import React from 'react'
import MyButton from '../UI/button/MyButton'

const RecipeListItem = ({ recipe, number, remove }) => {
  return (
    <div className='recipe-item'>
      <div className='recipe_content'>
        <strong>
          {number}. {recipe.title}
        </strong>
        <div>{recipe.about}</div>
        <div>{recipe.instructions}</div>
      </div>
      <div className='recipe__btns'>
        <MyButton onClick={() => remove(recipe)}>Delete</MyButton>
      </div>
    </div>
  )
}

export default RecipeListItem
