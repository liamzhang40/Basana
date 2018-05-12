class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.integer :creator_id, null: false
      t.integer :team_id, null: false
      t.string :name, null: false
      t.text :description
      t.boolean :privacy, default: false

      t.timestamps
    end
    add_index :projects, :creator_id
    add_index :projects, :team_id
  end
end
