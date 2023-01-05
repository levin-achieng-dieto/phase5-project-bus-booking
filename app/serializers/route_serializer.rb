class RouteSerializer < ActiveModel::Serializer
  attributes :id, :viacities, :busnumber, :date, :time, :cost, :admin_id
end
