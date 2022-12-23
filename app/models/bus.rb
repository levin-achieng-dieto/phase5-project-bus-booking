class Bus < ApplicationRecord
    belongs_to :route
    belongs_to :driver

    has_many :bookings
    has_many :clients, through: :bookings
end
