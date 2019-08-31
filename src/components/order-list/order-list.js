import React, { Component } from 'react';
import './order-list.css';
import OrderListItem from '../order-list-item';

class OrderList extends Component {

  _orderId = 1;

  addOrderId() {
    return '' + this._orderId++
  }

  render() {
    const { order } = this.props;

    if (!order) {
      return null;
    }

    return (
      <ul className='list-group'>
        {order.map((item) => {
          item.orderId = this.addOrderId();
          
          return (
            <OrderListItem key={this.addOrderId()} item={item} />
          );
        })}
      </ul>
    );
  }
};

export default OrderList;