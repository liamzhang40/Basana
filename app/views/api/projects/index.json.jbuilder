@projects.each do |project|
  # will only send back public projects unless the current user is the
  # creator
  if (!project.privacy || project.creator_id === current_user.id)
    json.set! project.id do
      json.partial! 'api/projects/project.json.jbuilder', project: project
    end
  end
end
