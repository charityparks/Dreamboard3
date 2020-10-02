class User < ApplicationRecord
    has_secure_password
    has_many :boards
    has_many :entries, through: :boards
end
