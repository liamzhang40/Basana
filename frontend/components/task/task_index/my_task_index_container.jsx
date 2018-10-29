import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAssigneeTasks } from '../../../actions/task_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAssigneeTasks: assigneeId => dispatch(fetchAssigneeTasks(assigneeId))
  };
};

class MyTaskIndex extends React.Component {
  // only task index will take care of fetching tasks
  handleClick() {
    return () => this.props.fetchAssigneeTasks(this.props.currentUserId);
  }

  render() {
    return (
      <Link
        className="my-task-link"
        to={`/dashboard/teams/${this.props.match.params.teamId}`}
        onClick={this.handleClick}>My Tasks</Link>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTaskIndex);
