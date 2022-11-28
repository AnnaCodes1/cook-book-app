import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const RecipeForm = ({ onCreated }) => {
  const [recipe, setRecipe] = useState({ title: '', about: '', instructions: '' })

  const onSubmit = e => {
    e.preventDefault()
    onCreated(recipe)
    // setRecipe({ title: '', body: '' })
  }

  return (
    <form onSubmit={onSubmit}>
      {/* {Управляемый компонент} */}
      <MyInput
        value={recipe.title}
        onChange={e => setRecipe({ ...recipe, title: e.target.value })}
        type='text'
        placeholder='Title'
      />

      <MyInput
        value={recipe.about}
        onChange={e => setRecipe({ ...recipe, about: e.target.value })}
        type='text'
        placeholder='Description'
      />

      <MyInput
        value={recipe.instructions}
        onChange={e => setRecipe({ ...recipe, instructions: e.target.value })}
        type='text'
        placeholder='Cooking instructions'
      />

      <MyButton type='submit'>Add recipe</MyButton>
    </form>
  )
}

export default RecipeForm
