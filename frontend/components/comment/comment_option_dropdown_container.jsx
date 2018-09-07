import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateComment, removeComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const commentId = ownProps.match.params.commentId;
  return {
    updateComment: comment => dispatch(updateComment(comment)),
    removeComment: commentId => dispatch(removeComment(commentId))
  };
};

class CommentOptionDropdownContainer extends React.Component {
  constructor(props) {
    super(props)
  }
}
