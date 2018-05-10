import React from 'react';
import { Link } from 'react-router-dom';

const TeamIndexItem = props => {
  const { team, closeDropdown } = props;
  return (
    <li><Link
      to={`/dashboard/teams/${team.id}`}
      onClick={() => closeDropdown()}
      >{team.name}</Link></li>
  );
};

export default TeamIndexItem;
