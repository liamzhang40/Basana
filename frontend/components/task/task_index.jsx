import React from 'react';
import TaskIndexItem from './task_index_item';
import TaskHeader from './task_header';

class TaskIndex extends React.Component {

  componentDidMount() {
    const { projectId } = this.props.match.params;
    if (projectId) {
      this.props.fetchTasks(projectId);
    } else {
      this.props.fetchTasks(this.props.currentUserId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.projectId) {
      if (this.props.match.params.projectId !== nextProps.match.params.projectId) {
        this.props.fetchTasks(nextProps.match.params.projectId);
      }
    }
  }

  render() {
    const {
      match,
      tasks,
      createTask,
      updateTask,
      currentUserId,
      updateReduxTask
    } = this.props;

    const li = tasks.map(task => {
      return <TaskIndexItem
        key={task.id}
        task={task}
        teamId={match.params.teamId}
        projectId={match.params.projectId}
        updateTask={updateTask}
        updateReduxTask={updateReduxTask}/>;
    });

    return (
      <div className='team-tasks'>
        <TaskHeader
          createTask={createTask}
          teamId = {match.params.teamId}
          projectId={match.params.projectId}
          currentUserId={currentUserId}/>
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
