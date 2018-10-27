import React from 'react';

const TaskCompletionButton = ({ task, updateTask }) => {

  const handleClick = () => {
    const newTask = Object.assign({}, task);
    newTask.completion = !task.completion;
    updateTask(newTask);
  };

  return (
    <button
      className={ task.completion ? 'task-check-box-checked' : 'task-check-box-unchecked' }
      value={ task ? !task.completion : ''}
      onClick={ handleClick }>
      <svg viewBox="0 0 32 32">
        <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615 "/>
      </svg>
    </button>
  );
};

export default TaskCompletionButton;
