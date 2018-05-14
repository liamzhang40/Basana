import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project, teamId, currentUserId }) => {

  const handleClick = (e) => {
    $(e.currentTarget)
  };

  let li = '';
  // will only display public projects unless the current user is the
  // creator
  if (!project.privacy || project.creator_id === currentUserId ) {
    li = (
      <li>
        <span className='project-name'>{project.name}</span>
        <span
          className='project-options'
          onClick={() => console.log('wutwut')}>...</span>
      </li>
    )
  }
  return (
    <Link to={`/dashboard/teams/${teamId}/projects/${project.id}`}
      onClick={handleClick} >
      {li}
    </Link>
  );
};

export default ProjectIndexItem;
