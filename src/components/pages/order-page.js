import React from 'react';
import Order from '../order';

const OrderPage = (props) => {
  return (
    <Order order={props.order} onDoneOrder={props.onDoneOrder}/>
  );
};

export default OrderPage;