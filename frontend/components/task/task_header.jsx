import React from 'react';
import { withRouter } from 'react-router-dom';
import { minDate } from '../../util/date_util';

class TaskHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { createTask, teamId, projectId, history } = this.props;
    createTask({
      project_id: projectId,
      assignee_id: '',
      name: 'Task name',
      description: '',
      completion: false,
      privacy: false,
      due_date: minDate()
    }).then((res) => {
      history.push(`/dashboard/teams/${teamId}/projects/${projectId}/tasks/${res.task.id}`);
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
