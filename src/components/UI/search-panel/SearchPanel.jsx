import React, { useState } from 'react'
import classes from './SearchPanel.module.css'

const SearchPanel = ({ onSearchChange }) => {
  const [term, setTerm] = useState('')

  const onChange = e => {
    const value = e.target.value
    setTerm(value)
    onSearchChange(value)
  }

  return (
    <form>
      <input
        value={term}
        onChange={onChange}
        type='text'
        placeholder='Search for a recipe'
        className={classes.searchPanel}
      />
    </form>
  )
}

export default SearchPanel
