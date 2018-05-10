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
    this.props.fetchTeams();
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
    const {
      match,
      history,
      openModal,
      removeMember,
      closeDropdown
    } = this.props;

    removeMember(match.params.teamId).then(()=> {
      // if user still has any team, will redirect to the first
      // team in the teams array
      debugger
      if (this.props.length) {
        closeDropdown();
        history.push(`/dashboard/teams/${this.props.teams[0].id}`);
      } else {
        openModal('createteam');
      }
    });
  }

  render() {
    const {
      match,
      teams,
      logout,
      openModal,
      fetchTeam,
      removeMember,
      closeDropdown } = this.props;

    const li = teams.map(team => {
      return <TeamIndexItem
        key={team.id}
        team={team}
        fetchTeam={fetchTeam}
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
