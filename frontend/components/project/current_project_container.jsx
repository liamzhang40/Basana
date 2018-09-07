import React from 'react';
import { connect } from 'react-redux';
import DropdownButton from '../button/dropdown_button';
import ProjectOptionDropdownContainer from './project_option_dropdown_container';

const mapStateToProps = (state, ownProps) =>  {
  return {
    project: state.entities.projects[ownProps.match.params.projectId]
  };
};

const CurrentProject = ({ project }) => {
  if (!project) {
    return <div className='my-task'>My Task</div>;
  } else {
    return (
      <div
        className='current-project'>
        <span>{project.name}</span>
        <DropdownButton
          dropdown={ProjectOptionDropdownContainer}
          buttonStyle={() => <svg viewBox="0 0 32 32"><path d="M16,22.5c-0.3,0-0.7-0.1-0.9-0.3l-11-9c-0.6-0.5-0.7-1.5-0.2-2.1c0.5-0.6,1.5-0.7,2.1-0.2L16,19.1l10-8.2c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-11,9C16.7,22.4,16.3,22.5,16,22.5z"></path></svg>}
          type="current-project"/>
      </div>
    );
  }
};

export default connect(mapStateToProps)(CurrentProject);
