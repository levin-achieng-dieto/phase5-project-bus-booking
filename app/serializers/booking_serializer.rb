class BookingSerializer < ActiveModel::Serializer
  attributes :id, :name, :phonenumber, :busnumber, :from, :to, :seat, :cost
end
