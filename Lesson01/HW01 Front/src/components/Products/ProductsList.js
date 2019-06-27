import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProducItem/ProductItem';

function ProductsList({ data, closeProductList }) {
  console.log(`productList`, data);

  return (
    <div>
      <h2>Вот список всех пицц</h2>
      <ul>
        {data.map(el => (
          <ProductItem el={el} key={el.id} />
        ))}
      </ul>
      <button type="button" onClick={closeProductList}>
        Закрыть список Пицц
      </button>
    </div>
  );
}

ProductsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  closeProductList: PropTypes.func.isRequired,
};

export default ProductsList;
