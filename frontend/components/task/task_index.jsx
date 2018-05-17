import React from 'react';
import TaskIndexItem from './task_index_item';
import TaskHeader from './task_header';

class TaskIndex extends React.Component {

  componentDidMount() {
    // first time when user logs in. projectId is undefined and it is
    // not needed since only currentUser's tasks are displayed.
    // Refreshing the page at task level could also trigger an ajax
    // request with a undefined projectId. The projectId had to be taken
    // out from the url because it being undefined in the url will actually
    // pass the if conditional statement. It shows as a string 'undefined'
    const { projectId } = this.props.match.params;
    if (projectId) {
      this.props.fetchTasks(projectId);
    } else {
      this.props.fetchTasks(this.props.currentUserId);
    }
  }

  componentWillReceiveProps(nextProps) {
    // while working with only currentUser's tasks, projectId will always
    // be undefined since it is absent from the url. No dispatch will
    // will ever happen until a team is selected
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
        <ul className='task-list'>
          {li}
        </ul>
      </div>
    );
  }
}

export default TaskIndex;
