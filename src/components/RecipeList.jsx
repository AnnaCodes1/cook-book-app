import React from 'react'
import RecipeItem from './RecipeListItem'

const RecipeList = ({ recipes, title, remove }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>

      {recipes.map((recipe, index) => (
        <RecipeItem
          remove={remove}
          number={index + 1}
          recipe={recipe}
          key={recipe.id}
        />
      ))}
    </div>
  )
}

export default RecipeList
