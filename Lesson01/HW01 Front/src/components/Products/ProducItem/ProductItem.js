import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductItem.module.css';

function ProductItem({ el }) {
  // console.log(`productItem`, el);

  return (
    <li className={styles.li}>
      <p>Название пиццы: {el.name}</p>
      <p>Описание: {el.description}</p>
      <p>Цена: {el.currency}</p>

      <p>
        Цена: {el.price}
        {el.currency}
      </p>
    </li>
  );
}

ProductItem.propTypes = {
  el: PropTypes.shape({}).isRequired,
};

export default ProductItem;
