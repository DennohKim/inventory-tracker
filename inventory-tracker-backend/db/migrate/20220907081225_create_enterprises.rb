class CreateEnterprises < ActiveRecord::Migration[6.1]
  def change
    create_table :enterprises do |t|
      t.string :business_name
      t.string :address
      t.string :physical_location
      t.string :phone
      t.string :email
      t.timestamps
    
    end
  end
end
