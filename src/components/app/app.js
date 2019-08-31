import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ErrorBoundry from '../error-boundry/error-boundry';
import Header from '../header';
import BurgerService from '../../services/burger-service';
import { BurgerServiceProvider } from '../burger-service-context';

import {
  HomePage,
  ConfigurationPage,
  OrderPage
} from '../pages';

import OrderConfirmed from '../order-confirmed/order-confirmed';

class App extends Component {
  burgerService = new BurgerService();

  state = {
    order: []
  }

  onOrderAdd = (item) => {
    this.setState(({ order }) => {
      const newOrder = order ? order.slice() : [];
      newOrder.push(item);

      return {
        order: newOrder
      }
    })
  }

  onDoneOrder = () => {
    this.setState({
      order: []
    });
  }

  render() {
    const { order } = this.state;
    const orderCount = order ? order.length : 0;

    return (
      <ErrorBoundry>
        <BurgerServiceProvider value={this.burgerService}>
          <Router>
            <Header count={orderCount}/>
            
            <Switch>
              <Route path='/' exact component={HomePage} />

              <Route path='/burgers/:id?' render={({ match }) => {
                const { id } = match.params;
                return (
                  <ConfigurationPage burgerId={id} onOrderAdd={this.onOrderAdd} />
                );
              }} />

              <Route path='/order/' exact render={() => {
                return (
                  <OrderPage order={order} onDoneOrder={this.onDoneOrder} />
                );
              }} />

              <Route path='/order-confirmed/' component={OrderConfirmed} />
            </Switch>
          </Router>
        </BurgerServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;