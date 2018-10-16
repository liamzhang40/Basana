import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createTask, toggleTaskVisibility } from '../../../actions/task_actions';
import { minDate } from '../../../util/date_util';
import DropdownButon from '../../button/dropdown_button';

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    taskVisibility: state.ui.taskVisibility
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTask: task => dispatch(createTask(task)),
    toggleTaskVisibility: () => dispatch(toggleTaskVisibility())
  };
};

class TaskHeader extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { createTask, match, history, currentUserId } = this.props;
    const { teamId, projectId } = match.params;
    createTask({
      project_id: (projectId ? projectId : ''),
      assignee_id: (projectId ? '' : currentUserId),
      name: 'Task name',
      description: '',
      completion: false,
      privacy: false,
      due_date: minDate()
    }).then((res) => {
      if (projectId) {
        history.push(`/dashboard/teams/${teamId}/projects/${projectId}/tasks/${res.task.id}`);
      } else {
        history.push(`/dashboard/teams/${teamId}/tasks/${res.task.id}`);
      }
    });
  }

  render() {
    const { taskVisibility } = this.props;

    return (
      <div className='task-header'>
        <div>
          { taskVisibility ?
            <div></div> :
            <button
              className="task-add-button"
              onClick={this.handleClick}>Add Task</button>}
          <div>
            <button
              className="task-toggle-button"
              onClick={this.props.toggleTaskVisibility}>
              {taskVisibility ? "Incompleted Tasks" : "Completed Tasks"}
            </button>
            <DropdownButon 
              dropdown={ () => <div></div>}
              buttonStyle={() => (
                <svg viewBox="0 0 32 32">
                  <path d="M25,4c-2.4,0-4.4,1.7-4.9,4H4C3.4,8,3,8.4,3,9s0.4,1,1,1h16.1c0.5,2.3,2.5,4,4.9,4c2.8,0,5-2.2,5-5S27.8,4,25,4z M25,12c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S26.7,12,25,12z"/>
                  <path d="M27,20H11.9c-0.5-2.3-2.5-4-4.9-4c-2.8,0-5,2.2-5,5s2.2,5,5,5c2.4,0,4.4-1.7,4.9-4H27c0.6,0,1-0.4,1-1S27.6,20,27,20z M7,24c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S8.7,24,7,24z"/>
                </svg>
              )}
              type="task-sort"/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskHeader));
