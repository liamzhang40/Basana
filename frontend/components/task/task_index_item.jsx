import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   visible: false
    // };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState({visible: !this.state.visible});
    // document.getElementById('task-form-container').className = 'task-edit-visible';
  }

  handleChange(e) {
    const {
      updateTask,
      updateReduxTask,
      task
    } = this.props;

    updateReduxTask({id: task.id, name: e.currentTarget.value});
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
            <button className='task-check-box'>
              <svg viewBox="0 0 32 32">
                <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615 "/>
              </svg>
            </button>
            <span>
              <input
                onChange={this.handleChange}
                value={task.name}/>
            </span>
          </div>

          <div className='task-item-right'>
            due date
          </div>
        </Link>

      </li>
    );
  }
}
// <div className={
//     this.state.visible ? 'task-edit-visible' : 'task-edit-hidden'
//   }>
//   something
// </div>

export default TaskIndexItem;
