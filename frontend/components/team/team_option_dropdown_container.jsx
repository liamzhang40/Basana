import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeMember } from '../../actions/team_actions';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import TeamDropdownItem from './team_dropdown_item';

const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.id];
  const teams = currentUser.teamIds.map(teamId => state.entities.teams[teamId]);
  return {
    teams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeMember: id => dispatch(removeMember(id)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
  };
};

class TeamOptionDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleLogout() {
    const {
      logout,
      history,
      openModal
    } = this.props;

    logout().then(() => {
      history.push('/');
      openModal({type: 'login'});
    });
  }

  handleRemove() {
    if (this.props.teams.length > 1) {
      const {
        teams,
        currentTeam,
        history,
        removeMember
      } = this.props;

      removeMember(currentTeam.id).then(()=> {
        // if user still has any team, will redirect to the first
        // team in the teams array
        const restTeams = teams.filter(team => team.id !== parseInt(currentTeam.id));
        history.push(`/dashboard/teams/${restTeams[0].id}`);
      });
    } else {
      window.alert("You can't remove yourself from your last team");
    }
  }

  render() {
    const {
      teams,
      openModal,
      currentTeam
    } = this.props;

    const li = teams.map(team => {
      return <TeamDropdownItem
        key={team.id}
        team={team}/>;
    });

    return (
      <div className='team-dropdown'>
        <ul className='team-dropdown-container'>
          <ul className='team-names'>
            {li}
          </ul>

          <ul>
            <button onClick={ () => openModal({ type: 'updateteam', team: currentTeam }) }><li>Workspace Settings...</li></button>
            <button onClick={ () => openModal({ type: 'createteam' }) }><li>Create New Workspace</li></button>
            <button onClick={this.handleRemove}><li>Remove me from this Workspace</li></button>
          </ul>

          <ul>
            <button onClick={ () => openModal({ type: 'editprofile' }) }><li>My Profile Settings...</li></button>
            <button onClick={ this.handleLogout }><li>Log out</li></button>
          </ul>
        </ul>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamOptionDropdown));
