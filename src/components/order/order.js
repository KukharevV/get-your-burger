import React from 'react';
import './order.css';
import { Link } from 'react-router-dom';
import OrderList from '../order-list';

const Order = (props) => {
  return (
    <div className='container'>
      <h2>Your order:</h2>

      <OrderList order={props.order} />

      <Link to='/order-confirmed/' className='btn btn-success link-btn'
        onClick={props.onDoneOrder}>Done</Link>
      <Link to='/' className='btn btn-danger link-btn'>Menu</Link>
    </div>
  )
}

export default Order;