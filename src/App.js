import React from 'react';
import RecipeItem from './components/RecipeItem';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <RecipeItem recipe={{id: 1, title: 'Javascript', body: 'Description'}}/>
    </div>
  );
}

export default App;
