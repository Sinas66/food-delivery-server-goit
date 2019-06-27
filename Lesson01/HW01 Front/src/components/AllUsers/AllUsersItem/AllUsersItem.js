import React from 'react';
import PropTypes from 'prop-types';

function AllUsersItem({ el }) {
  // console.log(el);

  return (
    <li>
      <p>Имя: {el.username}</p>
    </li>
  );
}

AllUsersItem.propTypes = {
  el: PropTypes.shape({}).isRequired,
};

export default AllUsersItem;
