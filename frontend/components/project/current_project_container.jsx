import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) =>  {
  return {
    project: state.entities.projects[ownProps.match.params.projectId]
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const CurrentProject = props => {
  if (!props.project) {
    return (<div></div>);
  } else {
    return (
      <div className='current-project'>
        <span>{props.project.name}</span>
      </div>
    );
  }
};

export default connect(mapStateToProps)(CurrentProject);
