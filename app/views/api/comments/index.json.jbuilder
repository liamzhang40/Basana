@comments.each do |comment|
  json.set! comment.id do
    json.partial! 'api/comment/comment.json.jbuilder', comment: comment
  end
end
