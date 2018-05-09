class TeamMembership < ApplicationRecord

  validates :team_id, :member_id, presence: true

  belongs_to :member,
    class_name: 'User',
    foreign_key: :member_id

  belongs_to :team
end
