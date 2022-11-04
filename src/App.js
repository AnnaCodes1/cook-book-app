import React, { useState, useRef } from 'react'
import MyButton from './components/button/MyButton'
import MyInput from './components/input/MyInput'
import RecipeList from './components/RecipeList'
import './styles/App.css'

function App() {
  const [recipes, setRecipe] = useState([
    { id: 1, title: 'Chicken soup', body: 'Hearty soup for cold days' },
    { id: 2, title: 'Pumpkin soup', body: 'Perfect for autumn chilly days' },
    { id: 3, title: 'Lentil soup', body: 'Spicy and rich soup for cold days' },
  ])

  const [recipes2, setRecipe2] = useState([
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
  const bodyInputRef = useRef()

  const addNewRecipe = (e) => {
    e.preventDefault()
    console.log(bodyInputRef.current.value)
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

      {/* {Неуправляемый компонент} */}
      <MyInput ref={bodyInputRef} type="text" placeholder="Description" />

      <MyButton onClick={addNewRecipe}>Add recipe</MyButton>

      <RecipeList recipes={recipes} title="Рецепты супов" />
      <RecipeList recipes={recipes2} title="Рецепты плова" />
    </div>
  )
}

export default App
