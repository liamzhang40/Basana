import React from 'react';
import TaskIndexItem from './task_index_item';
import TaskHeaderContainer from './task_header';

class TaskIndex extends React.Component {
  // event delegation
  constructor(props) {
    super(props);

    this.state = {
      selectedTaskId: this.props.selectedTaskId
    };
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

  render() {
    const {
      match,
      tasks,
      updateTask,
      updateReduxTask,
      taskVisibility,
      selectedTaskId
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
            updateReduxTask={updateReduxTask}
            taskClassName={task.id === selectedTaskId ? 'highlight' : ''}
            setParentState={selectedTaskId => this.setState({ selectedTaskId })}/>
        );
      }
    }

    return (
      <div className='task-index'>
        <TaskHeaderContainer/>
        <div className='scroll-layer'>
          <ul className='task-list'>
            {li}
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskIndex;
