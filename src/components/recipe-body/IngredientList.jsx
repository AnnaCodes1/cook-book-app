import React from 'react'
import IngredientsItem from './IngredientsItem'

const IngredientList = ({ingredients}) => {
  const elements = ingredients.map((item) => {
   
    return (
      <li>
        <IngredientsItem {...item}/>
      </li>
    )
  })

  return <ul className='ingredients-list list-unstyled'>Ingredients:{elements}</ul>
}

export default IngredientList
