  
  import React from 'react';

  export default ({ selectedItem }) => {
    const { name, dietaries} = selectedItem

    return (
      <li className="item">
        <h2>{name}</h2>
        <p>
          {dietaries.map(dietary => (
            <span className="dietary">{dietary}</span>
          ))}
        </p>
        <button className="remove-item">x</button>
      </li>
    )
  }