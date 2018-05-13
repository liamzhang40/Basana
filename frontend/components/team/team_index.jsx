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
        removeMember,
        closeDropdown
      } = this.props;

      removeMember(match.params.teamId).then(()=> {
        // if user still has any team, will redirect to the first
        // team in the teams array
        closeDropdown();
        // debugger
        const restTeams = teams.filter(team => team.id !== parseInt(match.params.teamId));
        history.push(`/dashboard/teams/${restTeams[0].id}`);
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
            <button onClick={() => openModal('updateteam')}><li>Workspace Settings...</li></button>
            <button onClick={() => openModal('createteam')}><li>Create New Workspace</li></button>
            <button onClick={this.handleRemove}><li>Remove me from this Workspace</li></button>
          </ul>

          <ul>
            <button><li>My Profile Settings...</li></button>
            <button onClick={this.handleLogout}><li>Log out</li></button>
          </ul>
        </ul>
      </div>
    );
  }
}

export default TeamIndex;
