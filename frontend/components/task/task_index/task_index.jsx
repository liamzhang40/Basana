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
    const { projectId, userId } = this.props.match.params;
    if (projectId) {
      this.props.fetchTasks(projectId);
    } else if (userId) {
      this.props.fetchTasks(userId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.projectId !== nextProps.match.params.projectId) {
      if (nextProps.match.params.projectId) this.props.fetchTasks(nextProps.match.params.projectId);
      else this.props.fetchTasks(nextProps.match.params.userId);
    }
  }

  render() {
    const {
      match,
      tasks,
      updateTask,
      updateReduxTask,
      taskOrder,
      taskVisibility,
      selectedTaskId
    } = this.props;
    
    const filteredTasks = tasks.filter(task => task.completion === taskVisibility);

    if (taskOrder === "Due Date") {
      filteredTasks.sort((taskA, taskB) => {
        if (taskA.due_date > taskB.due_date) return 1;
        if (taskA.due_date < taskB.due_date) return -1;
        return 0;
      });
    } else if (taskOrder === "Likes") {
      filteredTasks.sort((taskA, taskB) => taskB.likers.length - taskA.likers.length);
    }

    const li = filteredTasks.map((task, idx) => (
      <TaskIndexItem
        key={idx}
        task={task}
        match={match}
        teamId={match.params.teamId}
        projectId={match.params.projectId}
        userId={match.params.userId}
        updateTask={updateTask}
        updateReduxTask={updateReduxTask}
        taskClassName={task.id === selectedTaskId ? 'highlight' : ''} />
    ));

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
