import React, { useEffect, useState } from 'react'; 
import { useHistory } from 'react-router';
import { BASE_URL } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductAction, DeleteProductAction, setProductDetailsData } from '../../../store/action/productAction';
import { Table, Tag, Space, Button, Image, Popconfirm} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
 

export default function Products() {
    const { Column } = Table; 
 
    const history = useHistory();
    const productList = useSelector(store=>store.productStore.product)

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(GetAllProductAction());
    },[]);

    console.log(productList,"========products components======");

    const data = productList;
    
    const updateProduct = (e, id) => {
        console.log(id, "===== click update product ====");
        dispatch(setProductDetailsData(id));
        history.push(`/admin/update-product/${id}`);
    }
    
    const deleteProduct = (e, id) => {
        dispatch(DeleteProductAction(id));
        console.log(id, "===== click delete product ====");
        
    }

    return (
        <>
            <h1 style={{fontSize: "32px", textAlign: "center"}}>Product List</h1> 
            <Table dataSource={data}>  
            <Column title="Name" dataIndex="title" key="title" /> 
            <Column title="Category" dataIndex="category" key="category" render={(text, record) => (
                <Space size="middle"> 
                {record.category.name}
                </Space>
            )}/>
            <Column title="Price" dataIndex="price" key="price" />
            <Column title="Description" dataIndex="description" key="description" />
            <Column title="stock" dataIndex="stock" key="stock" />
            <Column title="Image" dataIndex="image" key="image" render={(text, record) => (
                <Space size="middle">
                <Image style={{width: "100%", maxWidth: "100px"} } src={BASE_URL+record.image} />
                </Space>
            )}/>  
            <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <Space size="middle">
                    <Button value={record.category.name} onClick={(e)=>updateProduct(e, record._id)} type="primary">Update</Button>
                    <Popconfirm onConfirm={(e)=>deleteProduct(e, record._id)} title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                        <Button type="danger">Delete</Button>
                    </Popconfirm>

                </Space>
            )}
            />
        </Table>
        </>
    )
}

 