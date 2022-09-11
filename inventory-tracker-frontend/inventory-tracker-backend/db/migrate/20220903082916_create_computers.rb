class CreateComputers < ActiveRecord::Migration[6.1]
  def change
    create_table :computers do |t|
      t.string :model
      t.string :core
      t.string :disk_space
      t.string :ram
      t.string :lease_terms
      t.integer :payment_per_month
      t.integer :purchase_price
      t.string :condition
      t.integer :client_id
      t.timestamps

    end

  end
end
