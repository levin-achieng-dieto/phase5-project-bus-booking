class BusSerializer < ActiveModel::Serializer
  attributes :id, :number_plate, :fleet_no,:image, :route_id, :driver_id
end
