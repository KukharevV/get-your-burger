import React from 'react';
import './item-configuration-list.css';


const ItemConfigurationList = (props) => {

  const { onItemAdd, onItemRemove, ingredients, getIngrImg } = props;

  if (!ingredients) {
    return null;
  }

  return (
    <ul className='list-group'>
      {ingredients.map(({ id, label, count }) => {
        const url = getIngrImg(id);
        return (
          <li key={id} className='list-group-item'>
            <img className='ingr-img'
              src={url} alt='ingredient' />

            <button className='btn btn-danger ingr-button' onClick={() => { onItemAdd(id) }}>
              <i className="fas fa-plus"></i>
            </button>
            <button className='btn btn-danger ingr-button' onClick={() => { onItemRemove(id) }}>
              <i className="fas fa-minus"></i>
            </button>

            <span className='count'>{count}</span>
            <span className='label'>{label}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemConfigurationList;