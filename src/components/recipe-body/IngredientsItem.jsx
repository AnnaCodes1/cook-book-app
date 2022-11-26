import React from 'react'
import classes from './RecipeBody.module.css'

const IngredientsItem = ({ name, quantity }) => {
  return (
    <span className={classes.ingredientsItems}>
      <div>{name}</div>
      <div>{quantity}</div>
    </span>
  )
}

export default IngredientsItem
