class BookingSerializer < ActiveModel::Serializer
  attributes :id, :name, :phonenumber, :busnumber, :viacities, :seat, :cost
end
