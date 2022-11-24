import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const RecipeForm = ({ onCreated }) => {
  const [recipe, setRecipe] = useState({ title: '', body: '' })

  const onSubmit = e => {
    e.preventDefault()
    onCreated(recipe)
    setRecipe({ title: '', body: '' })
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
        value={recipe.body}
        onChange={e => setRecipe({ ...recipe, body: e.target.value })}
        type='text'
        placeholder='Description'
      />

      <MyButton type='submit'>Add recipe</MyButton>
    </form>
  )
}

export default RecipeForm
