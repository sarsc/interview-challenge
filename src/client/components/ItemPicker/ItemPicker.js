import React from 'react';
import PropTypes from 'prop-types'

import SingleItem from './SingleItem';

const ItemPicker =  ({ items, handleSelectItems  }) => {
  return (
    <ul className="item-picker">
      {items && items.map(item => <SingleItem item={item} handleSelectItems={handleSelectItems} />)}
    </ul>
  )
}

ItemPicker.propTypes = {
  items: PropTypes.array,
  handleSelectItems: PropTypes.func
}

export default ItemPicker