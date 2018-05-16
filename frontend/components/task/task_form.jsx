import React from 'react';
import { Link } from 'react-router-dom';
import TeamMemberIndexItem from '../team/team_member_index_item';

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
      e.preventDefault();
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

  minDate() {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return yyyy + '-' + mm + '-' + dd;
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
          <form className='assignee_and_due_date'>
            <button className='assignee'>
              <TeamMemberIndexItem member={ assignee }/>
              <span>{ assignee ? assignee.name : 'Unassigned' }</span>
            </button>
            <div className='task-due-date'>
              <input
                id='task-due_date-input'
                type='date'
                min={ this.minDate() }
                onChange={ this.update('due_date') }
                value={ task ? task.due_date : ''}/>
            </div>

          </form>


          <form className='name_and_description'>
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
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
