import React from 'react';

class CurrentProjectDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    const { history, match, removeProject, project} = this.props;
    removeProject(project.id).then(() => {
      history.push(`/dashboard/teams/${match.params.teamId}`);
    });
  }

  render() {
    const {
      openModal,
    } = this.props;

    return (
      <div className='project-dropdown'>
        <ul>
          <button onClick={() => openModal('updateproject')}>
            <li>Edit Name & Description...
            </li>
          </button>

          <button onClick={this.handleRemove}>
            <li>Delete Project
            </li>
          </button>
        </ul>
      </div>
    );
  }
}

export default CurrentProjectDropdown;
