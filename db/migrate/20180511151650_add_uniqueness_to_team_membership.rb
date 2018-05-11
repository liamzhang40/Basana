class AddUniquenessToTeamMembership < ActiveRecord::Migration[5.1]
  def change
    add_index :team_memberships, [:team_id, :member_id], unique: true
  end
end
