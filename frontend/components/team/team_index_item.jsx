import React from 'react';
import { Link } from 'react-router-dom';

const TeamIndexItem = props => {
  const { team, closeDropdown, fetchProjects } = props;

  const handleClick = () => {
    closeDropdown();
    // fetchProjects(team.id);
  };

  return (
    <Link
      to={`/dashboard/teams/${team.id}`}
      onClick={handleClick}
      ><li>{team.name}</li></Link>
  );
};

export default TeamIndexItem;
