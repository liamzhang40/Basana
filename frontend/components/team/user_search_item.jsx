import React from 'react';

const UserSearchItem = ({ user, setParentState, clearUserSearch }) => {
  const handleClick = (e) => {
    const emails = e.currentTarget.attributes.value.nodeValue;
    setParentState({ emails });
    clearUserSearch();
  }

  return (
    <li
      value={user.username}
      onClick={handleClick}>
      <span>{user.username}</span>
    </li>
  );
};

export default UserSearchItem;
