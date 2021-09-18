import React, { useEffect, useState } from 'react'; 
import { useHistory } from 'react-router';
import { BASE_URL } from '../../../utils/constants';
import { Table, Tag, Space, Button, Image} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryListAction } from '../../../store/action/categoryAction';
 

export default function Categories() {
    const { Column, ColumnGroup } = Table; 
 
    const history = useHistory();
    const categoryList = useSelector(store=>store.categoryStore.category)

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(CategoryListAction());
    },[]);

    console.log(categoryList,"========categoryList components======");

    const data = categoryList;
    
    const updateCategory = (e, id) => {
        console.log(id, "===== click update category ====");
    }
    
    const deleteCategory = (e, id) => {
        console.log(id, "===== click delete category ====");
    }

    return (
        <>
            <h1 style={{fontSize: "32px", textAlign: "center"}}>Category List</h1> 
            <Table dataSource={data}>  
            <Column title="Name" dataIndex="name" key="name" />  
            <Column title="Description" dataIndex="description" key="description" />  
            <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <Space size="middle">
                    <Button value={record._id} onClick={(e)=>updateCategory(e, record._id)} type="primary">Update</Button>
                    <Button  onClick={(e)=>deleteCategory(e, record._id)} type="danger">Delete</Button>
                </Space>
            )}
            />
        </Table>
        </>
    )
}

 