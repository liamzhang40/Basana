import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeComment: commentId => dispatch(removeComment(commentId))
  };
};

class CommentOptionDropdownContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { comment, removeComment, toggleEditForm } = this.props;
    return (
      <div className='comment-dropdown'>
        <ul>
          <button onClick={() => toggleEditForm()}>
            <li>Edit Comment
            </li>
          </button>

          <button onClick={() => removeComment(comment.id)}>
            <li>Delete Comment
            </li>
          </button>
        </ul>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CommentOptionDropdownContainer);
