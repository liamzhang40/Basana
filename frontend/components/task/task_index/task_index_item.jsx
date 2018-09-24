import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../../util/date_util';
import TaskCompletionButton from '../../button/task_completion_button';

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
      updateReduxTask({id: task.id, [field]: tobeUpdate});

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
      projectId,
      updateTask
    } = this.props;

    let className = 'task-item-right';
    let displayDate = '';
    if (task.due_date) {
      const formatDueDate = task.due_date.split("").map(el => {
        if (el === "-") return "/";
        else return el;
      }).join("");

      const dueDate = new Date(formatDueDate);
      const todayDate = new Date();
      todayDate.setHours(0,0,0,0);
      const yesterdayDate = new Date();
      yesterdayDate.setDate(todayDate.getDate() - 1);
      yesterdayDate.setHours(0,0,0,0);
      const tomorrowDate = new Date();
      tomorrowDate.setDate(todayDate.getDate() + 1);
      tomorrowDate.setHours(0,0,0,0);

      if (yesterdayDate.getTime() === dueDate.getTime()) {
        className = 'task-item-right-red';
        displayDate = 'Yesterday';
      }
      else if (todayDate.getTime() > dueDate.getTime()) {
        className = 'task-item-right-red';
        displayDate = formatDate(task.due_date);
      }
      else if (todayDate.getTime() === dueDate.getTime()) {
        className = 'task-item-right-green';
        displayDate = 'Today';
      }
      else if (tomorrowDate.getTime() === dueDate.getTime()) {
        className = 'task-item-right-green';
        displayDate = 'Tomorrow';
      }
      else {
        displayDate = formatDate(task.due_date);
      }

    }

    return (
      <li>
        <Link
          className='task-item'
          to={projectId ?
            `/dashboard/teams/${teamId}/projects/${projectId}/tasks/${task.id}` :
            `/dashboard/teams/${teamId}/tasks/${task.id}`}>

          <div className='task-item-left'>
            <TaskCompletionButton
              task={ task }
              updateTask={ updateTask }/>

            <div className="task-item-input">
              <input
                onChange={ this.update('name') }
                value={ task.name }/>
            </div>
          </div>

          <div className={ className }>
            { displayDate }
          </div>
        </Link>

      </li>
    );
  }
}

export default TaskIndexItem;
