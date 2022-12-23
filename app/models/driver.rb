class Driver < ApplicationRecord
    has_many :buses
    has_many :routes, through: :buses
    has_secure_password
    validates :username, presence: true, uniqueness: {case_sensitive: true}
end
