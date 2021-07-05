import React from 'react';
import PropTypes from 'prop-types'

const itemPreview = ({ selectedItem, removeItem }) => {
  const { name, dietaries, id} = selectedItem
  return (
    <li className="item">
      <h2>{name}</h2>
      <p>
        {dietaries.map(dietary => (
          <span className="dietary">{dietary}</span>
        ))}
      </p>
      <button 
        className="remove-item"
        onClick={() => removeItem(id)}
      >x</button>
    </li>
  )
}

itemPreview.propTypes = {
  item: PropTypes.object,
  handleSelectItems: PropTypes.func,
}

export default itemPreview;