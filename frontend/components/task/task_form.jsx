import React from 'react';
import { Link } from 'react-router-dom';
import { minDate } from '../../util/date_util';
import TeamMemberIndexItem from '../team/team_member_index_item';
import AssigneeDropdownContainer from './assignee_dropdown_container';
import TaskOption from './task_option';
import Assignee from './assignee';

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
    const { task, errors, match, assignee, project } = this.props;
    const { teamId, projectId } = match.params;

    return (
      <div className='task-edit' id='task-form-container'>
        <div className='task-form'>
          <Link
            to={ projectId ? `/dashboard/teams/${teamId}/projects/${projectId}` : `/dashboard/teams/${teamId}`}
            className='close'>&times;</Link>
          <div className='assignee_and_due_date'>
            <Assignee assignee={ assignee } />

            <div className='task-due-date'>
              <input
                id='task-due-date-input'
                type='date'
                min={ minDate() }
                onChange={ this.update('due_date') }
                value={ task ? task.due_date : ''}/>
            </div>

            <div className='task-option'>
              <TaskOption />
            </div>
          </div>


          <div className='name_and_description'>
            <div className='task-project'>
              <button>{project ? project.name : ''}</button>
            </div>
            <div className='task-name'>
              <button
                className={ task.completion ? 'task-check-box-checked' : 'task-check-box-unchecked' }
                value={ task ? !task.completion : ''}
                onClick={ this.update('completion') }>
                <svg viewBox="0 0 32 32">
                  <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615 "/>
                </svg>
              </button>

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
