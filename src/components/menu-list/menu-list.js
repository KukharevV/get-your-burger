import React, { Component } from 'react';
import './menu-list.css';
import MenuListItem from '../menu-list-item';

import Spinner from '../spinner';

class MenuList extends Component {

  state = {
    menu: null,
    loading: true
  }

  componentDidMount() {
    this.renderMenu();
  }

  renderMenu = () => {
    const { getMenu } = this.props;
    getMenu()
      .then(menu => {
        this.setState({
          menu,
          loading: false
        })
      })
      .catch(err => {
        this.setState({ loading: false })
        throw new Error(err);
      });
  }

  render() {

    const { getItemImage } = this.props;
    const { menu, loading } = this.state;

    if (loading) {
      return (
        <div className='container'>
          <div className='row'>
            <Spinner />
          </div>

        </div>
      );
    }

    return (
      <div className='container menu-list'>
        <div className='row'>
          {menu.map(item => {
            return (
              <MenuListItem key={item.id} onItemSelected={this.props.onItemSelected}
                burger={item} getImg={getItemImage} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default MenuList;