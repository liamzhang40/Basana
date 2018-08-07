import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = (state, ownProps) => {
  return {
    comment: {
      author_id: state.session.id,
      task_id: ownProps.match.params.taskId,
      content: ""
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));
