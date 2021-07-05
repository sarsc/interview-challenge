import React, { useState, useEffect } from 'react';
import './App.css';

import ItemPicker from './components/ItemPicker/ItemPicker';
import MenuPreview from './components/MenuPreview/MenuPreview';

export default () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch('/api/items')
    .then(response => response.json())
    .then(data => {
      setItems(data.items)
      })
      .catch( err => console.error(err))
  }, []);

  const handleSelectItems = (id) => {
    const selectedItem = items.find(item => item.id === id);
    
    setSelectedItems([...selectedItems, selectedItem]);
  }

  const removeItem = (id) => {
    const itemIndexToRemove = selectedItems.findIndex(selectedItem => selectedItem.id === id);
    const newItems = [...selectedItems];
    newItems.splice(itemIndexToRemove, 1);

    setSelectedItems(newItems)
  }

  return (
  <div className="wrapper">
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>6 items</span>
          </div>
          <div className="col-6 menu-summary-right">
            6x <span className="dietary">ve</span>
            4x <span className="dietary">v</span>
            12x <span className="dietary">n!</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container menu-builder">
      <div className="row">
        <div className="col-4">
          <div className="filters">
            <input className="form-control" placeholder="Name" />
          </div>
          <ItemPicker
            items={items}
            handleSelectItems={handleSelectItems} 
          />
        </div>
        <div className="col-8">
          <h2>Menu preview</h2>
          <MenuPreview
            selectedItems={selectedItems}
            removeItem={removeItem}
          />
        </div>
      </div>
    </div>
  </div>
)};
