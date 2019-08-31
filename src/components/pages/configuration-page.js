import React from 'react';
import { BurgerConfigurator } from '../burger-components';

const ConfigurationPage = (props) => {
  return (
    <BurgerConfigurator itemId={props.burgerId} onOrderAdd={props.onOrderAdd} /> 
  );
};

export default ConfigurationPage;