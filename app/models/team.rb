class Team < ApplicationRecord

  validates :name, presence: true

  has_many :team_memberships,
    dependent: :destroy

  has_many :members,
    through: :team_memberships,
    source: :member
end
