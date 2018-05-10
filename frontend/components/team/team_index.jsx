import React from 'react';
import TeamIndexItem from './team_index_item';

class TeamIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  handleClick(e) {
    e.preventDefault
    const { logout, history, openModal } = this.props;
    logout();
    history.push('/');
    openModal('login');
  }

  render() {
    const { teams, fetchTeam, logout, openModal } = this.props;
    const li = teams.map(team => {
      return <TeamIndexItem key={team.id} team={team} fetchTeam={fetchTeam} />;
    });

// should i have another handleClick to prevent re-render?
// for Workspace settings
// and is there a way to extract the props at once?
    return (
      <div className='team-dropdown'>
        <ul>
          {li}
          <li><button onClick={() => openModal('updateteam')}>Workspace Settings...</button></li>
          <li><button onClick={this.handleClick}>Log out</button></li>
        </ul>
      </div>
    );
  }
}

export default TeamIndex;
