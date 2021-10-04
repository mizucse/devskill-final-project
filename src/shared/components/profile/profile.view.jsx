import React, { useEffect, useState } from "react";
import { Row, Col, Divider, Card, InputNumber, Button  } from "antd";
import { CartOutlined } from '@ant-design/icons';

import { BASE_URL } from "../../../utils/constants";
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfileDetailsAction } from '../../../store/action/userAction';
import { cartAction } from "../../../store/action/cartAction";

const style = { padding: '8px 0' };
const { Meta } = Card;

export default function Profile() {
    const {id} = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const authUser = useSelector(store=>store.authStore);
    const profileData = useSelector((store)=>store.userDetailsStore.userDetails);


    if(authUser.token == null) {
      if(authUser.role == "admin") {
        history.push('/admin');
      }else if(authUser.role == "user"){
         
      }
    }
    
    useEffect(()=>{
      dispatch(GetProfileDetailsAction());
    },[]);

    // function onChange(value) { 
    //     setCartQty(value);
    // }

    // const addToCart = (e) => {
    //     e.preventDefault(); 
    //     dispatch(cartAction(id,cartQty))
    // }

    
  return (
    <>
    <Card title="My Profile" bordered={false} style={{ width: "100%" }}>
      <Row>
        <Col span={8}> 
            <h4><u>Basic Information</u></h4>
            <p><b>First Name:</b> {profileData?.firstname} </p>
            <p><b>Last Name:</b> {profileData?.lastname} </p>
            <p><b>Email:</b> {profileData?.email} </p>
            <p><b>Username:</b> {profileData?.username} </p> 
        </Col>
        <Col span={8}>
            <h4><u>Address</u></h4>
            <p><b>City:</b> {profileData.address?.city} </p>
            <p><b>Street:</b> {profileData.address?.street} </p>
            <p><b>Number:</b> {profileData.address?.number} </p> 
            <p><b>Zipcode:</b> {profileData.address?.zipcode} </p> 
        </Col>
        <Col span={8}>
            <h4><u>Geolocation</u></h4>
            {/* <p><b>Latitude:</b> {profileData.address.geolocation?.lat} </p>
            <p><b>Longitude:</b> {profileData.address.geolocation?.logn} </p>  */}
        </Col>
      </Row>
    </Card>
    {/* <Row>
      <Col span={8} style={{padding: "0 15px"}}>
        <img style={{width: "100%"}} alt="example" src={BASE_URL+currentProduct?.image} /></Col>
      <Col span={16}>
        <Card title={currentProduct?.title} style={{ width: "100%" }}>
            <p>Price: {currentProduct?.price}</p>
            <p>Category: {currentProduct.category?.name}</p>
            <p>{currentProduct?.description}</p>
            <InputNumber min={1}  defaultValue={1} onChange={onChange} /> &nbsp;
            <Button onClick={(e) => addToCart(e)} type="primary"  size="medium" >
                Add to cart
            </Button>
        </Card>
      </Col>
    </Row>  */}
    </>
  );
}
