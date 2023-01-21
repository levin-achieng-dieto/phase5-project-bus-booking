class Route < ApplicationRecord
<<<<<<< HEAD
belongs_to :admin

has_many :buses
has_many :drivers, through: :buses

=======
 belongs_to :admin
>>>>>>> c7e146dd (changes made)
end
