import React from 'react';
import PropTypes from 'prop-types';
import UsersItem from './AllUsersItem/AllUsersItem';

function UsersList({ allUsers, closeUserList }) {
  // console.log(allUsers);

  return (
    <div>
      <h2>А вот и список</h2>
      <ul>
        {allUsers.map(el => (
          <UsersItem el={el} key={el.id}></UsersItem>
        ))}
      </ul>
      <button onClick={closeUserList} type="button">
        Закрыть
      </button>
    </div>
  );
}

UsersList.propTypes = {
  allUsers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  closeUserList: PropTypes.func.isRequired,
};

export default UsersList;
