class CreateEntries < ActiveRecord::Migration[6.0]
  def change
    create_table :entries do |t|
      t.string :item
      t.integer :board_id
      t.timestamps
    end
  end
end
