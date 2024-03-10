import React, { useState } from 'react';
import './PriceSelect.css'

function PriceSelect() {
  // Define state to manage the list of items and their checked state
  const [items, setItems] = useState([
    { id: 1, name: '$0 - $25', checked: false },
    { id: 2, name: '$25 - $50', checked: false },
    { id: 3, name: '$50 - $100', checked: false },
    { id: 4, name: '$100 - $250', checked: false },
    { id: 5, name: '$250+', checked: false },
  ]);

  // Function to handle checkbox change
  const handleCheckboxChange = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div>
      <h2 id="price-select-header">Shop by Price</h2>
      {items.map(item => (
        <div className="price-select-item" key={item.id}>
          <label>
            <input
              className='checkbox'
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label 
            className="custom-checkbox-label"
            onClick={() => handleCheckboxChange(item.id)}>
            </label>
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default PriceSelect;