import React, { useEffect, useState } from 'react'; 
import { useHistory } from 'react-router';
import { BASE_URL } from '../../../utils/constants';
import { Table, Tag, Space, Button, Image} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUserAction } from '../../../store/action/signUpAction';
 

export default function Users() {
    const { Column, ColumnGroup } = Table; 
 
    const history = useHistory();
    const userList = useSelector(store=>store.userStore.user)

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(GetAllUserAction());
    },[]);

    console.log(userList,"========userList components======");

    const data = userList;
    
    const updateUser = (e, id) => {
        console.log(id, "===== click update user ====");
    }
    
    const deleteUser = (e, id) => {
        console.log(id, "===== click delete user ====");
    }

    return (
        <>
            <h1 style={{fontSize: "32px", textAlign: "center"}}>User List</h1> 
            <Table dataSource={data}>  
            <Column title="First Name" dataIndex="firstname" key="firstname" /> 
            <Column title="Last Name" dataIndex="lastname" key="lastname" />  
            <Column title="Email" dataIndex="email" key="email" />
            <Column title="Phone" dataIndex="phone" key="phone" />
            <Column title="Username" dataIndex="username" key="username" /> 
            <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <Space size="middle">
                    <Button value={record._id} onClick={(e)=>updateUser(e, record._id)} type="primary">Update</Button>
                    <Button  onClick={(e)=>deleteUser(e, record._id)} type="danger">Delete</Button>
                </Space>
            )}
            />
        </Table>
        </>
    )
}

 