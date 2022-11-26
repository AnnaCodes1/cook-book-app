import React, { useState } from 'react'
import RecipeBody from './components/recipe-body/RecipeBody'
import RecipeForm from './components/RecipeForm'
import MySelect from './components/UI/select/MySelect'
import SearchPanel from './components/UI/search-panel/SearchPanel'
import './styles/App.css'
import RecipeList from './components/recipe-list/RecipeList'
import { Recipes } from './components/recipe-data/InitialRecipeObjectList'

let maxId = 1

const createRecipeItem = (title, body) => {
  return {
    id: maxId++,
    title,
    body,
  }
}

const initialRecipeList = [
  createRecipeItem('Chicken soup', 'Hearty soup for cold days'),
  createRecipeItem('Pumpkin soup', 'Creamy soup for autumn days'),
  createRecipeItem('Lentil soup', 'Spicy and rich soup for cold days'),
]

function App() {
  const [recipes, setRecipes] = useState(Recipes)

  const [selectedSort, setSelectedSort] = useState('')

  const [term, setTerm] = useState('')

  const createRecipe = input => {
    const { title, body } = input
    const newRecipe = createRecipeItem(title, body)
    setRecipes([...recipes, newRecipe])
  }

  const removeRecipe = recipe => {
    setRecipes(recipes.filter(r => r.id !== recipe.id))
  }

  const sortRecipes = sort => {
    setSelectedSort(sort)
    setRecipes([...recipes].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  const searchRecipes = value => {
    setTerm(value)
  }

  const search = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter(
      item => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
    )
  }

  const visibleRecipes = search(recipes, term)

  return (
    <div className='App'>
      <SearchPanel onSearchChange={searchRecipes} />
      <RecipeForm onCreated={createRecipe} />
      <MySelect
        value={selectedSort}
        onChange={sortRecipes}
        defaultValue='Sort by'
        options={[
          { value: 'title', name: 'By name' },
          { value: 'body', name: 'By description' },
        ]}
      />
      <RecipeBody recipes={visibleRecipes} />

      {recipes.length ? (
        <RecipeList
          remove={removeRecipe}
          recipes={recipes}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No soup recipes found!</h1>
      )}
    </div>
  )
}

export default App
