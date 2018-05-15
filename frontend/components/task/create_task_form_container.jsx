import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createTask } from '../../actions/task_actions';
import TaskForm from './task_form';

const mapStateToProps = (state, ownProps) => {
  const project = state.entities.projectsp[ownProps.match.params.projectId];
  return {
    errors: state.errors.tasks,
    task: {
      project_id: project.id,
      assignee_id: '',
      name: '',
      description: '',
      privacy: false,
      completion: false
    },
    project
  };
};

const mapDispatchToProps= dispatch => {
  return {
    processForm: task => dispatch(createTask(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
