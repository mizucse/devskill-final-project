import React, { useEffect, useState } from 'react';  

import { Popconfirm, Table, Tag, Space, Button, InputNumber, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../../utils/constants';
import { CheckOutAction, DeleteCartProductAction,cartAction } from '../../../store/action/cartAction';
import { Loader } from "../loader/loader";
import { DeleteFilled, DeleteOutlined } from "@ant-design/icons"; 

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

    function onChange(value, id, title) {
      console.log('changed', value); 
      console.log('changed id', id);
      dispatch(cartAction(id, value, title));
    }
    const deleteCartProduct = (e ,id) => { 
      console.log(id, "delete confirm "); 
      dispatch(cartAction(id, 0));
      //dispatch(DeleteCartProductAction(id));
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
            <Column title={
              <h4 style={{textAlign: "left"}}>Image</h4>} dataIndex="Image" key="Image" render={(text, record) => (
                <Space size="middle">
                <Image style={{width: "100%", maxWidth: "100px"} } src={BASE_URL+record.productId.image} />
                </Space>
            )}/>
            <Column title={<h4 style={{textAlign: "left"}}>Product Name</h4>}  dataIndex="title" key="title" render={(text, record) => (record.productId.title)}/> 
            <Column title={<h4 style={{textAlign: "left"}}>Qty</h4>}  dataIndex="quantity" key="quantity" render={(text, record) => (
              <>
                  <InputNumber min={1} max={100000} defaultValue={record.quantity}  onChange={(e)=>onChange(e, record.productId._id, record.productId.title)}/>
              </>
              )}/> 
            <Column title={<h4 style={{textAlign: "left"}}>Price</h4>}  dataIndex="price" key="price" render={(text, record) => (record.productId.price)} />
            <Column style={{textAlign: "center"}} title={<h4 style={{textAlign: "left"}}>Total</h4>} render={(text, record) => (record.quantity*record.productId.price)} /> 
            <Column title={
              <div style={{textAlign: "center"}}>
                <DeleteFilled />
              </div>
              } render={(text, record) => ( 
              <div style={{textAlign: "center"}}> 
                 <Popconfirm
                    title="Are you sure to remove this from cart?" 
                    onConfirm={(e)=>deleteCartProduct(e, record.productId._id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button type="primary"><DeleteOutlined /></Button>
                  </Popconfirm>
              </div> 
            )} /> 
            
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

 