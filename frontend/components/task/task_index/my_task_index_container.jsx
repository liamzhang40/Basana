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

export default connect(mapStateToProps, mapDispatchToProps)(MyTaskIndex);
