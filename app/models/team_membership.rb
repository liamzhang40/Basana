# == Schema Information
#
# Table name: team_memberships
#
#  id         :integer          not null, primary key
#  team_id    :integer          not null
#  member_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TeamMembership < ApplicationRecord

  validates :team, :member, presence: true
  validates :member, uniqueness: { scope: :team_id }
  validates :team, uniqueness: { scope: :member_id }

  belongs_to :member,
    class_name: 'User',
    foreign_key: :member_id

  belongs_to :team
end
