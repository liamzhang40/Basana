class CreateTeamMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :team_memberships do |t|
      t.integer :team_id, null: false
      t.integer :member_id, null: false

      t.timestamps
    end
    add_index :team_memberships, :team_id
    add_index :team_memberships, :member_id
  end
end
