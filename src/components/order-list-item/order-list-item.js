import React from 'react';
import './order-list-item.css';

const OrderListItem = (props) => {
  const { label, cal, ingredients } = props.item;

  return (
    <li className='list-group-item order-list-item'>
      <h4>{label}</h4>
      <div className='order-description'>
        <span>cal.{cal}</span>
        <ul className='list-group'>
          <h5>Ingredients:</h5>
          {ingredients.map((item) => {
            return (
              <li key={item.id} className='list-group-item ing-item'>
                <span className='ing-label'>{item.label}:</span>
                <span>{item.count}</span>
              </li>
            );
          })}
        </ul>
      </div>

    </li>
  );
}

export default OrderListItem;