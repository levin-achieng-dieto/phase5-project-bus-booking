class RouteSerializer < ActiveModel::Serializer
  attributes :id, :admin_id, :from, :to, :price
end
