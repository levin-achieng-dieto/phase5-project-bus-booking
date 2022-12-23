class Client < ApplicationRecord

    has_many :bookings
    has_many :buses, through: :bookings
    
    has_secure_password
    validates :username, presence: true, uniqueness: {case_sensitive: true}
end
