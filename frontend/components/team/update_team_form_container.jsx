import { connect } from 'react-redux';
import { updateTeam } from '../../actions/team_actions';
import TeamForm from './team_form';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    team: state.entities.teams[ownProps.match.params.teamId],
    formType: 'update'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: team => dispatch(updateTeam(team)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamForm));
