import React, { useState } from 'react'
import RecipeBody from './components/recipe-body/RecipeBody'
import RecipeForm from './components/RecipeForm'
import RecipeList from './components/RecipeList'
import MySelect from './components/UI/select/MySelect'
import SearchPanel from './components/UI/search-panel/SearchPanel'
import './styles/App.css'

let maxId = 1
let maxId2 = 100
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

const createRecipeObject = (title, about, ingredients, recipe) => {
  return {
    id: maxId2++,
    title,
    about,
    ingredients,
    recipe,
  }
}

const initialRecipeObjectList = [
  createRecipeObject(
    'Pumpkin soup',
    'Perfect easy recipe for cold autumn evening',
    [
      { name: 'pumpkin', quantity: '400g' },
      { name: 'whole nutmeg', quantity: 'half' },
      { name: 'single cream', quantity: '150ml' },
      { name: 'salt, pepper, greek oregano', quantity: 'by taste' },
    ],
    'Saute sliced onion in butter. Add grated nutmeg. Add sliced pumkin, salt, pepper, oregano and water to cover pumpkin. Bring to boil. Simmer for 20min. Blend soup and add cream. Stir and serve.'
  ),
]

function App() {
  const [recipes, setRecipes] = useState(initialRecipeList)

  const [recipeObject, setRecipeObject] = useState(initialRecipeObjectList)

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
      return items.filter((item) => !item)
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

      {recipes.length ? (
        <RecipeList
          remove={removeRecipe}
          recipes={visibleRecipes}
          
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No soup recipes found!</h1>
      )}

      <RecipeBody recipeObject={recipeObject} />
    </div>
  )
}

export default App
