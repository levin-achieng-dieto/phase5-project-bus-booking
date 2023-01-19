// import "./BusTable.css";
import { Button, Table, Modal, Input } from "antd";
import { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function BusTable() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  // const [dataSource, setDataSource] = useState([
  //   {
  //     id: 1,
  //     name: "Levin",
  //     email: "Levin@gmail.com",
  //     address: "Levin Address",
  //     phonenumber: "+96500011111",
    
  //   },
  //   {
  //     id: 2,
  //     name: "Esther",
  //     email: "Esther@gmail.com",
  //     address: "Esther Address",
  //     phonenumber: "+65700011111",
    
    
  //   },
  //   {
  //     id: 3,
  //     name: "Kevin",
  //     email: "Kevin@gmail.com",
  //     address: "Kevin Address",
  //     phonenumber: "+86500011111",
    
    
  //   },
  //   {
  //     id: 4,
  //     name: "Beryl",
  //     email: "Beryl@gmail.com",
  //     address: "Beryl Address",
  //     phonenumber: "+7200011111",
    
  //   },

  // ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
        key: "2",
        title: "Name",
        dataIndex: "username",
      },
      {
        key: "3",
        title: "Email",
        dataIndex: "email",
      },
      {
        key: "4",
        title: "Address",
        dataIndex: "address",
      },
      {
        key: "4",
        title: "Phone Number",
        dataIndex: "phone_number",
      },

    {
      key: "3",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditCustomer(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteCustomer(record);
              }}
              style={{ color: "red", marginLeft: 20 }}
            />
          </>
        );
      },
    },
  ];

  const onAddCustomer = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newCustomer= {
      id: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address " + randomNumber,
      phonenumber: "+" + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newCustomer];
    });
  };
  const onDeleteCustomer = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this Customer details?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((customer) => customer.id !== record.id);
        });
      },
    });
  };
  const onEditCustomer = (record) => {
    setIsEditing(true);
    setEditingCustomer({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingCustomer(null);
  };

  const [dataSource, setDataSource]= useState([

    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("/clients");
            const resData= await reqData.json();
            setDataSource(resData);
            console.log(resData);
        }
        getUserdata();
    },[])
]);
console.log(dataSource)
  return (
    <div className="Table">
      <header >
        <h3 > CUSTOMER STATUS</h3>
        <Button onClick={onAddCustomer} style={{backgroundColor: 'lightblue'}} >Add Customer Status +</Button>
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
              return pre.map((customer) => {
                if (customer.id === editingCustomer.id) {
                  return editingCustomer;
                } else {
                  return customer;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingCustomer?.name}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingCustomer?.email}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingCustomer?.address}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, address: e.target.value };
              });
            }}
          />
          <Input
            value={editingCustomer?.phonenumber}
            onChange={(e) => {
              setEditingCustomer((pre) => {
                return { ...pre, phonenumber: e.target.value };
              });
            }}
          />
   
        </Modal>
      </header>
    </div>
  );
}

export default BusTable;