import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Categories from './Categories/Categories';
import ProductIds from './ProductIds/ProductIds';
import {
  INITIAL_PRODUCTS_NAME,
  INITIAL_PRODUCTS_CATEGORY,
  PRODUCTS_URL,
} from '../../constance';

class Products extends Component {
  state = {
    productsId: [],
    categoriesList: [],
    input: '19112834',
    data: [],
  };

  componentDidMount = () => {
    console.log(`componentDidMount`);
    this.getProductsId();
    this.getCategoriesList();
  };

  getProductsId = () => {
    fetch(INITIAL_PRODUCTS_NAME)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ productsId: data });
        // console.log(this.state.productsId);
      })
      .catch(err => console.error(`getProductsId err`, err));
  };

  getCategoriesList = () => {
    fetch(INITIAL_PRODUCTS_CATEGORY)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ categoriesList: data });
        // console.log(this.state.productsId);
      })
      .catch(err => console.error(`getProductsId err`, err));
  };

  getProductsById = () => {
    const { input } = this.state;
    // const idInput = input.split(`,`);
    let url = PRODUCTS_URL + input;

    if (input[0] === '') {
      return;
    }

    if (input.split(`,`).length > 1) {
      url = `${PRODUCTS_URL}?ids/${input}`;
      // console.log(`${PRODUCTS_URL}?ids/${input}`);
    }

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data });
        // console.log(this.state.productsId);
      })
      .catch(err => console.error(`getProductsId err`, err));
  };

  getProductsByCategories = () => {};

  // randomProductId = () => {
  //   const { productsId } = this.state;
  //   let randomId = new Array(productsId);
  //   randomId = randomId.sort(() => Math.random() - 0.5);
  //   randomId.length = 1;
  //   return randomId;
  // };

  onInput = e => {
    this.setState({ input: e.target.value });
  };

  doNotUseArrayIndexInKeys = ind => {
    return ind;
  };

  render() {
    const { productsId, categoriesList, input } = this.state;
    return (
      <div>
        <button type="button">Показать случайный товар</button>

        <form action="">
          <input type="text" defaultValue={input} onChange={this.onInput} />
          <button type="button" onClick={this.getProductsById}>
            Показать товар
          </button>
        </form>

        <form action="">
          <p>Категории</p>
          {categoriesList.length > 0 &&
            categoriesList.map((el, index) => (
              <Categories
                data={el}
                key={this.doNotUseArrayIndexInKeys(index)}
              />
            ))}
          <p>Cписок товаров</p>
          {productsId.length > 0 && (
            <ProductIds
              data={productsId}
              keyid={this.doNotUseArrayIndexInKeys}
            />
          )}
        </form>
      </div>
    );
  }
}

Products.propTypes = {};

export default Products;
