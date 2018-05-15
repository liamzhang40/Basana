import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  update(field) {
    const {
      task,
      updateTask,
      updateReduxTask
    } = this.props;

    return (e) => {
      updateReduxTask({id: task.id, [field]: e.currentTarget.value});
    };
  }

  render() {
    const { task, errors } = this.props;
    return (
      <div className='task-edit-visible' id='task-form-container'>
        <div className='task-form'>
          <form>
            <h2></h2>
            <div className='task-name'>
              <button className='task-check-box'>
                <svg viewBox="0 0 32 32">
                  <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615 "/>
                </svg>
              </button>

              <input
                id='task-name-input'
                type='text'
                onChange={this.update('name')}
                value={task ? task.name : ''}/>
            </div>

            <ul>
              {errors.map(error => <li>{error}</li>)}
            </ul>

            <div className='task-description'>
              <textarea
                id='task-description-input'
                type='text'
                onChange={this.update('description')}
                value={task ? task.description : ''}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
