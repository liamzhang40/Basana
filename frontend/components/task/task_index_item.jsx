import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   visible: false
    // };
    this.timeout = null;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState({visible: !this.state.visible});
    // document.getElementById('task-form-container').className = 'task-edit-visible';
  }

  update(field) {
    const {
      updateTask,
      updateReduxTask,
      task
    } = this.props;

    return (e) => {
      updateReduxTask({id: task.id, [field]: e.currentTarget.value});

      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        updateTask(this.props.task);
        this.timeout = null;
      }, 2000);
    };

  }

  render() {
    const {
      task,
      teamId,
      projectId
     } = this.props;

    return (
      <li>
        <Link
          className='task-item'
          to={`/dashboard/teams/${teamId}/projects/${projectId}/tasks/${task.id}`}
          onClick={this.handleClick}>

          <div className='task-item-left'>
            <button
              className={ task.completion ? 'task-check-box-checked' : 'task-check-box-unchecked' }
              value={ task ? !task.completion : ''}
              onClick={ this.update('completion') }>
              <svg viewBox="0 0 32 32">
                <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615 "/>
              </svg>
            </button>

            <span>
              <input
                onChange={this.update('name')}
                value={task.name}/>
            </span>
          </div>

          <div className='task-item-right'>
            {task.due_date}
          </div>
        </Link>

      </li>
    );
  }
}

export default TaskIndexItem;
