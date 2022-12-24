
ActiveRecord::Schema[7.0].define(version: 2022_12_20_071946) do
  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "phone_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bookings", force: :cascade do |t|
    t.string "from"
    t.string "to"
    t.string "date"
    t.string "price"
    t.integer "client_id"
    t.integer "bus_id"
    t.integer "no_of_passangers"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "buses", force: :cascade do |t|
    t.string "number_plate"
    t.string "fleet_no"
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
    t.integer "admin_id"
    t.string "from"
    t.string "to"
    t.string "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
