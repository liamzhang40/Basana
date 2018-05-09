import { connect } from 'react-redux';
import { createTeam } from '../../actions/team_actions';
import TeamForm from './team_form';

const mapStateToProps = state => {
  return {
    team: {name: '', emails: ''}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTeam: team => dispatch(createTeam(team))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamForm);
