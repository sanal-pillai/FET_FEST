class CreateNodes < ActiveRecord::Migration[5.2]
  def change
    create_table :nodes do |t|
      t.string :name
      t.integer :node_type, :default => 0
      t.string :desk

      t.timestamps
    end
  end
end
