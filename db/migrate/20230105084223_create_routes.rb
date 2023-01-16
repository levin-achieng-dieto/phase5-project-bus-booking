class CreateRoutes < ActiveRecord::Migration[7.0]
  def change
    create_table :routes do |t|
      t.string :from
      t.string :to
      t.string :busnumber
      t.string :date
      t.string :time
      t.string :cost
      t.string :image
      t.integer :admin_id

      t.timestamps
    end
  end
end
