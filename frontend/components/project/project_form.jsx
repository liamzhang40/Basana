import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.project;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { team, processForm, history, closeModal, formType } = this.props;

    processForm(this.state).then((res) => {
      closeModal();
      if (formType === 'New') {
        history.push(`/dashboard/teams/${team.id}/projects/${res.project.id}`);
      }
    });
  }

  render() {
    const { team, errors, formType } = this.props;

    let projectprivacy = '';
    if (formType !== 'Edit') {
      projectprivacy =
      (<div className='project-privacy'>
        <label>PRIVACY</label>
        <div>
          <input
            value={false}
            name='project-privacy-option'
            type='radio'
            onChange={this.update('privacy')}/>
          <label>Public to {team.name}</label>
        </div>

        <div>
          <input
            value={true}
            name='project-privacy-option'
            type='radio'
            onChange={this.update('privacy')}/>
          <label>Private to me</label>
        </div>
      </div>);
    }

    return (
      <div className='project-form'>
        <h1>{`${formType} Project`}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='project-name'>
            <label htmlFor='project-name-input'>PROJECT NAME</label>
            <input
              id='project-name-input'
              type='text'
              onChange={this.update('name')}
              value={this.state.name}/>
          </div>

          <ul>
            {errors.map(error => <li>{error}</li>)}
          </ul>

          <div className='project-description'>
            <label htmlFor='project-description-input'>Description</label>
            <textarea
              id='project-description-input'
              type='text'
              value={this.state.description}
              onChange={this.update('description')} />
          </div>

          {projectprivacy}

          <button className='project-button'>{`${formType} Project`}</button>
        </form>
      </div>
    );
  }
}

export default ProjectForm;
