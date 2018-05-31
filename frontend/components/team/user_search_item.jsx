import React from 'react';

const UserSearchItem = ({ user, setParentState }) => {
  const handleClick = (e) => {
    console.log(e.currentTarget.value)
  }

  return (
    <li
      value={user.username}
      onClick={handleClick}>
      {user.username}
    </li>
  );
};

export default UserSearchItem;
