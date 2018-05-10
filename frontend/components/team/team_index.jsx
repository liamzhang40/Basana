import React from 'react';
import TeamIndexItem from './team_index_item';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // could be taken out
  componentWillMount() {
    if (!this.props.teams.length) {
      this.props.fetchTeams();
    }
  }

  handleClick(e) {
    const { logout, history, openModal, closeDropdown } = this.props;
    logout();
    history.push('/');
    openModal('login');
  }

  render() {
    const { teams, fetchTeam, logout, openModal, closeDropdown } = this.props;
    const li = teams.map(team => {
      return <TeamIndexItem
        key={team.id}
        team={team}
        fetchTeam={fetchTeam}
        closeDropdown={closeDropdown} />;
    });

// should i have another handleClick to prevent re-render?
// for Workspace settings
// and is there a way to extract the props at once?
    return (
      <div className='team-dropdown'>
        <ul>
          <ul>
            {li}
          </ul>

          <ul>
            <li><button onClick={() => openModal('updateteam')}>Workspace Settings...</button></li>
            <li><button onClick={() => openModal('createteam')}>Create New Workspace</button></li>
            <li><button>Remove me from this Workspace</button></li>
          </ul>

          <ul>
            <li><button>My Profile Settings...</button></li>
            <li><button onClick={this.handleClick}>Log out</button></li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default TeamIndex;
