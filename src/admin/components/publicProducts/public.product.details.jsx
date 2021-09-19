import React, { useEffect, useState } from "react";
import { Row, Col, Divider, Card, InputNumber, Button  } from "antd";
import { CartOutlined } from '@ant-design/icons';

import { BASE_URL } from "../../../utils/constants";
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductDetailsAction } from '../../../store/action/productAction';
import { cartAction } from "../../../store/action/cartAction";

const style = { padding: '8px 0' };
const { Meta } = Card;

export default function ProductDetails() {
    const {id} = useParams();
    const history = useHistory(); 
    const currentProduct = useSelector(store=>store.productDetailsStore.productDetail)
    const [cartQty, setCartQty] = useState(1);

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(GetProductDetailsAction(id));
    },[]);

    function onChange(value) { 
        setCartQty(value);
    }

    const addToCart = (e) => {
        e.preventDefault(); 
        dispatch(cartAction(id,cartQty))
    }

    
  return (
    <>
    <Divider orientation="left">Product Details</Divider>
    <Row>
      <Col span={8} style={{padding: "0 15px"}}><img style={{width: "100%"}} alt="example" src={BASE_URL+currentProduct?.image} /></Col>
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
    </Row> 
    </>
  );
}
