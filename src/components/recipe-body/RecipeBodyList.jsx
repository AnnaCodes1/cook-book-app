import React from 'react'
import RecipeBody from './RecipeBody'

const RecipeBodyList = ({ recipes, remove }) => {
  return (
    <div>
      {recipes.map(recipe => {
        return (
          <RecipeBody
            remove={remove}
            recipe={recipe}
            key={recipe.id}
          />
        )
      })}
    </div>
  )
}

export default RecipeBodyList
