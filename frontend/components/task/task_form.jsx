import React from 'react';
import { Link } from 'react-router-dom';
import { minDate } from '../../util/date_util';
import TaskOption from './task_option';
import Assignee from './assignee';
import AssignedProject from './assigned_project';
import TaskCompletion from './task_completion';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  update(field) {
    const {
      task,
      updateTask,
      updateReduxTask
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
      }, 1000);
    };
  }

  render() {
    const { task, errors, match, assignee, project, updateTask } = this.props;
    const { teamId, projectId } = match.params;

    return (
      <div className='task-edit' id='task-form-container'>
        <div className='task-form'>
          <Link
            to={ projectId ? `/dashboard/teams/${teamId}/projects/${projectId}` : `/dashboard/teams/${teamId}`}
            className='close'>&times;</Link>
          <div className='assignee_and_due_date'>
            <Assignee
              assignee={ assignee }
              task={ task }
              updateTask={ updateTask }/>

            <div className='task-due-date'>
              <input
                id='task-due-date-input'
                type='date'
                min={ minDate() }
                onChange={ this.update('due_date') }
                value={ task.due_date ? task.due_date : ''}/>
            </div>

            <div className='task-option'>
              <TaskOption />
            </div>
          </div>


          <div className='name_and_description'>
            <AssignedProject
              project={ project }
              task={ task }
              updateTask={ updateTask }/>

            <div className='task-name'>
              <TaskCompletion
                task={ task }
                updateTask={ updateTask }/>

              <input
                id='task-name-input'
                type='text'
                placeholder='Write a task name'
                onChange={ this.update('name') }
                value={ task ? task.name : '' }/>
            </div>

            <ul>
              { errors.map(error => <li>{error}</li>) }
            </ul>

            <div className='task-description'>
              <svg viewBox="0 0 32 32">
                <path d="M26,8H2V6h24V8z M22,12H2v2h20V12z M28,18H2v2h26V18z M24,24H2v2h22V24z"/>
              </svg>

              <textarea
                id='task-description-input'
                type='text'
                placeholder='Description'
                onChange={ this.update('description') }
                value={ task ? task.description : '' }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskForm;
