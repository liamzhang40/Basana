class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :task_id, null: false
      t.text :content, null: false

      t.timestamps
    end
  end
end
