import { Button, Table, Modal, Input } from "antd";
import { useState, useEffect  } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function BusRoutes() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingBus, setEditingBus] = useState(null);

  const columns = [
    {
      key: "1",
      title: "#",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "From",
      dataIndex: "from",
    },
    {
      key: "2",
      title: "To",
      dataIndex: "to",
    },
    {
      key: "3",
      title: "Bus",
      dataIndex: "busnumber",
    },
    {
      key: "4",
      title: "Date",
      dataIndex: "date",
    },
    {
      key: "6",
      title: "Cost Per Seat",
      dataIndex: "cost",
    },
    {
      key: "5",
      title: "Time",
      dataIndex: "time",
    },

    {
      key: "6",
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

  const [dataSource, setDataSource]= useState([

    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("/routes");
            const resData= await reqData.json();
            setDataSource(resData);
            console.log(resData);
        }
        getUserdata();
    },[])
]);


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