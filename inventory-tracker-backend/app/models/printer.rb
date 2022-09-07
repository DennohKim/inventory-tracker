class Printer < ActiveRecord::Base
    belongs_to :manufacturers
    belongs_to :enterprises

end