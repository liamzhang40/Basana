@projects.each do |project|
  json.set! project.id do
    json.partial! 'api/projects/project.json.jbuilder', project: project
  end
end
