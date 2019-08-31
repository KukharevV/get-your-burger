
class BurgerService {
  _apiBase = `http://localhost:3001`;
  _imgBase = `${this._apiBase}/assets/images`;

  getResponse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`,
        `, recieved ${res.status}`);
    }

    return await res.json();
  }

  getBurgers = async () => {
    const res = await this.getResponse(`/burgers/`);
    return res;
  }

  getBurger = async (id) => {
    const burger = await this.getResponse(`/burgers/${id}`);
    return burger;
  }

  getBurgerImage = (id) => {
    return `${this._imgBase}/burgers/${id}.png`
  }

  getIngredImage = (id) => {
    return `${this._imgBase}/ingr/${id}.png`
  }
}

export default BurgerService;

