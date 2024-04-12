import React from 'react'

const RecipePage = (props) => {
  const { state } = props.location;
  const servings = state;

 return (
    <div >
      <h1>{servings}</h1>
    </div>
  )
}

export default RecipePage