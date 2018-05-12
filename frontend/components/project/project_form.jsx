import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.project;

    this.handleSumbit = this.handleSumbit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSumbit(e) {
    e.preventDefault();

  }

  render() {
    const { error, formType } = this.props;
    let projectprivacy = '';
    if (formType !== 'Edit') {
      projectprivacy =
      (<div className='project-privacy'>
        <div>
          <input
            value={false}
            type='radio'
            onChange={this.update('privacy')}/>
          <label>Public to??</label>
        </div>

        <div>
          <input
            value={true}
            type='radio'
            onChange={this.update('privacy')}/>
          <label>Private to me</label>
        </div>
      </div>);
    }

    return (
      <div className='project-form'>
        <h1>{`{formType} Project`}</h1>
        <form onSubmit={this.handleSumbit}>
          <div className='project-name'>
            <label htmlFor='project-name-input'>PROJECT NAME</label>
            <input
              id='project-name-input'
              type='text'
              onChange={this.update('name')}
              value={this.state.name}/>
          </div>

          <div className='project-description'>
            <label htmlFor='project-description-input'>Description</label>
            <textarea
              id='project-description-input'
              type='text'
              onChange={this.update('description')}/>
          </div>

          {projectprivacy}
        </form>
      </div>
    );
  }
}

export default ProjectForm;
