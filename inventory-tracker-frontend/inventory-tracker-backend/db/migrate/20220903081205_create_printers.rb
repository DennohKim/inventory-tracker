class CreatePrinters < ActiveRecord::Migration[6.1]
  def change
    create_table :printers do |t|
      t.string :model
      t.string :lease_terms
      t.integer :payment_per_month
      t.integer :purchase_price
      t.string :condition
      t.integer :enterprise_id
      t.integer :manufacturer_id
      t.timestamps

    end
  end
end
