# == Schema Information
#
# Table name: task_likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  task_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TaskLike < ApplicationRecord

    validates :task, :user, presence: true
    validates :user, uniqueness: { scope: :task_id }
    validates :task, uniqueness: { scope: :user_id }

    belongs_to :user

    belongs_to :task
end
