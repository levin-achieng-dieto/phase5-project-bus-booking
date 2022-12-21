class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :from
      t.string :to
      t.string :date
      t.string :price
      t.integer :client_id
      t.integer :bus_id
      t.integer :no_of_passangers

      t.timestamps
    end
  end
end
