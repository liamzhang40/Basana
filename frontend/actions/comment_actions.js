import * as commentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_ADDITIONAL_COMMENTS = 'RECEIVE_ADDITIONAL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

const receiveAdditionalComments = comments => {
  return {
    type: RECEIVE_ADDITIONAL_COMMENTS,
    comments
  };
};

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors
  };
};

const deleteComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

export const fetchComments = (taskId, commentsCount) => {
  return dispatch => {
    return commentAPIUtil.fetchComments(taskId, commentsCount).then(
      comments => {
        if (!Array.isArray(comments)) {
          if (commentsCount) {
            return dispatch(receiveAdditionalComments(comments));
          }
          return dispatch(receiveComments(comments));
        } else {
          return dispatch(receiveErrors(comments));
        }
      }
    );
  };
};

export const fetchComment = commentId => {
  return dispatch => {
    return commentAPIUtil.fetchComment(commentId).then(
      comment => {
        return dispatch(receiveComment(comment));
      }
    );
  };
};

export const createComment = comment => {
  return dispatch => {
    return commentAPIUtil.createComment(comment).then(
      comment => {
        return dispatch(receiveComment(comment));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const updateComment = comment => {
  return dispatch => {
    return commentAPIUtil.updateComment(comment).then(
      comment => {
        return dispatch(receiveComment(comment));
      },
      errors => {
        return dispatch(receiveErrors(errors.responseJSON));
      }
    );
  };
};

export const removeComment = commentId => {
  return dispatch => {
    return commentAPIUtil.removeComment(commentId).then(
      () => {
        return dispatch(deleteComment(commentId));
      }
    );
  };
};
