import React, { Component } from 'react';
import './item-configurator.css';
import ItemConfigurationList from '../item-configuration-list';
import { Link } from 'react-router-dom';
import Spinner from '../spinner';

class ItemConfigurator extends Component {

  state = {
    item: null,
    loading: true
  }

  componentDidMount() {
    this.updateItem();
  }

  onItemAdd = (id) => {
    this.itemOperation(id, 'add');
  };

  onItemRemove = (id) => {
    this.itemOperation(id, 'remove');
  };

  itemOperation(id, operation) {
    this.setState(({ item }) => {
      const newIngr = item.ingredients.map((item) => {
        if (item.id === id) {
          item.count = calcOperation(operation, item.count);
        }

        return item;
      });

      const newItem = {
        ...item
      }
      newItem.ingredients = newIngr;

      return {
        item: newItem,
      }

    });

    const calcOperation = (operation, count) => {
      switch (operation) {
        case 'add':
          if (count <= 3) {
            count++;
          }
          break;
        case 'remove':
          if (count > 0)
            count--;
          break;
        default:
          console.log('uncorrect operation');
      }

      return count;
    }
  }

  updateItem() {
    const { itemId, getItem } = this.props;

    if (!itemId) {
      return null;
    }

    getItem(itemId)
      .then(item => {
        this.setState({
          item,
          loading: false
        })
      
      })
      .catch(err => {
        this.setState({loading: false});
        throw new Error(err);
      });
  }

  render() {
    
    if (this.state.loading) {
      return (
        <div className='container'>
          <div className='row'>
            <Spinner />
          </div>
          
        </div>
      );
    }

    const { itemId, getImg, getIngrImg, onOrderAdd } = this.props;

    if (!itemId) {
      return <h2>Please, select a burger</h2>;
    }

    if (!this.state.item) {
      return null;
    }

    const { label, description, cal, ingredients } = this.state.item;
    const url = getImg(itemId);
    

    return (
      <div className='container burger-configurator'>
        <div className='row'>
          <div className='col-md-6 burger-image'>
            <img src={url} alt='burger' />
          </div>

          <div className='col-md-6 burger-info'>
            <h2 className='title'>{label}</h2>
            <p className='cal-info'>Cal. {cal}</p>
            <p className='descriprion'>{description}</p>
          </div>
        </div>

        <ItemConfigurationList ingredients={ingredients}
          onItemAdd={this.onItemAdd} onItemRemove={this.onItemRemove}
          getIngrImg={getIngrImg} />

        <Link to='/order/' onClick={() => onOrderAdd(this.state.item)}
          className='btn btn-warning btn-lg accept-button'>Add Order</Link>
      </div>
    );
  }

};

export default ItemConfigurator;