class CreateBusinessEntities < ActiveRecord::Migration[6.1]
  def change
    create_table :business_entities do |t|
      t.string :business_name
      t.string :address
      t.string :physical_location
      t.string :phone
      t.string :email
    
    end
  end
end
