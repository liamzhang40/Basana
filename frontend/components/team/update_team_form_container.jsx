import { connect } from 'react-redux';
import { updateTeam } from '../../actions/team_actions';
import { closeModal } from '../../actions/modal_actions';
import TeamForm from './team_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.teams,
    formType: 'Update',
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: team => dispatch(updateTeam(team)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
