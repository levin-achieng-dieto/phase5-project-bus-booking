class BusSerializer < ActiveModel::Serializer
  attributes :id, :number_plate, :fleet_no, :route_id, :driver_id
end
