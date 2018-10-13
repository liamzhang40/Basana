export const fetchComments = (taskId, commentsCount, commentsPerFetch) => {
  return $.ajax({
    method: 'GET',
    url: 'api/comments',
    data: { comment: { 
      task_id: taskId,
      comments_count: commentsCount,
      comments_per_fetch: commentsPerFetch
     }}
  });
};

export const fetchComment = commentId => {
  return $.ajax({
    method: 'GET',
    url: `api/comments/${commentId}`
  });
};

export const createComment = comment => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: { comment }
  });
};

export const updateComment = comment => {
  return $.ajax({
    method: 'PATCH',
    url: `api/comments/${comment.id}`,
    data: { comment }
  });
};

export const removeComment = commentId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${commentId}`
  });
};
