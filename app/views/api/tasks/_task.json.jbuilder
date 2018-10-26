json.extract! task, :id, :project_id, :assignee_id, :name, :description, :completion, :privacy, :due_date
json.likers do
    json.array! task.likers.map(&:id)
end