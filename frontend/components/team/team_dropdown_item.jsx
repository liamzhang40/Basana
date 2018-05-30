import React from 'react';
import { Link } from 'react-router-dom';

const TeamDropdownItem = props => {
  const { team, fetchProjects } = props;

  return (
    <Link
      to={`/dashboard/teams/${team.id}`}
      ><li className='team-name'>{team.name}</li></Link>
  );
};

export default TeamDropdownItem;
