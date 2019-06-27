import React from 'react';
import PropTypes from 'prop-types';

const NewUser = ({ userCreated }) => {
  // if (!userCreated) return null;

  return (
    <div>
      <h2>Вы Успешно создали пользователя!</h2>
      <p>Ваш логин {userCreated.username}</p>
    </div>
  );
};

export default NewUser;

NewUser.propTypes = {
  userCreated: PropTypes.shape({}).isRequired,
};
