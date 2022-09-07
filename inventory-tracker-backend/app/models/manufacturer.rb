class Manufacturer < ActiveRecord::Base
    has_many :printers
    has_many :enterprises, through: :printers
end