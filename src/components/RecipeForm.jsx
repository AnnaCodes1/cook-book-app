import React, { useState } from 'react'
// import IngredientsInput from './IngredientsInput'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const RecipeForm = ({ onCreated }) => {
  const [recipe, setRecipe] = useState({
    title: '',
    about: '',
    instructions: '',
    ingredients,
  })
  const {name, quantity}=ingredients


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

      <h2>Ingredients:</h2>
      <div className='ingredients-input'>
        {/* {recipe.ingredients.map((input, index) => {

          const { name, quantity } = input
          return (
            <div key={index}>
              <MyInput
                value={name}
                onChange={e => setRecipe({ ...input.input, name: e.target.value })}
                type='text'
                placeholder='Ingredient'
              />
              <MyInput
                value={quantity}
                onChange={e =>
                  setRecipe({ ...input, quantity: e.target.value })
                }
                type='text'
                placeholder='Quantity'
              />
            </div>
          )
        })} */}
        <MyInput
          value={recipe.ingredients.name}
          onChange={e => setRecipe({ ...recipe.ingredients, name: e.target.value })}
          type='text'
          placeholder='Ingredient'
        />
        <MyInput
          value={recipe.ingredients.quantity}
          onChange={e => setRecipe({ ...recipe.ingredients, quantity : e.target.value })}
          type='text'
          placeholder='Quantity'
        />
      </div>

      {/* <IngredientsInput ingredients={ingredients}/> */}

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
