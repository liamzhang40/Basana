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

    const format_due_date = task.due_date.split("").map(el => {
      if (el === "-") return "/";
      else return el;
    }).join("");

    const due_date = new Date(format_due_date);

    const today_date = new Date();
    today_date.setHours(0,0,0,0);

    let className = 'task-item-right';
    if (today_date > due_date) { className = 'task-item-right-red'; }
    else if (today_date.getTime() === due_date.getTime()) { className = 'task-item-right-green'; }

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

            <div className="task-item-input">
              <input
                onChange={this.update('name')}
                value={task.name}/>
            </div>
          </div>

          <div className={className}>
            {formatDate(task.due_date)}
          </div>
        </Link>

      </li>
    );
  }
}

export default TaskIndexItem;
