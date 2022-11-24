import React from 'react'

const IngredientsItem = ({ name, quantity }) => {
  return (
    <span className='ingredients-items'>
      <div>{name}</div>
      <div>{quantity}</div>
    </span>
  )
}

export default IngredientsItem
