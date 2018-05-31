@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :name, :username
  end
end
