import React from 'react';
import { connect } from 'react-redux';
import TeamMemberIndexItem from './team_member_index_item';
import DropdownButton from '../button/dropdown_button';
import TeamOptionDropdownContainer from './team_option_dropdown_container';

const mapStateToProps = (state, ownProps) => {
  return {
    team: state.entities.teams[ownProps.match.params.teamId],
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const CurrentTeam = ({team, currentUser}) => {
  if (!team) {
    return (<div></div>);
  } else {
    return (
      <div
        className='current-team'>
        <DropdownButton
          dropdown={ () => <TeamOptionDropdownContainer /> }
          buttonStyle={
            () => (
            <div>
              <span>{team.name}</span>
              <TeamMemberIndexItem member={ currentUser } />
            </div>)
          }
          type="current-team"/>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTeam);
