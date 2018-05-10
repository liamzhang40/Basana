json.extract! team, :id, :name
json.memberIds do
  json.array! team.members.map(&:id)
end
