import MenuList from '../menu-list';
import { withBurgerService } from '../hoc';

const mapMethodToProps = (burgerService) => {
  return {
    getMenu: burgerService.getBurgers,
    getItemImage: burgerService.getBurgerImage
  }
};

const BurgerMenu = withBurgerService(MenuList, mapMethodToProps);

export default BurgerMenu;





