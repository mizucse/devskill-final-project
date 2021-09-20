
import React, { useEffect } from "react";
import { Row, Col, Divider, Card, Button } from "antd";
import { BASE_URL } from "../../../utils/constants";
import { useHistory } from 'react-router'; 
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductAction } from '../../../store/action/productAction';

const style = { padding: '8px 0' };
const { Meta } = Card;

export default function PublicProducts() {
    const history = useHistory();
    const productList = useSelector(store=>store.productStore.product)

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(GetAllProductAction());
    },[]);

    const viewProductDetails = (e, id) => { 
        e.preventDefault();

        history.push(`/product/${id}`);
    } 

    // console.log(productList,"========products components======");


    const addToCart = (id) => {
        console.log(id,"========added to cart======");
    } 
    
  return (
    <>
    <Divider orientation="left">Public Products</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        { 
                productList.map((product) => {
                return <>
                    <Col className="gutter-row" span={6} onClick={(e)=>viewProductDetails(e, product._id)} style={{zIndex: 1}}>
                        <div style={style}>
                        <Card hoverable
                                style={{ width: "100%" }}
                                cover={<img alt="example" src={BASE_URL+product.image} />}
                            >
                                <Meta title={product.title} />
                                <h4 style={{paddingTop: "5px"}}>Price: {product.price} </h4>
                                {/* <Meta description={product.description} />  */}
                                {/* <Button onClick={((e)=>addToCart(e, product?.id))} type="primary"  size="small" style={{zIndex: 22}}>
                                    Add to cart
                                </Button> */}
                            </Card>
                        </div>
                    </Col>
                    </>
                })  
        }
        
    </Row>
    </>
  );
}
