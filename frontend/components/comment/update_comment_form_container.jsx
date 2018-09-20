import { connect } from 'react-redux';
import { updateComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = () => {
  return {
    formType: "update-comment"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateComment: comment => dispatch(updateComment(comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
