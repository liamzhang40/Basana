import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project, teamId }) => {

  const handleClick = () => {

  };

  return (
    <Link to={`/dashboard/teams/${teamId}/projects/${project.id}`}
      onClick={handleClick} >
      <li>
        <span>{project.name}</span>
      </li>
    </Link>
  );
};

export default ProjectIndexItem;
