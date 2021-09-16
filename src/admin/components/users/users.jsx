import React from 'react';  

import { Table, Tag, Space, Button } from 'antd';

export default function Users() {
    const { Column, ColumnGroup } = Table;

    const data = [
      {
        key: '1',
        name: 'John',
        phone: '01819903891',
        email: 'mizu.cse@gmail.com',
        address: 'New York No. 1 Lake Park', 
      },
      {
        key: '2',
        name: 'Jim',
        phone: '01819903891',
        email: 'mizu.cse@gmail.com',
        address: 'London No. 1 Lake Park', 
      },
      {
        key: '3',
        name: 'Joe',
        phone: '01819903891',
        email: 'mizu.cse@gmail.com',
        address: 'Sidney No. 1 Lake Park', 
      },
    ];
    

    return (
        <>
            <h1>User List</h1>
            <Table dataSource={data}>  
            <Column title="Name" dataIndex="name" key="name" /> 
            <Column title="Phone" dataIndex="phone" key="phone" />
            <Column title="email" dataIndex="email" key="email" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column title="Product" dataIndex="product" key="product" />   
            <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <Space size="middle">
                <a><Button type="primary">View</Button> </a>
                <a><Button type="danger">Delete</Button></a>
                </Space>
            )}
            />
        </Table>
        </>
    )
}

 