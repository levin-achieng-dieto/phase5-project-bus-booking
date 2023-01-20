import React,{ useEffect, useState } from "react";
import { Button, Table, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import "./Buses.css"



function Busess() {

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
      title: "Buses",
      dataIndex: "image",
      render: (link) => {
        return <img style={{width:"120px", height:"50px"}}src={link} alt={link}/>;
      }
    }, 
  
   
    {
      key: "2",
      title: "Number_Plate",
      dataIndex: "number_plate",
    },
    {
      key: "3",
      title: "Fleet_No",
      dataIndex: "fleet_no",
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
                handleDeleteBus(record);
              }}
              style={{ color: "red", marginLeft: 20 }}
            />
          </>
        );
      },
    },
  ];
  // const onAddBus = (event) => {
  //   event.preventDefault()
  //   const randomNumber = parseInt(Math.random() * 1000);
  //   const newBus= {
  //     id: randomNumber,
  //     busnumber: "QAA " + randomNumber,
   
  //   };
  //   setDataSource((pre) => {
  //     return [...pre, newBus];
  //   });
  // };
  const handleDeleteBus = (record) => {
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
 


    const [dataSource, setDataSource]= useState([

    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("/buses");
            const resData= await reqData.json();
            setDataSource(resData);
            console.log(resData);
        }
        getUserdata();
    },[])
]);


 console.log(dataSource)
    return (
      <>
    
        <div className="Table">
        <header >
          <h3> BUS STATUS</h3>
          <Button style={{backgroundColor: 'lightgrey', color:"black"}}> <Link to={"/add-bus"}>Add Bus Details + </Link></Button>
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
              value={editingBus?.image}
              onChange={(e) => {
                setEditingBus((pre) => {
                  return { ...pre, image: e.target.value };
                });
              }}
            />
            <Input
              value={editingBus?.number_plate}
              onChange={(e) => {
                setEditingBus((pre) => {
                  return { ...pre, number_plate: e.target.value };
                });
              }}
            />
            <Input
              value={editingBus?.fleet_no}
              onChange={(e) => {
                setEditingBus((pre) => {
                  return { ...pre, fleet_no: e.target.value };
                });
              }}
            />
     
          </Modal>
        </header>
      </div>
      </>
    );

}
  
export default Busess;