import React, { useEffect, useState } from 'react';  

import { Table, Tag, Space, Button, InputNumber, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../../utils/constants';
import { CheckOutAction } from '../../../store/action/cartAction';
import { Loader } from "../loader/loader";

export default function CartList() {
  const [loader, setLoader] = useState(true);
  const cartData = useSelector((store)=>store.cartStore.data);
  const { Column, ColumnGroup } = Table;
  const dispatch = useDispatch();

    console.log('==we are in CartList==');
    console.log(cartData, 'cartList data======');

    const data = cartData

    useEffect(()=>{
      setTimeout(() => { 
        setLoader(false);
      }, 2000);  
    },[]);


    function checkOut() {
      dispatch(CheckOutAction());
    }

    return <>
    {
      loader ? (
        <>
        <Loader />
        </>
        )  : ( 
        <>
        <Table dataSource={data}>
            <Column title="Image" dataIndex="Image" key="Image" render={(text, record) => (
                <Space size="middle">
                <Image style={{width: "100%", maxWidth: "100px"} } src={BASE_URL+record.productId.image} />
                </Space>
            )}/>
            <Column title="Product Name" dataIndex="title" key="title" render={(text, record) => (record.productId.title)}/> 
            <Column title="Qty" dataIndex="quantity" key="quantity" render={(text, record) => (record.quantity)}/> 
            <Column title="Price" dataIndex="price" key="price" render={(text, record) => (record.productId.price)} />
            <Column title="Total" render={(text, record) => (record.quantity*record.productId.price)} /> 
            
        </Table>
        {
          cartData && <div> 
          <Button onClick={(e)=>checkOut()} type="primary">Proceed to Checkout</Button>
        </div>  
        }
        
        </>
    )
  }
  </>
}

 