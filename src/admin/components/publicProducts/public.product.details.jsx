import React, { useEffect, useState } from "react";
import { Row, Col, Divider, Card  } from "antd";
import { BASE_URL } from "../../../utils/constants";
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductDetailsAction } from '../../../store/action/productAction';

const style = { padding: '8px 0' };
const { Meta } = Card;

export default function ProductDetails() {
    const {id} = useParams();
    const history = useHistory(); 
    const currentProduct = useSelector(store=>store.productDetailsStore.productDetails)
    

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(GetProductDetailsAction(id));
    },[]);

    const addToCart = (id) => { 
        console.log(id);
    console.log(id,"========added to cart======");
    } 

    
  return (
    <>
    <Divider orientation="left">Product Details</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12} >
            <div style={style}>
            <Card hoverable style={{ width: 240 }}
                    cover={<img alt="example" src={BASE_URL+currentProduct.image} />}
                >
                    <Meta title={currentProduct.title} />
                    <h4 style={{paddingTop: "5px"}}>Price: {currentProduct.price} </h4>
                    <h4 style={{paddingTop: "5px"}}> Category: {currentProduct.category} </h4>
                    <Meta description={currentProduct.description} /> 
                    <button onClick={addToCart(currentProduct.id)}>Add to cart</button>
                </Card>
            </div>
        </Col>
    </Row>
    </>
  );
}
