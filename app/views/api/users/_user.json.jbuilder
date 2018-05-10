json.extract! user, :id, :name, :username
json.teamIds do
  json.array! user.teams.map(&:id)
end
