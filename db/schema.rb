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

ActiveRecord::Schema[7.0].define(version: 2023_01_10_071819) do
  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.string "name"
    t.string "phonenumber"
    t.string "busnumber"
    t.string "from"
    t.string "to"
    t.string "seat"
    t.string "cost"
    t.string "client_id"
    t.string "bus_id"
    t.string "no_of_passangers"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "buses", force: :cascade do |t|
    t.string "number_plate"
    t.string "fleet_no"
    t.string "image"
    t.integer "route_id"
    t.integer "driver_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "address"
  end

  create_table "drivers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "routes", force: :cascade do |t|
    t.string "from"
    t.string "to"
    t.string "busnumber"
    t.string "date"
    t.string "time"
    t.string "cost"
    t.string "image"
    t.integer "admin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
