import React from 'react';
import TaskIndexItem from './task_index_item';
import TaskHeaderContainer from './task_header';

class TaskIndex extends React.Component {
  // event delegation
  constructor() {
    super();
    this.selectedProject = null;

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { projectId } = this.props.match.params;
    if (projectId) {
      this.props.fetchTasks(projectId);
    } else {
      this.props.fetchTasks(this.props.currentUserId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.projectId !== nextProps.match.params.projectId) {
      this.props.fetchTasks(nextProps.match.params.projectId);
    }
  }

  handleClick(e) {
    let li = e.target.closest("li");

    if (this.selectedProject) {
      this.selectedProject.classList.remove("highlight");
    }

    this.selectedProject = li;
    li.classList.add("highlight");
  }

  render() {
    const {
      match,
      tasks,
      updateTask,
      updateReduxTask,
      taskVisibility
    } = this.props;

    const li = [];
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (task.completion === taskVisibility) {
        li.push(
          <TaskIndexItem
            key={task.id}
            task={task}
            teamId={match.params.teamId}
            projectId={match.params.projectId}
            updateTask={updateTask}
            updateReduxTask={updateReduxTask}/>
        );
      }
    }

    return (
      <div className='task-index'>
        <TaskHeaderContainer/>
        <div className='scroll-layer'>
          <ul className='task-list'
          onClick={this.handleClick}>
            {li}
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskIndex;
