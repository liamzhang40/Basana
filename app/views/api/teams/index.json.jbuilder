@teams.each do |team|
  json.set! team.id do
    json.partial! 'api/teams/team.json.jbuilder', team: team
  end
end
