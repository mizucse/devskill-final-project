import React from 'react';  

import { Table, Tag, Space, Button, h1 } from 'antd';

export default function Categories() {
    const { Column, ColumnGroup } = Table;

    const data = [
      {
        key: '1',
        name: 'cat 1',
        description: 'description 1', 
      },
      {
        key: '2',
        name: 'cat 2',
        description: 'description 2', 
      },
      {
        key: '3',
        name: 'cat 3',
        description: 'description 3', 
      },
    ];
    

    return (
        <>
        <h1>All Categories</h1>
            <Table dataSource={data}>  
            <Column title="Name" dataIndex="name" key="name" /> 
            <Column title="Description" dataIndex="description" key="description" /> 
            {/* <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <Space size="middle">
                <a><Button type="primary">Accept</Button> </a>
                <a><Button type="danger">Delete</Button></a>
                </Space>
            )}
            /> */}
        </Table>
        </>
    )
}

 