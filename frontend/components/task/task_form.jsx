import React from 'react';
import { Link } from 'react-router-dom';
import TeamMemberIndexItem from '../team/team_member_index_item';
import AssigneeDropdownContainer from './assignee_dropdown_container';
import { minDate } from '../../util/date_util';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
    this.state = {
      visible: false
    };

    this.toggleClass = this.toggleClass.bind(this);
  }

  update(field) {
    const {
      task,
      updateTask,
      updateReduxTask
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

  toggleClass() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    const { task, errors, match, assignee } = this.props;
    const { teamId, projectId } = match.params;

    return (
      <div className='task-edit' id='task-form-container'>
        <div className='task-form'>
          <Link
            to={`/dashboard/teams/${teamId}/projects/${projectId}`}
            className='close'>&times;</Link>
          <div className='assignee_and_due_date'>
            <button
              className='assignee'
              onClick={this.toggleClass}>
              <TeamMemberIndexItem member={ assignee }/>
              <span>{ assignee ? assignee.name : 'Unassigned' }</span>
            </button>
            <div className={
                this.state.visible ? 'assignee-dropdown-visible' : 'assignee-dropdown-hidden'
              }>
              <AssigneeDropdownContainer />
            </div>

            <div className='task-due-date'>
              <input
                id='task-due-date-input'
                type='date'
                min={ minDate() }
                onChange={ this.update('due_date') }
                value={ task ? task.due_date : ''}/>
            </div>
          </div>


          <div className='name_and_description'>
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
