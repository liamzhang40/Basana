import React from 'react';
import { withRouter } from 'react-router-dom';

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
      due_date: ''
    }).then((res) => {
      // document.getElementById('edit-create').className = 'task-edit-visible';
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
