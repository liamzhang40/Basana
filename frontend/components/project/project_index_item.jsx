import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project, teamId }) => {

  const handleClick = (e) => {
    $(e.currentTarget)
  };

  return (
    <Link to={`/dashboard/teams/${teamId}/projects/${project.id}`}
      onClick={handleClick} >
      <li>
        <span className='project-name'>{project.name}</span>
        <span
          className='project-options'
          onClick={() => console.log('wutwut')}>...</span>
      </li>
    </Link>
  );
};

export default ProjectIndexItem;
