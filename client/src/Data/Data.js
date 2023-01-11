import {
    
    UilSubway,
    UilUsersAlt,
    UilDialpad,
 
  } from "@iconscout/react-unicons";
  



export const cardsData = [
    {
      title: "Seats",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #788097",
      },
      barValue: 20,
      value:"12,000",
      png: UilDialpad,
      series: [
        {
          name: "Seats",
          data: [30, 40, 50, 60, 70, 80, 99],
        },
      ],
    },
    {
      title: "Buses",
      color: {
        backGround: "linear-gradient(10deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #788097",
      },
      barValue: 70,
      value: '14,270',
      png: UilSubway,
      series: [
        {
          name: "Buses",
          data: [10, 8, 6, 4, 2 , 6, 2],
        },
      ],
    },
    {
      title: "Customers",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #788097",
      },
      barValue: 60,
      value: "4,270",
      png: UilUsersAlt,
      series: [
        {
          name: "Customers",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
    {
      title: "Bookings",
      color: {
        backGround: "linear-gradient(180deg, #788097 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #788097",
        // boxShadow: "0px 19px 60px rgba(62, 14, 153, 0.08)"
        
      },
      barValue: 60,
      value: "4,270",
      png: UilUsersAlt,
      series: [
        {
          name: "Bookings",
          data: [10, 25, 15, 30, 12, 15, 20],
        },
      ],
    },
  ];

