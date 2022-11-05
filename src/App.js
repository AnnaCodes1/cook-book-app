import React, { useState } from 'react'
import MyButton from './components/button/MyButton'
import MyInput from './components/input/MyInput'
import RecipeList from './components/RecipeList'
import './styles/App.css'

function App() {
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Chicken soup', body: 'Hearty soup for cold days' },
    { id: 2, title: 'Pumpkin soup', body: 'Perfect for autumn chilly days' },
    { id: 3, title: 'Lentil soup', body: 'Spicy and rich soup for cold days' },
  ])

  const [recipe, setRecipe] = useState({ title: '', body: '' })

  const addNewRecipe = (e) => {
    e.preventDefault()

    setRecipes([...recipes, { ...recipe, id: Date.now() }])
    setRecipe({ title: '', body: '' })
  }

  return (
    <div className="App">
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

      <RecipeList recipes={recipes} title="Рецепты супов" />
    </div>
  )
}

export default App
