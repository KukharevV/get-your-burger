import React from 'react';
import './menu-list-item.css';

const MenuListItem = (props) => {
  const { id, label } = props.burger;
  const url = props.getImg(id);

  return (
    <div className='menu-list-item col-md jumbotron' onClick={() => props.onItemSelected(id)}>
      <h3>{label}</h3>
      <img className='burger-img' src={url} alt='burger' />
    </div>
  );
};

export default MenuListItem;