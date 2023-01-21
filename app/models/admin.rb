class Admin < ApplicationRecord
    has_many :routes

    validates :username, :email, :password, presence: true
    has_secure_password
    
end
