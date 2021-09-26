import React from 'react';  

import { Table, Tag, Space, Button, InputNumber, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../../utils/constants';
import { CheckOutAction } from '../../../store/action/cartAction';

export default function CartList() {
    const { Column, ColumnGroup } = Table;
    const dispatch = useDispatch();
    const cartList = useSelector((store)=>store.cartStore.data);

    const data = cartList

    function checkOut() {
      dispatch(CheckOutAction());
    }

    return (
        <> 
            <Table dataSource={data}>
            <ColumnGroup title="Cart Products">
            <Column title="Image" dataIndex="Image" key="Image" render={(text, record) => (
                <Space size="middle">
                <Image style={{width: "100%", maxWidth: "100px"} } src={BASE_URL+record.productId.image} />
                </Space>
            )}/>
            <Column title="Product Name" dataIndex="title" key="title" render={(text, record) => (record.productId.title)}/> 
            <Column title="Qty" dataIndex="quantity" key="quantity" render={(text, record) => (record.quantity)}/> 
            {/* <Column
            title="Qty"
            key="quantity"
            render={(text, record) => (
                <Space size="middle">
                  <InputNumber min={1} defaultValue={record.quantity} onChange={(e) => onChange(record.quantity, record.productId.price)} />
                </Space>
            )}
            /> */}
            <Column title="Price" dataIndex="price" key="price" render={(text, record) => (record.productId.price)} />
            <Column title="Total" render={(text, record) => (record.quantity*record.productId.price)} /> 
            </ColumnGroup>
        </Table>
        {
          cartList ? <div> 
          <Button onClick={(e)=>checkOut()} type="primary">Proceed to Checkout</Button>
        </div> : <></>
        }
        
        </>
    )
}

 