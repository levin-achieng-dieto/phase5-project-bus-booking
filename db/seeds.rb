Admin.destroy_all
Booking.destroy_all
Bus.destroy_all
Client.destroy_all
Driver.destroy_all
Route.destroy_all

puts 'seeding...'

admin1 = Admin.create(username: "levin", email: "levin@gmail.com", password: "abc", password_confirmation: "abc", phone_number: "0202587855")
admin2 = Admin.create(username: "dieto", email: "dieto@gmail.com", password: "123", password_confirmation: "123", phone_number: "0202587866")


client1 = Client.create(username: "beryl", email: "beryl@mail.com", address: "beryl address", phone_number: "0789653477", password: "q12", password_confirmation: "q12")
client2 = Client.create(username: "odipoh", email: "odipoh@mail.com", address: "odipoh address", phone_number: "0789653412", password: "w12", password_confirmation: "w12")
client3 = Client.create(username: "esther", email: "esther@mail.com", address: "esther address", phone_number: "0789003477", password: "rty", password_confirmation: "rty")
client4 = Client.create(username: "kevin", email: "kevin@mail.com", address: "kevin address", phone_number: "0777653477", password: "098", password_confirmation: "098")


driver1 = Driver.create(username: "kevin", email: "kevin@gmail.com", password: "qwe", password_confirmation: "qwe", phone_number: "0766778890")
driver2 = Driver.create(username: "lomenen", email: "lomenen@gmail.com", password: "qwr", password_confirmation: "qwr", phone_number: "0766778855")
driver3 = Driver.create(username: "kevin", email: "kevin@gmail.com", password: "qwe", password_confirmation: "qwe", phone_number: "0766778800")


route1 = Route.create(viacities: "Nairobi - Mombasa", busnumber: "QAA1000", date: "2023-01-28", time: "13:45", cost: "$100", admin_id: admin1.id)
route2 = Route.create(viacities: "Nairobi - Kisumu", busnumber: "QAA1001", date: "2023-01-29", time: "15:42", cost: "$150", admin_id: admin2.id)
route3 = Route.create(viacities: "Nairobi - Machakos", busnumber: "QAA1002", date: "2023-01-30", time: "21:32", cost: "$155", admin_id: admin1.id)
route4 = Route.create(viacities: "Nairobi - Naivasha", busnumber: "QAA1003", date: "2023-02-02", time: "18:03", cost: "$122", admin_id: admin1.id)


bus1 = Bus.create(number_plate: "kam234k", fleet_no: "12345", route_id: route1.id, driver_id: driver3.id)
bus2 = Bus.create(number_plate: "kda123a", fleet_no: "09876", route_id: route2.id, driver_id: driver2.id)
bus3 = Bus.create(number_plate: "kdl456l", fleet_no: "37829", route_id: route3.id, driver_id: driver1.id)


booking1 = Booking.create(from: "Nairobi", to: "Kisumu", date: "1/1/2023", price: "1500", client_id: client1.id, bus_id: bus1.id, no_of_passangers: 1)
booking2 = Booking.create(from: "Nairobi", to: "Eldoret", date: "2/1/2023", price: "1000", client_id: client2.id, bus_id: bus3.id, no_of_passangers: 3)
booking3 = Booking.create(from: "Mombasa", to: "Kisumu", date: "1/1/2023", price: "1500", client_id: client1.id, bus_id: bus2.id, no_of_passangers: 1)


puts 'done seeding'