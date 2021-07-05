import React from 'react';
import PropTypes from 'prop-types'

const SingleItem = ({ item, handleSelectItems }) => {
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

SingleItem.propTypes = {
  item: PropTypes.object,
  handleSelectItems: PropTypes.func,
}

export default SingleItem;