import React, { useEffect, useState } from 'react'; 
import { useHistory } from 'react-router';
import { BASE_URL } from '../../../utils/constants';
import { Table, Tag, Space, Button, Image, Popconfirm} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUserAction, deleteUserFromAdmin } from '../../../store/action/userAction';
import { QuestionCircleOutlined } from '@ant-design/icons';

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
        history.push('/admin/user-update/'+`${id}`);
        console.log(id, "===== click update user ====");
    }
    
    const deleteUser = (e, id) => {
        dispatch(deleteUserFromAdmin(id));

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
            <Column title="Role" dataIndex="role" key="role" /> 
            <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <Space size="middle">
                    <Button value={record._id} onClick={(e)=>updateUser(e, record._id)} type="primary">Update</Button>
                    <Popconfirm onConfirm={(e)=>deleteUser(e, record._id)} title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                        <Button    type="danger">Delete</Button>
                    </Popconfirm>
                </Space>
            )}
            />
        </Table>
        </>
    )
}

 