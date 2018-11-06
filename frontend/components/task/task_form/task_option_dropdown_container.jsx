import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeTask } from '../../../actions/task_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapDispatchToProps = dispatch => {
  return {
    removeTask: taskId => dispatch(removeTask(taskId)),
    closeModal: () => dispatch(closeModal())
  };
};

class TaskOptionDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { match, history, task, removeTask, closeModal } = this.props;
    const { teamId, projectId, userId } = match.params;
    closeModal();
    removeTask(task.id);
    if (projectId) {
      history.push(`/dashboard/teams/${teamId}/projects/${projectId}`);
    } else {
      history.push(`/dashboard/teams/${teamId}/users/${userId}`);
    }
  }

  render() {
    return (
      <ul className='task-option-dropdown-list'>
        <button onClick={this.handleClick}>
          <li>Delete Task</li>
        </button>
      </ul>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(TaskOptionDropdown));
