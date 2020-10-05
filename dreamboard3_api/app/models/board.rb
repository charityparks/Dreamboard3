class Board < ApplicationRecord
    has_many :entries
    

    validates :title, :author, presence: true
end
