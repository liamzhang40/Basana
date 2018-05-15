import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndexItem extends React.Component {

  render() {
    const { task } = this.props;

    return (
      <li>
        <div className='task-item'>

          <div className='task-item-left'>
            <button className='task-check-box'>
              <svg viewBox="0 0 32 32">
                <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615 "/>
              </svg>
            </button>

            <span>
              {task.name}
            </span>
          </div>

          <div className='task-item-right'>
            due date
          </div>

        </div>
      </li>
    );
  }
}

export default TaskIndexItem;
