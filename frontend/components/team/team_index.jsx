import React from 'react';
import TeamIndexItem from './team_index_item';

class TeamIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTeams();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { logout, history, openModal } = this.props;
    logout();
    history.push('/');
    openModal();
  }

  render() {
    const { teams, fetchTeam, logout } = this.props;
    const li = teams.map(team => {
      return <TeamIndexItem key={team.id} team={team} fetchTeam={fetchTeam} />;
    });

    return (
      <div className='team-dropdown'>
        <ul>
          {li}
          <li><button onClick={this.handleClick}>Log out</button></li>
        </ul>
      </div>
    );
  }
}

export default TeamIndex;
