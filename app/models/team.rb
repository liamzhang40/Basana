# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord

  validates :name, presence: true

  has_many :team_memberships,
    dependent: :destroy

  has_many :members,
    through: :team_memberships,
    source: :member

  has_many :projects

  def create_teammemberships(emails)
    emails = emails.delete(' ').split(',')

    emails.map do |email|
      user = User.find_by(username: email)
      TeamMembership.create(team_id: self.id, member_id: user.id)
      user
    end
  end
end
