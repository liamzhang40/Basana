json.extract! comment, :id, :author_id, :task_id, :content, :created_at, :updated_at
json.author do
  json.partial! 'api/users/user.json.jbuilder', user: comment.author
end
