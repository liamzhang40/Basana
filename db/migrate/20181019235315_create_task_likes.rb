class CreateTaskLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :task_likes do |t|
      t.timestamps
    end
  end
end
