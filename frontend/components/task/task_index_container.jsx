import { connect } from 'react-redux';
import { fetchTasks } from '../../actions/task_actions';
import TaskIndex from './task_index';

const mapStateToProps = state => {
  return {
    tasks: Object.values(state.entities.tasks),
    // currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: projectId => dispatch(fetchTasks(projectId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
