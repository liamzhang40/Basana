class TeamMembership < ApplicationRecord

  validates :team, :member, presence: true
  validates :member, uniqueness: { scope: :team_id }
  validates :team, uniqueness: { scope: :member_id }

  belongs_to :member,
    class_name: 'User',
    foreign_key: :member_id

  belongs_to :team
end
