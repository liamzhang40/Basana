import React from 'react';
import { connect } from 'react-redux';
import { openDropdown } from '../../actions/dropdown_actions';

const mapStateToProps = (state, ownProps) =>  {
  return {
    project: state.entities.projects[ownProps.match.params.projectId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openDropdown: () => dispatch(openDropdown('updateproject'))
  };
};

const CurrentProject = props => {
  if (!props.project) {
    return (<div></div>);
  } else {
    return (
      <div className='current-project'>
        <span>{props.project.name}</span>
        <button>⌄</button>
      </div>
    );
  }
};

export default connect(mapStateToProps)(CurrentProject);
