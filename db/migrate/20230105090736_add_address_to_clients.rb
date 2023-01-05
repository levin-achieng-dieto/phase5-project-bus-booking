class AddAddressToClients < ActiveRecord::Migration[7.0]
  def change
    add_column :clients, :address, :string
  end
end
