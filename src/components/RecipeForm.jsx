import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput'

const RecipeForm = ({ create }) => {
  const [recipe, setRecipe] = useState({ title: '', body: '' })

  const addNewRecipe = (e) => {
    e.preventDefault()
    const newRecipe = {
      ...recipe,
      id: Date.now(),
    }
    create(newRecipe)
    setRecipe({ title: '', body: '' })
  }

  return (
    <form>
      {/* {Управляемый компонент} */}
      <MyInput
        value={recipe.title}
        onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
        type="text"
        placeholder="Title"
      />

      <MyInput
        value={recipe.body}
        onChange={(e) => setRecipe({ ...recipe, body: e.target.value })}
        type="text"
        placeholder="Description"
      />

      <MyButton onClick={addNewRecipe}>Add recipe</MyButton>
    </form>
  )
}

export default RecipeForm
