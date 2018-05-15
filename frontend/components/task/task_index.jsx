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
    const { tasks, openModal, closeModal } = this.props;
    const li = tasks.map(task => {
      return <TaskIndexItem
        key={task.id}
        task={task}
        teamId={this.props.match.params.teamId}/>;
    });

    return (
      <div className='team-tasks'>
        <TaskHeader openModal={openModal} />
        <ul className='task-list'>
          {li}
        </ul>
      </div>
    );
  }
}
