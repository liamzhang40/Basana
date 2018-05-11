import React from 'react';

const TeamMemberIndexItem = ({ member }) => {

  let name = ' ';
  if (member) {
    name = member.name[0];
    return (
      <li>{name}</li>
    );
  }

  return (
    <li className='empty-avatar'><i className="fab fa-android"></i></li>
  )
};

export default TeamMemberIndexItem;
