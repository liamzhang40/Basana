import React from 'react';

const TaskHeader = props => {

  return (
    <h2 className='task-header'>
      <button
        onClick={() => {
          document.getElementById('edit-create').className = 'edit-create';
        }}>Add Task</button>
    </h2>
  );
};

export default TaskHeader;
