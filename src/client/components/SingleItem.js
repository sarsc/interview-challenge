import React from 'react';

export default ({ item, handleSelectItems }) => {
  const { name, dietaries} = item

  return (
    <li 
      className="item"
      onClick={() => handleSelectItems(item.id)}
    >
      <h2>{name}</h2>
      <p>
        {dietaries.map(dietary => (
          <span className="dietary">{dietary}</span>
        ))}
      </p>
    </li>
  )
}