class CreateRoutes < ActiveRecord::Migration[7.0]
  def change
    create_table :routes do |t|
      t.string :viacities
      t.string :busnumber
      t.string :date
      t.string :time
      t.string :cost
      t.integer :admin_id

      t.timestamps
    end
  end
end
