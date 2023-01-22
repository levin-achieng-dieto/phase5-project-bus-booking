class BookingSerializer < ActiveModel::Serializer
  attributes :id, :name, :phonenumber, :busnumber, :from, :to, :seat, :cost, :client_id, :bus_id, :no_of_passangers
end
