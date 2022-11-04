import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="recipe">
        <div className="recipe_content">
          <strong>1. First recipe</strong>
          <div>First recipe according to diet N5</div>
        </div>
        <div className="recipe__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
