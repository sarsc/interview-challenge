import React from 'react';
import PropTypes from 'prop-types'

import ItemPreview from './ItemPreview';

const MenuPreview =  ({ selectedItems, removeItem}) => {
  return (
    <ul className="menu-preview">
      {selectedItems && selectedItems.map(selectedItem => <ItemPreview 
        selectedItem={selectedItem} 
        removeItem={removeItem}
      />)}
   </ul>
  )
}

MenuPreview.propTypes = {
  selectedItems: PropTypes.array,
  removeItem: PropTypes.func,
}

export default MenuPreview