class Manufacturer < ActiveRecord::Base
    has_many :printers
    has_many :business_entities, through: :printers
end