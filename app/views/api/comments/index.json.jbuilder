@comments.each do |comment|
  json.set! comment.id do
    json.partial! 'api/comments/comment.json.jbuilder', comment: comment
  end
end
