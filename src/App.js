import React, { useState } from 'react'
import RecipeList from './components/RecipeList'
import './styles/App.css'



function App() {

  const [recipes, setRecipe] = useState([
    { id: 1, title: 'Chicken soup', body: 'Hearty soup for cold days' },
    { id: 2, title: 'Pumpkin soup', body: 'Perfect for autumn chilly days' },
    { id: 3, title: 'Lentil soup', body: 'Spicy and rich soup for cold days' },
  ])

  return (
    <div className="App">
    <RecipeList recipes={recipes}/>
    </div>
  )
}

export default App
