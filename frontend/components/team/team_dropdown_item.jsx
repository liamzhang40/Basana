import React from 'react';
import { Link } from 'react-router-dom';

const TeamDropdownItem = ({ team, currentUserId }) => {
  return (
    <Link
      to={`/dashboard/teams/${team.id}/users/${currentUserId}`}
      ><li className='team-name'>{team.name}</li></Link>
  );
};

export default TeamDropdownItem;
