import React, { useState } from 'react'
import RecipeForm from './components/RecipeForm'
import RecipeList from './components/RecipeList'
import MySelect from './components/UI/select/MySelect'
import './styles/App.css'

function App() {
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Chicken soup', body: 'Hearty soup for cold days' },
    { id: 2, title: 'Pumpkin soup', body: 'Perfect for autumn chilly days' },
    { id: 3, title: 'Lentil soup', body: 'Spicy and rich soup for cold days' },
  ])

  const createRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
  }

  const removeRecipe = (recipe) => {
    setRecipes(recipes.filter((r) => r.id !== recipe.id))
  }


  const sortRecipes = (sort) => {
    setSelectedSort(sort);
    setRecipes([...recipes].sort((a,b) => a[sort].localeCompare(b[sort])))
  }
  const [selectedSort, setSelectedSort] = useState('')

  return (
    <div className="App">
      <RecipeForm create={createRecipe} />
      <hr style={{ margin: '15px 0' }} />
      <MySelect
        value={selectedSort}
        onChange={sortRecipes}
        defaultValue="Sort by"
        options={[
          { value: 'title', name: 'By title' },
          { value: 'body', name: 'By content' },
        ]}
      />

      {recipes.length ? (
        <RecipeList
          remove={removeRecipe}
          recipes={recipes}
          title="Рецепты супов"
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No soup recipes found!</h1>
      )}
    </div>
  )
}

export default App
