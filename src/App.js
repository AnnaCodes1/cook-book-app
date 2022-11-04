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

  const [recipes2, setRecipes2] = useState([
    { id: 1, title: 'Plov with meat', body: 'Hearty soup for cold days' },
    {
      id: 2,
      title: 'Plov with curaga',
      body: 'Perfect for autumn chilly days',
    },
    {
      id: 3,
      title: 'Plov with mushrooms',
      body: 'Spicy and rich soup for cold days',
    },
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewRecipe = (e) => {
    e.preventDefault()
    const newRecipe = {
      id: Date.now(),
      title,
      body,
    }
    setRecipes([...recipes, newRecipe])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      {/* {Управляемый компонент} */}
      <MyInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />

      <MyInput
        value={body}
        onChange={(e) => setBody(e.target.value)}
        type="text"
        placeholder="Description"
      />

      <MyButton onClick={addNewRecipe}>Add recipe</MyButton>

      <RecipeList recipes={recipes} title="Рецепты супов" />
      <RecipeList recipes={recipes2} title="Рецепты плова" />
    </div>
  )
}

export default App
