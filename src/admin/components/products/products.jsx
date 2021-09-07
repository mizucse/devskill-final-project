import React from 'react'; 

import { Table, Tag, Space, Button } from 'antd';

export default function Products() {
    const { Column, ColumnGroup } = Table;

    const data = [
      {
        key: '1',
        name: 'A4 Tech Keyboard',
        category: 'Computer Accessories',
        price: 500,
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        image: 'img 1', 
      },
      {
        key: '2',
        name: 'A4 Mouse',
        category: 'Computer Accessories',
        price: 300,
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        image: 'img 2', 
      },
      {
        key: '3',
        name: 'A4 Tech Headphone',
        category: 'Computer Accessories',
        price: 850,
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
        image: 'img 3', 
      },
    ];
    

    return (
        <>
            <h1>Product List</h1>
            <Table dataSource={data}>  
            <Column title="Name" dataIndex="name" key="name" /> 
            <Column title="Category" dataIndex="category" key="category" />
            <Column title="Price" dataIndex="price" key="price" />
            <Column title="Description" dataIndex="description" key="description" />
            <Column title="image" dataIndex="image" key="image" />  
            <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <Space size="middle">
                <a><Button type="primary">Update </Button></a>
                <a><Button type="danger">Delete</Button></a>
                </Space>
            )}
            />
        </Table>
        </>
    )
}

 