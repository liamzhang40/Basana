import React from 'react';
import TeamIndexItem from './team_index_item';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  // could be taken out
  componentWillMount() {
    if (!this.props.teams.length) {
      this.props.fetchTeams();
    }
  }

  handleLogout() {
    const {
      logout,
      history,
      openModal
    } = this.props;
    logout();
    history.push('/');
    openModal('login');
  }

  handleRemove() {
    if (this.props.teams.length > 1) {
      const {
        teams,
        match,
        history,
        openModal,
        removeMember,
        closeDropdown
      } = this.props;

      removeMember(match.params.teamId).then(()=> {
        // if user still has any team, will redirect to the first
        // team in the teams array
        closeDropdown();
        // debugger
        const newTeams = teams.filter(team => team.id !== parseInt(match.params.teamId));
        history.push(`/dashboard/teams/${newTeams[0].id}`);
      });
    }
  }

  render() {
    const {
      match,
      teams,
      logout,
      openModal,
      removeMember,
      closeDropdown
      // fetchTeam,
      // fetchProjects
    } = this.props;

    const li = teams.map(team => {
      return <TeamIndexItem
        key={team.id}
        team={team}
        // fetchTeam={fetchTeam}
        // fetchProjects={fetchProjects}
        closeDropdown={closeDropdown} />;
    });

    return (
      <div className='team-dropdown'>
        <ul>
          <ul>
            {li}
          </ul>

          <ul>
            <li><button onClick={() => openModal('updateteam')}>Workspace Settings...</button></li>
            <li><button onClick={() => openModal('createteam')}>Create New Workspace</button></li>
            <li><button onClick={this.handleRemove}>Remove me from this Workspace</button></li>
          </ul>

          <ul>
            <li><button>My Profile Settings...</button></li>
            <li><button onClick={this.handleLogout}>Log out</button></li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default TeamIndex;
