class CreateRoutes < ActiveRecord::Migration[7.0]
  def change
    create_table :routes do |t|
      t.integer :admin_id
      t.string :from
      t.string :to
      t.string :price

      t.timestamps
    end
  end
end
