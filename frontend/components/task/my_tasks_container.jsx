import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAssigneeTasks } from '../../actions/task_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    tasks: Object.values(state.entities.tasks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAssigneeTasks: assigneeId => dispatch(fetchAssigneeTasks(assigneeId))
  };
};

class MyTasks extends React.Component {
  // not necessary
  componentDidMount() {
    if (!this.props.tasks.length) {
      this.props.fetchAssigneeTasks(this.props.currentUserId);
    }
  }
  // can be removed

  render() {
    return (
      <Link
        to={`/dashboard/teams/${this.props.match.params.teamId}`}
        onClick={() => {
          this.props.fetchAssigneeTasks(this.props.currentUserId);
        }}>My Tasks</Link>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks);
