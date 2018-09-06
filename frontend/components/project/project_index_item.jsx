import React from 'react';
import { Link } from 'react-router-dom';
import ProjectOptionDropdown from './project_option_dropdown_container';
import DropdownButton from '../button/dropdown_button';

const ProjectIndexItem = ({ project, teamId, currentUserId }) => {
  let li = '';
  // will only display public projects unless the current user is the
  // creator
  if (!project.privacy || project.creator_id === currentUserId ) {
    li = (
      <li
        className='project-row'>
        <span className='project-name'>{project.name}</span>
        <DropdownButton
          dropdown={ProjectOptionDropdown}
          buttonStyle={() => <span>...</span>}
          type="project"/>
      </li>
    );
  }

  return (
    <Link to={`/dashboard/teams/${teamId}/projects/${project.id}`}>
        {li}
    </Link>
  );
}

export default ProjectIndexItem;
