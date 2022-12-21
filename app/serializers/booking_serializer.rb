class BookingSerializer < ActiveModel::Serializer
  attributes :id, :from, :to, :date, :price, :client_id, :bus_id, :no_of_passangers
end
