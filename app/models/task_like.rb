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

    validates :task, :liker, presence: true
    validates :liker, uniqueness: { scope: :task_id }
    validates :task, uniqueness: { scope: :liker_id }

    belongs_to :liker,
    class_name: 'User',
    foreign_key: :liker_id

    belongs_to :task
end