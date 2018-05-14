import React from 'react';

const TeamMemberIndexItem = ({ member }) => {

  let url = ' ';
  if (member) {
    url = member.url;
    return (
      <li><img src={url}/></li>
    );
  }

  return (
    <li className='empty-avatar'><i className="fab fa-android"></i></li>
  )
};

export default TeamMemberIndexItem;
