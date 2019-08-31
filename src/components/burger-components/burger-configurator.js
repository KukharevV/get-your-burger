import ItemConfigurator from '../item-configurator';
import { withBurgerService } from '../hoc';

const mapMethodToProps = (burgerService) => {
  return {
    getItem: burgerService.getBurger,
    getImg: burgerService.getBurgerImage,
    getIngrImg: burgerService.getIngredImage
  }
};

const BurgerConfigurator = withBurgerService(ItemConfigurator, mapMethodToProps);

export default BurgerConfigurator;
