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
          buttonStyle={() => <span>⌄</span>}
          type="current-project"/>
      </div>
    );
  }
};

export default connect(mapStateToProps)(CurrentProject);
