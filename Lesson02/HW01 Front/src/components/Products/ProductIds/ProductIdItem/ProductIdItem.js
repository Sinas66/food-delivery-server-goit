import React from 'react';
import PropTypes from 'prop-types';

const ProductIdItem = ({ el }) => {
  return <button type="button">{el}</button>;
};

ProductIdItem.propTypes = {
  el: PropTypes.string.isRequired,
};

export default ProductIdItem;
