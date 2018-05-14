json.extract! user, :id, :name, :username
json.url image_url(user.avatar.url)
json.teamIds do
  json.array! user.teams.map(&:id)
end
