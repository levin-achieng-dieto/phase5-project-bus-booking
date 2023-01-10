import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import SeatSelection from "../Seats/SeatSelection";

function BusBooking() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingBus, setEditingBus] = useState(null);
  const [dataSource, setDataSource] = useState([


    {
      id: 42,
      name: "Dima",
      phonenumber: "+96500011111",
      busnumber: "QAA1000",
      viacities: "Nairobi - Mombasa",
      seat: "F2",
      cost:" $100",
      date: "2023-01-28, 13:45",
      time: "2023-01-28, 13:45",
    
    },
    {
      id: 24,
      name: "Esther",
      phonenumber: "+50001568291",
      busnumber: "QAA1000",
      viacities: "Nairobi - Nakuru",
      seat: "F4",
      cost:" $120",
      date: "2023-01-28, 13:45",
      time: "2023-01-28, 13:45",
    
    },
    {
      id: 27,
      name: "Mali",
      phonenumber: "+2000443111",
      busnumber: "QAA1000",
      viacities: "Nairobi - Nanyuki",
      seat: "F3",
      cost:" $150",
      date: "2023-01-28, 13:45",
      time: "2023-01-28, 13:45",
    
    },
  ]);
  
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Contact",
      dataIndex: "phonenumber",
    },
    {
      key: "4",
      title: "Bus",
      dataIndex: "busnumber",
    },
    {
      key: "5",
      title: "Route",
      dataIndex: "viacities",
    },
    {
      key: "3",
      title: "Seat",
      dataIndex: "seat",
    },
    {
      key: "3",
      title: "Amount",
      dataIndex: "cost",
    },
    {
      key: "4",
      title: "Departure",
      dataIndex: "date",
    },
    {
      key: "5",
      title: "Booked",
      dataIndex: "time",
    },

    {
      key: "4",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditBus(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteBus(record);
              }}
              style={{ color: "red", marginLeft: 40 }}
            />
          </>
        );
      },
    },
  ];

  const onAddBus = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newBus= {
      id: randomNumber,
      busnumber: "QAA " + randomNumber,
      viacities: "Nairobi - Rwanda ",
      cost: "$" + randomNumber,
   
    };
    setDataSource((pre) => {
      return [...pre, newBus];
    });
  };
  const onDeleteBus = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Bus route?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((bus) => bus.id !== record.id);
        });
      },
    });
  };
  const onEditBus = (record) => {
    setIsEditing(true);
    setEditingBus({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingBus(null);
  };
  return (
    <div className="Table">
      <header >
        <h3> BOOKING STATUS</h3>
        <Button onClick={onAddBus} style={{backgroundColor: 'lightblue'}}>Add Bookings +</Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Bus"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((bus) => {
                if (bus.id === editingBus.id) {
                  return editingBus;
                } else {
                  return bus;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingBus?.name}
            onChange={(e) => {
              setEditingBus((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingBus?.phonenumber}
            onChange={(e) => {
              setEditingBus((pre) => {
                return { ...pre, phonenumber: e.target.value };
              });
            }}
          />
          <Input
            value={editingBus?.busnumber}
            onChange={(e) => {
              setEditingBus((pre) => {
                return { ...pre, busnumber: e.target.value };
              });
            }}
          />
          <Input
            value={editingBus?.viacities}
            onChange={(e) => {
              setEditingBus((pre) => {
                return { ...pre, viacities: e.target.value };
              });
            }}
          />
          <Input
            value={editingBus?.seat}
            onChange={(e) => {
              setEditingBus((pre) => {
                return { ...pre, seat: e.target.value };
              });
            }}
          />
          <Input
            value={editingBus?.cost}
            onChange={(e) => {
              setEditingBus((pre) => {
                return { ...pre, cost: e.target.value };
              });
            }}
          />
          <Input
          type = "date" 
            value={editingBus?.date}
            onChange={(e) => {
              setEditingBus((pre) => {
                return { ...pre, date: e.target.value };
              });
            }}
          />
          <Input
           label = "time"
            value={editingBus?.time}
            onChange={(e) => {
              setEditingBus((pre) => {
                return { ...pre, time: e.target.value };
              });
            }}
          />
       
   
        </Modal>
      </header>
    </div>
  );
}

export default BusBooking;