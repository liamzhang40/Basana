json.team do
  json.partial! 'api/teams/team.json.jbuilder', team: @team
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user.json.jbuilder', user: user
    end
  end
end
