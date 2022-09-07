# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_07_081225) do

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.integer "phone"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "computers", force: :cascade do |t|
    t.string "model"
    t.string "core"
    t.string "disk_space"
    t.string "ram"
    t.string "lease_terms"
    t.integer "payment_per_month"
    t.integer "purchase_price"
    t.string "condition"
    t.integer "client_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "enterprises", force: :cascade do |t|
    t.string "business_name"
    t.string "address"
    t.string "physical_location"
    t.string "phone"
    t.string "email"
  end

  create_table "manufacturers", force: :cascade do |t|
    t.string "company_name"
  end

  create_table "printers", force: :cascade do |t|
    t.string "model"
    t.string "lease_terms"
    t.integer "payment_per_month"
    t.integer "purchase_price"
    t.string "condition"
    t.integer "enterprise_id"
    t.integer "manufacturer_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
