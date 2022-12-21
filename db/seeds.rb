Admin.destroy_all
Booking.destroy_all
Bus.destroy_all
Client.destroy_all
Driver.destroy_all
Route.destroy_all

puts 'seeding...'

admin1 = Admin.create(username: "levin", email: "levin@gmail.com", password: "abc", password_confirmation: "abc", phone_number: "0202587855")
admin2 = Admin.create(username: "dieto", email: "dieto@gmail.com", password: "123", password_confirmation: "123", phone_number: "0202587866")


client1 = Client.create(username: "beryl", email: "beryl@mail.com", password: "q12", password_confirmation: "q12", phone_number: "0789653477")
client2 = Client.create(username: "odipoh", email: "odipoh@mail.com", password: "w12", password_confirmation: "w12", phone_number: "0789653412")


driver1 = Driver.create(username: "kevin", email: "kevin@gmail.com", password: "qwe", password_confirmation: "qwe", phone_number: "0766778890")
driver2 = Driver.create(username: "lomenen", email: "lomenen@gmail.com", password: "qwr", password_confirmation: "qwr", phone_number: "0766778855")
driver3 = Driver.create(username: "kevin", email: "kevin@gmail.com", password: "qwe", password_confirmation: "qwe", phone_number: "0766778800")


route1 = Route.create(admin_id: admin1.id, from: "Nairobi", to: "Kisumu", price: "1500")
route2 = Route.create(admin_id: admin2.id, from: "Mombasa", to: "Kisumu", price: "1200")
route3 = Route.create(admin_id: admin1.id, from: "Nairobi", to: "Eldoret", price: "2500")

bus1 = Bus.create(number_plate: "kam234k", fleet_no: "12345", route_id: route1.id, driver_id: driver3.id)
bus2 = Bus.create(number_plate: "kda123a", fleet_no: "09876", route_id: route2.id, driver_id: driver2.id)
bus3 = Bus.create(number_plate: "kdl456l", fleet_no: "37829", route_id: route3.id, driver_id: driver1.id)


booking1 = Booking.create(from: "Nairobi", to: "Kisumu", date: "1/1/2023", price: "1500", client_id: client1.id, bus_id: bus1.id, no_of_passangers: 1)
booking2 = Booking.create(from: "Nairobi", to: "Eldoret", date: "2/1/2023", price: "1000", client_id: client2.id, bus_id: bus3.id, no_of_passangers: 3)
booking3 = Booking.create(from: "Mombasa", to: "Kisumu", date: "1/1/2023", price: "1500", client_id: client1.id, bus_id: bus2.id, no_of_passangers: 1)


puts 'done seeding'