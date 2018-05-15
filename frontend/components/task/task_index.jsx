import React from 'react';
import TaskIndexItem from './task_index_item';
import TaskHeader from './task_header';

class TaskIndex extends React.Component {

  componentDidMount() {
    this.props.fetchTasks(this.props.match.params.projectId);
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
      createTask,
      updateTask,
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
          projectId={match.params.projectId}/>
        <ul className='task-list'>
          {li}
        </ul>
      </div>
    );
  }
}

export default TaskIndex;
