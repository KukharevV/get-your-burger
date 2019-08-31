import React from 'react';
import { BurgerMenu } from '../burger-components';
import { withRouter } from 'react-router-dom';

const HomePage = ({ history }) => {
  return (
    <div>
      <BurgerMenu onItemSelected={(itemId) => {
        history.push(`/burgers/${itemId}`);
      }} />
    </div>
  );
};

export default withRouter(HomePage);