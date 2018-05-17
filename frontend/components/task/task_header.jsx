import React from 'react';
import { withRouter } from 'react-router-dom';
import { minDate } from '../../util/date_util';

class TaskHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { createTask, teamId, projectId, history, currentUserId } = this.props;
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
    return (
      <h2 className='task-header'>
        <button onClick={this.handleClick}>Add Task</button>
      </h2>
    );
  }
}

export default withRouter(TaskHeader);
