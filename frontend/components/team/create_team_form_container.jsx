import { connect } from 'react-redux';
import { createTeam } from '../../actions/team_actions';
import TeamForm from './team_form';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    team: {name: '', emails: ''},
    formType: 'Create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: team => dispatch(createTeam(team)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamForm));
