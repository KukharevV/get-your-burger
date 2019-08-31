import React from 'react';
import { BurgerServiceConsumer } from '../burger-service-context';

const withBurgerService = (Wrapped, mapMethodToProps) => {
  return (props) => {
    return (
      <BurgerServiceConsumer>
        {
          (burgerService) => {
            const serviceProps = mapMethodToProps(burgerService);
            return <Wrapped {...props} {...serviceProps} />
          }
        }
      </BurgerServiceConsumer>
    );
  }
};

export default withBurgerService;