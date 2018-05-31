import React from 'react';
import { connect } from 'react-redux';
import { addMembers } from '../../actions/team_actions';
import {
  searchUser,
  clearUserSearch
} from '../../actions/session_actions';
import TeamMemberForm from './team_member_form';

const mapStateToProps = state => {
  return {
    userSearches: Object.values(state.entities.userSearches)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMembers: emails => dispatch(addMembers(emails)),
    searchUser: email_piece => dispatch(searchUser(email_piece)),
    clearUserSearch: () => dispatch(clearUserSearch())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberForm);
