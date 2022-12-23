class Route < ApplicationRecord
    belongs_to :admin
    has_many :buses
    has_many :drivers, through: :buses
end
