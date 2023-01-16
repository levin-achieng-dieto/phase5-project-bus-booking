class CreateBuses < ActiveRecord::Migration[7.0]
  def change
    create_table :buses do |t|
      t.string :number_plate
      t.string :fleet_no
      t.string :image
      t.integer :route_id
      t.integer :driver_id

      t.timestamps
    end
  end
end
