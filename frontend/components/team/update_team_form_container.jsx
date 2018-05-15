import { connect } from 'react-redux';
import { updateTeam } from '../../actions/team_actions';
import { closeModal } from '../../actions/modal_actions';
import TeamForm from './team_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.teams,
    team: state.entities.teams[ownProps.match.params.teamId],
    formType: 'Update'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: team => dispatch(updateTeam(team)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
