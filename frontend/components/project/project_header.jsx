import React from 'react';

const ProjectHeader = props => {
  return (
    <div className='project-header'>
      <h2>PROJECTS</h2>
      <button
        className='dot'
        onClick={() => props.openModal('createproject')}></button>
    </div>
  );

};

export default ProjectHeader;
