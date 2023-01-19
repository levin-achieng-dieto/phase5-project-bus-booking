Admin.destroy_all
Booking.destroy_all
Bus.destroy_all
Client.destroy_all
Driver.destroy_all
Route.destroy_all

puts 'seeding...'

admin1 = Admin.create(username: "levin", email: "levin@gmail.com", password: "abc", password_confirmation: "abc", phone_number: "0202587855")
admin2 = Admin.create(username: "dieto", email: "dieto@gmail.com", password: "123", password_confirmation: "123", phone_number: "0202587866")


client1 = Client.create(username: "beryl", email: "beryl@mail.com", address: "beryl address", phone_number: "+789653477", password: "q12", password_confirmation: "q12")
client2 = Client.create(username: "odipoh", email: "odipoh@mail.com", address: "odipoh address", phone_number: "+89653412", password: "w12", password_confirmation: "w12")
client3 = Client.create(username: "esther", email: "esther@mail.com", address: "esther address", phone_number: "+89003477", password: "rty", password_confirmation: "rty")
client4 = Client.create(username: "kevin", email: "kevin@mail.com", address: "kevin address", phone_number: "+177653477", password: "098", password_confirmation: "098")


driver1 = Driver.create(username: "kevin", email: "kevin@gmail.com", password: "qwe", password_confirmation: "qwe", phone_number: "+66778890")
driver2 = Driver.create(username: "lomenen", email: "lomenen@gmail.com", password: "qwr", password_confirmation: "qwr", phone_number: "+766778855")
driver3 = Driver.create(username: "kevin", email: "kevin@gmail.com", password: "qwe", password_confirmation: "qwe", phone_number: "+266778800")


route1 = Route.create(from: "Nairobi", to: "Mombasa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdmO3DvAPeBgQxWCrjDDQ3lkuRxzuD8JuOQJAocX8TxDzcXznK6wrogRCwbtawDM-nFk&usqp=CAU" ,busnumber: "KDK123A", date: "2023-01-28", time: "13:45", cost: "$200", admin_id: admin1.id)
route2 = Route.create(from: "Nairobi", to: "Kisumu", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgooV4BazOcR1dlZZHhGh0ScCuzB20rGWBH1cd59BVMoPBQpCKE_yKVRPYipr7opxOLQE&usqp=CAU",busnumber: "KDL456B", date: "2023-01-29", time: "15:42", cost: "$150", admin_id: admin2.id)
route3 = Route.create(from: "Nairobi", to: "Machakos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGXuWcmPnecgkoRyy2M2UWJZ_RW4z4ZXsoQnCYhQC-Z69qvK3OvJTMuuey2tTTg3JIkJA&usqp=CAU",busnumber: "KDH789C", date: "2023-01-30", time: "21:32", cost: "$100", admin_id: admin1.id)
route4 = Route.create(from: "Nairobi", to: "Naivasha", image:"https://www.ebusco.com/wp-content/uploads/ebusco_22_18m_furth_01-scaled.jpg",busnumber: "KDM987D", date: "2023-02-02", time: "18:03", cost: "$80", admin_id: admin1.id)


bus1 = Bus.create(image: route1.image, number_plate: route1.busnumber, fleet_no: "12345", route_id: route1.id, driver_id: driver3.id)
bus2 = Bus.create(image: route2.image, number_plate: route4.busnumber, fleet_no: "09876", route_id: route2.id, driver_id: driver2.id)
bus3 = Bus.create(image: route3.image, number_plate: route2.busnumber, fleet_no: "37829", route_id: route3.id, driver_id: driver1.id)
bus4 = Bus.create(image: route4.image, number_plate: route3.busnumber, fleet_no: "78546", route_id: route4.id, driver_id: driver2.id)
bus5 = Bus.create(image: route1.image, number_plate: route1.busnumber, fleet_no: "12345", route_id: route1.id, driver_id: driver3.id)
bus6 = Bus.create(image: route2.image, number_plate: route4.busnumber, fleet_no: "09876", route_id: route2.id, driver_id: driver2.id)
bus7 = Bus.create(image: route3.image, number_plate: route2.busnumber, fleet_no: "37829", route_id: route3.id, driver_id: driver1.id)
bus8 = Bus.create(image: route4.image, number_plate: route3.busnumber, fleet_no: "78546", route_id: route4.id, driver_id: driver2.id)

    # t.string "name"
    # t.string "phonenumber"
    # t.string "busnumber"
    # t.string "viacities"
    # t.string "seat"
    # t.string "cost"


booking1 = Booking.create(name: client1.username, phonenumber: client1.phone_number, busnumber: bus1.number_plate, from: route1.from, to: route1.to,seat: "F2", cost: route1.cost)
booking2 = Booking.create(name: client3.username, phonenumber: client3.phone_number, busnumber: bus2.number_plate, from: route4.from, to: route4.to,seat: "F3", cost: route4.cost)
booking3 = Booking.create(name: client2.username, phonenumber: client2.phone_number, busnumber: bus4.number_plate, from: route3.from, to: route3.to,seat: "F4", cost: route3.cost)
# booking2 = Booking.create(from: "Nairobi", to: "Eldoret", date: "2/1/2023", price: "1000", client_id: client2.id, bus_id: bus3.id, no_of_passangers: 3)
# booking3 = Booking.create(from: "Mombasa", to: "Kisumu", date: "1/1/2023", price: "1500", client_id: client1.id, bus_id: bus2.id, no_of_passangers: 1)


puts 'done seeding'