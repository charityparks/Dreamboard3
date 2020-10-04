class CreateBoards < ActiveRecord::Migration[6.0]
  def change
    create_table :boards do |t|
      t.string :title
      # t.integer :user_id
      t.string :author
      t.timestamps
    end
  end
end
