import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createTeam } from '../../actions/team_actions';
import { closeModal } from '../../actions/modal_actions';
import TeamForm from './team_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.teams,
    team: { name: '', emails: '' },
    formType: 'Create',
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: team => dispatch(createTeam(team)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamForm));
