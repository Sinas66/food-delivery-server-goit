import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ data }) => {
  return (
    <div>
      <input type="checkbox" id={data} name="category" value={data} />
      <span>{data}</span>
    </div>
  );
};

Categories.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Categories;
