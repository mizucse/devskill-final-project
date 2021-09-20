import React, { useEffect } from 'react';  

import { Table, Tag, Space, Button } from 'antd';
import { OrderListAction } from '../../../store/action/cartAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Orders() {
    const { Column, ColumnGroup } = Table;
    const dispatch = useDispatch();
    // const history = useHistory();
    const orderList = useSelector(store=>store.orderStore)

    // console.log(orderList, "===all orders in order.list====");

    useEffect(()=> {
      dispatch(OrderListAction());
    },[]);

    const {data} = orderList;
    
    // console.log(data, "===all orders data====");
    
  // data.map(order => {
  //   console.log(order.productId,"orderlist in map========mizu======");
  // });

    return (
        <>
            <h1>Orders</h1>
            <Table dataSource={data}>  
            {/* <Column title="Product" dataIndex="product" key="product" /> 
            <Column title="Price" dataIndex="price" key="price" /> 
            <Column title="Qty" dataIndex="qty" key="qty" />  */}
            <Column title="Order ID" dataIndex="_id" key="_id" /> 
            <Column title="Order Date" dataIndex="date" key="date" /> 
            <Column title="Order Status" dataIndex="status" key="status" /> 
            {/* <Column title="Total Price" dataIndex="totalPrice" key="totalPrice" />  */}
            <Column
            title="Action"
            key="action"
            render={(text, record) => (
                <Space size="middle"> 
                <a><Button type="danger">Cancel</Button></a>
                </Space>
            )}
            />
        </Table>
        </>
    )
}

 