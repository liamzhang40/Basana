import { connect } from 'react-redux';
import { createTeam } from '../../actions/team_actions';
import { closeModal } from '../../actions/modal_actions';
import TeamForm from './team_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.teams,
    team: { name: '', emails: '' },
    formType: 'Create'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: team => dispatch(createTeam(team)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
