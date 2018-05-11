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
    <li className='empty-avatar'></li>
  )
};

export default TeamMemberIndexItem;
