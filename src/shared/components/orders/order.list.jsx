import React, { useEffect } from 'react';  

import { Table, Tag, Space, Button,Select } from 'antd';
import { ChangeOrderAction, OrderListAction } from '../../../store/action/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteFilled } from "@ant-design/icons"; 
import { useHistory } from 'react-router';
// import Select from 'rc-select';

export default function Orders() {
    const { Column, ColumnGroup } = Table;
    const dispatch = useDispatch();
    const history = useHistory();
    // const history = useHistory();
    const authUser = useSelector(store=>store.authStore);
    const orderList = useSelector(store=>store.orderStore)

    // console.log(orderList, "===all orders in order.list====");

    if(authUser.token == null) {
      if(authUser.role == "admin") {
        history.push('/login');
      }
    }

    useEffect(()=> {
      dispatch(OrderListAction());
    },[]);

    const {data} = orderList;

    const { Option } = Select;

    function cancelOrder(id, value) {
      // console.log(`selected ${value}`);
      // console.log(`id ${id}`);
      dispatch(ChangeOrderAction(id,value));
    }
    // console.log(data, "===all orders data====");
    
  // data.map(order => {
  //   console.log(order.productId,"orderlist in map========mizu======");
  // });

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Orders</h1>
            <Table dataSource={data}>  
            {/* <Column title="Product" dataIndex="product" key="product" /> 
            <Column title="Price" dataIndex="price" key="price" /> 
            <Column title="Qty" dataIndex="qty" key="qty" />  */}
            <Column title="Order ID" dataIndex="_id" key="_id" /> 
            <Column title="Order Date" dataIndex="date" key="date" /> 
            {/* <Column title="Order Status" dataIndex="status" key="status" />  */}
            <Column title="Order Status" dataIndex="status" key="status" render={(text, record) => {
                if(record.status == 0){
                  return "Pending"
                }else if(record.status == 1){
                  return "Accepted"
                }else if(record.status == 2){
                  return "Cancel"
                } 
              }
              }/> 
            {/* <Column title="Total Price" dataIndex="totalPrice" key="totalPrice" />  */}
            <Column
            title="Action"
            key="action"
            render={(text, record) => {
              if(record.status == 0){
                  return (
                    
                    <Space size="middle">
                      <Button onClick={(e)=>cancelOrder(record._id, 2)} type="warning">Cancel</Button>
                    </Space>
                  )
                }
              }
            }
            />
             
        </Table>
        </>
    )
}

 