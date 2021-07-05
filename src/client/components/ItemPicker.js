import React from 'react';

export default ({ items }) => {

  return (
    <React.Fragment>
      {items && items.map(item => ( 
        <ul className="item-picker">
          <li className="item">
            <h2>{item.name}</h2>
            <p>
              {item.dietaries.map(dietary => (
                <span className="dietary">{dietary}</span>
              ))}
            </p>
          </li>
        </ul>
      ))}
    </React.Fragment>
  )
}