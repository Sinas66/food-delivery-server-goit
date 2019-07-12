import React from 'react';
import PropTypes from 'prop-types';
import ProductIdItem from './ProductIdItem/ProductIdItem';

const ProductIds = ({ data, keyid }) => {
  return (
    <div>
      {data.map((el, ind) => (
        <ProductIdItem el={el} key={keyid(ind)} />
      ))}
    </div>
  );
};

ProductIds.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  keyid: PropTypes.func.isRequired,
};

export default ProductIds;
