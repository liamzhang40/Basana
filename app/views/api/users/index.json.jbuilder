@members.each do |member|
  json.set! member.id do
    json.partial! 'api/users/user.json.jbuilder', user: member
  end
end
