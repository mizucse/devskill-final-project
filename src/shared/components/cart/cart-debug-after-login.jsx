import React, { useEffect, useState } from 'react';  

import { Table, Tag, Space, Button, InputNumber, Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../../utils/constants';
import { CheckOutAction } from '../../../store/action/cartAction';
import { Loader } from "../loader/loader";
import { useHistory } from 'react-router';

export default function CartList() {
  const [loader, setLoader] = useState(true);
  const { Column, ColumnGroup } = Table;
    const dispatch = useDispatch();
    const history = useHistory();
    const authUser = useSelector((store)=>store.authStore);
    const cartList = useSelector((store)=>store.cartStore.data);

    var data = [];

    if(authUser.token !== null){
      if(authUser.role == "admin"){
        history.push('/admin');
      }else if(authUser.role == "user") {
        var data = cartList
      }
    }

    useEffect(()=>{
      setTimeout(() => { 
        setLoader(false);
      }, 2000); 
    },[]);

    console.log(data, 'cartList data======');

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
        {/* <h1 style={{background: "red", height: "300px", width: "100%"}}>teest</h1> */}
            <Table dataSource={data}>
            <ColumnGroup title="Cart Products">
            <Column title="Image" dataIndex="Image" key="Image" render={(text, record) => (
                <Space size="middle">
                <Image style={{width: "100%", maxWidth: "100px"} } src={BASE_URL+record.productId.image} />
                </Space>
            )}/>
            <Column title="Product Name" dataIndex="title" key="title" render={(text, record) => (record.productId.title)}/> 
            <Column title="Qty" dataIndex="quantity" key="quantity" render={(text, record) => (record.quantity)}/> 
            <Column title="Price" dataIndex="price" key="price" render={(text, record) => (record.productId.price)} />
            <Column title="Total" render={(text, record) => (record.quantity*record.productId.price)} /> 
            </ColumnGroup>
        </Table>
        {/* {
          cartList && <div> 
          <Button onClick={(e)=>checkOut()} type="primary">Proceed to Checkout</Button>
        </div>  
        } */}
        
        </>
    )
  }
  </>
}

 