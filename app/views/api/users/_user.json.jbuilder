json.extract! user, :id, :name, :username
json.extract! user.avatar, :url
json.teamIds do
  json.array! user.teams.map(&:id)
end
