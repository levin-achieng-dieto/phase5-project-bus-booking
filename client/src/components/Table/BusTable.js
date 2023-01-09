// import "./BusTable.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function BusTable() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingBus, setEditingBus] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      busnumber: "QAA1000",
    
    },
    {
      id: 2,
      busnumber: "QAA1001",
    
    },
    {
      id: 3,
      busnumber: "QAA1002",
    
    },
    {
      id: 4,
      busnumber: "QAA1003",
    
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
      title: "Bus Number",
      dataIndex: "busnumber",
    },

    {
      key: "3",
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
              style={{ color: "red", marginLeft: 20 }}
            />
          </>
        );
      },
    },
  ];

  const onAddBus = (event) => {
    event.preventDefault()
    const randomNumber = parseInt(Math.random() * 1000);
    const newBus= {
      id: randomNumber,
      busnumber: "QAA " + randomNumber,
   
    };
    setDataSource((pre) => {
      return [...pre, newBus];
    });
  };
  const onDeleteBus = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Bus?",
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
        <h3> BUS STATUS</h3>
        <Button onClick={onAddBus} style={{backgroundColor: 'lightblue'}}>Add Bus Details +</Button>
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
            value={editingBus?.busnumber}
            onChange={(e) => {
              setEditingBus((pre) => {
                return { ...pre, busnumber: e.target.value };
              });
            }}
          />
   
        </Modal>
      </header>
    </div>
  );
}

export default BusTable;