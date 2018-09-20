import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    comment: {
      author_id: state.session.id,
      task_id: ownProps.taskId,
      content: ""
    },
    formType: "create-comment"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
