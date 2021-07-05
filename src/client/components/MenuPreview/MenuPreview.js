import React from 'react';
import PropTypes from 'prop-types'

import ItemPreview from './ItemPreview';

const MenuPreview =  ({ selectedItems }) => {
  return (
    <ul className="menu-preview">
      {selectedItems && selectedItems.map(selectedItem => <ItemPreview selectedItem={selectedItem} />)}
   </ul>
  )
}

MenuPreview.propTypes = {
  selectedItems: PropTypes.array,
}

export default MenuPreview