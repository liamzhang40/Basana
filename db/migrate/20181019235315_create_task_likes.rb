class CreateTaskLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :task_likes do |t|
      t.integer :liker_id, null: false
      t.integer :task_id, null: false
    
      t.timestamps
    end
    add_index :task_likes, :liker_id
    add_index :task_likes, :task_id
  end
end
