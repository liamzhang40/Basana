import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../util/date_util';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }


  update(field) {
    const {
      updateTask,
      updateReduxTask,
      task
    } = this.props;

    return (e) => {
      const tobeUpdate = e.currentTarget.value;
      if (tobeUpdate === 'true') updateReduxTask({id: task.id, [field]: true});
      else if (tobeUpdate === 'false') updateReduxTask({id: task.id, [field]: false});
      else updateReduxTask({id: task.id, [field]: tobeUpdate});

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
          to={projectId ?
            `/dashboard/teams/${teamId}/projects/${projectId}/tasks/${task.id}` :
            `/dashboard/teams/${teamId}/tasks/${task.id}`}>

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
            {formatDate(task.due_date)}
          </div>
        </Link>

      </li>
    );
  }
}

export default TaskIndexItem;
