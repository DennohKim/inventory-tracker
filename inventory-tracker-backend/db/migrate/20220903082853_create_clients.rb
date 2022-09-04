class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :location
      t.integer :phone
      t.string :email

    end
  end
end
