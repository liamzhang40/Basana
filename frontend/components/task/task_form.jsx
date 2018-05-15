import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.task;

    this.handleSumbit = this.handleSumbit.bind(this);
  }
}
