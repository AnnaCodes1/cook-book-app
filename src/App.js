import React, { useState } from 'react'
import RecipeBody from './components/recipe-body/RecipeBody'
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

  const recipeObject = [
    {
      title: 'Pumpkin Soup',
      about: 'Perfect easy recipe for cold autumn evening',
      ingredients: [
        { name: 'pumpkin', quantity: '400g' },
        { name: 'whole nutmeg', quantity: 'half' },
        { name: 'single cream', quantity: '150ml' },
        { name: 'salt, pepper, greek oregano', quantity: 'by taste' },
      ],
      recipe:
        'Saute sliced onion in butter. Add grated nutmeg. Add sliced pumkin, salt, pepper, oregano and water to cover pumpkin. Bring to boil. Simmer for 20min. Blend soup and add cream. Stir and serve.',
    },
    {
      title: 'Celery Soup',
      about: 'Perfect easy recipe for cold autumn evening',
      ingredients: [
        { name: 'pumpkin', quantity: '400g' },
        { name: 'whole nutmeg', quantity: 'half' },
        { name: 'single cream', quantity: '150ml' },
        { name: 'salt, pepper, greek oregano', quantity: 'by taste' },
      ],
      recipe:
        'Saute sliced onion in butter. Add grated nutmeg. Add sliced pumkin, salt, pepper, oregano and water to cover pumpkin. Bring to boil. Simmer for 20min. Blend soup and add cream. Stir and serve.',
    },
    {
      title: 'Onion Soup',
      about: 'Perfect easy recipe for cold autumn evening',
      ingredients: [
        { name: 'pumpkin', quantity: '400g' },
        { name: 'whole nutmeg', quantity: 'half' },
        { name: 'single cream', quantity: '150ml' },
        { name: 'salt, pepper, greek oregano', quantity: 'by taste' },
      ],
      recipe:
        'Saute sliced onion in butter. Add grated nutmeg. Add sliced pumkin, salt, pepper, oregano and water to cover pumpkin. Bring to boil. Simmer for 20min. Blend soup and add cream. Stir and serve.',
    },
  ]

  const [selectedSort, setSelectedSort] = useState('')

  const createRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
  }

  const removeRecipe = (recipe) => {
    setRecipes(recipes.filter((r) => r.id !== recipe.id))
  }

  const sortRecipes = (sort) => {
    setSelectedSort(sort)
    setRecipes([...recipes].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <RecipeForm create={createRecipe} />
      <hr style={{ margin: '15px 0' }} />

      <MySelect
        value={selectedSort}
        onChange={sortRecipes}
        defaultValue="Sort by"
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' },
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

      <RecipeBody recipeObject={recipeObject} />
    </div>
  )
}

export default App
