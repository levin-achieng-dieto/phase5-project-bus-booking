class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :name
      t.string :phonenumber
      t.string :busnumber
      t.string :from
      t.string :to
      t.string :seat
      t.string :cost
      t.string :client_id
      t.string :bus_id
      t.string :no_of_passangers

      t.timestamps
    end
  end
end 
