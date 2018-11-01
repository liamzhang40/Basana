import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAssigneeTasks } from '../../../actions/task_actions';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
  };
};

const MyTaskIndex = ({ currentUserId, match }) => {
  // only task index will take care of fetching tasks
  return (
    <Link
      className="my-task-link"
      to={`/dashboard/teams/${match.params.teamId}/users/${currentUserId}`}>My Tasks</Link>
  );
};

export default connect(mapStateToProps)(MyTaskIndex);
