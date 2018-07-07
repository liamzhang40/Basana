import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createTask, toggleTaskVisibility } from '../../../actions/task_actions';
import { minDate } from '../../../util/date_util';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    taskVisibility: state.ui.taskVisibility
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTask: task => dispatch(createTask(task)),
    toggleTaskVisibility: () => dispatch(toggleTaskVisibility())
  };
};

class TaskHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { createTask, match, history, currentUserId } = this.props;
    const { teamId, projectId } = match.params;
    createTask({
      project_id: (projectId ? projectId : ''),
      assignee_id: (projectId ? '' : currentUserId),
      name: 'Task name',
      description: '',
      completion: false,
      privacy: false,
      due_date: minDate()
    }).then((res) => {
      if (projectId) {
        history.push(`/dashboard/teams/${teamId}/projects/${projectId}/tasks/${res.task.id}`);
      } else {
        history.push(`/dashboard/teams/${teamId}/tasks/${res.task.id}`);
      }
    });
  }

  render() {
    const { taskVisibility } = this.props;

    return (
      <h2 className='task-header'>
        { taskVisibility || <button
          className="task-add-button"
          onClick={this.handleClick}>Add Task</button>}
        <button
          className="task-toggle-button"
          onClick={this.props.toggleTaskVisibility}>
          {taskVisibility ? "Incompleted Tasks" : "Completed Tasks"}
        </button>
      </h2>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskHeader));
