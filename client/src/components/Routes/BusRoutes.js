import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function BusRoutes() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingBus, setEditingBus] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      viacities: "Nairobi - Mombasa",
      busnumber: "QAA1000",
      date: "2023-01-28",
      time: "13:45",
      cost:" $100"
    
    },
    {
      id: 2,
      viacities: "Nairobi - Kisumu",
      busnumber: "QAA1001",
      date: "2023-01-29",
      time: "15:42",
      cost:" $150"
    
    },
    {
      id: 3,
      viacities: "Nairobi - Machakos",
      busnumber: "QAA1002",
      date: "2023-01-30",
      time: "21:32",
      cost:" $155",
     
    
    },
    {
      id: 4,
      viacities: "Nairobi - Naivasha",
      busnumber: "QAA1003",
      date: "2023-02-02",
      time: "18:03",
      cost:" $122",
    
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
      title: "Via Cities",
      dataIndex: "viacities",
    },
    {
      key: "3",
      title: "Bus",
      dataIndex: "busnumber",
    },
    {
      key: "4",
      title: "Departure Date",
      dataIndex: "date",
    },
    {
      key: "6",
      title: "Cost Per Seat",
      dataIndex: "cost",
    },
    {
      key: "5",
      title: "Departure Time",
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
        <h3> ROUTE STATUS</h3>
        <Button onClick={onAddBus} style={{backgroundColor: 'lightblue'}}>Add Route Details +</Button>
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
            value={editingBus?.viacities}
            onChange={(e) => {
              setEditingBus((pre) => {
                return { ...pre, viacities: e.target.value };
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
          type = "date"
            value={editingBus?.date}
            onChange={(e) => {
              setEditingBus((pre) => {
                return { ...pre, date: e.target.value };
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
          type="time"
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

export default BusRoutes;