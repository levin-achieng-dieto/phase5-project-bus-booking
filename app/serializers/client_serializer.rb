class ClientSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :address, :phone_number
end
