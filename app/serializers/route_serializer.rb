class RouteSerializer < ActiveModel::Serializer
  attributes :id, :from, :to, :image, :busnumber, :date, :time, :cost, :admin_id
end
