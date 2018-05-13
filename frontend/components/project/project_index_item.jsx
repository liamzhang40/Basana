import React from 'react';

const ProjectIndexItem = props => {
  return (
    <button><li><span>{props.project.name}</span></li></button>
  );
};

export default ProjectIndexItem;
