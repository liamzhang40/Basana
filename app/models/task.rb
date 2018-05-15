# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  project_id  :integer
#  assignee_id :integer
#  name        :string           not null
#  description :text
#  completion  :boolean          default(FALSE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ApplicationRecord

  validates :name, presence: true
  validates :completion, :privacy, inclusion: { in: [true, false] }
  validate :assignee_or_project

  belongs_to :assignee,
    class_name: 'User',
    foreign_key: :assignee_id,
    optional: true

  belongs_to :project,
    optional: true

  private

  def assignee_or_project
    unless assignee_id.present? || project_id.present?
      errors.add(:assignee_id, 'Task has to have a assignee or assigned project')
    end
  end
  # how to validate if there is actual assignee and project

end
