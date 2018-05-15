class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.integer :project_id
      t.integer :assignee_id
      t.string :name, null: false
      t.text :description
      t.boolean :completion, default: false
      t.boolean :privacy, default: false
      t.date :due_date

      t.timestamps
    end
    add_index :tasks, :project_id
    add_index :tasks, :assignee_id
  end
end
