
import React, { useEffect, useState } from "react";
import { Row, Col, Divider, Card, Button } from "antd";
import { BASE_URL } from "../../../utils/constants";
import { useHistory } from 'react-router'; 
import { useDispatch, useSelector } from 'react-redux';
import { GetProductDetailsAction, GetAllProductAction } from '../../../store/action/productAction';
import { cartAction } from "../../../store/action/cartAction";
import { Loader } from "../loader/loader";

const style = { padding: '8px 0' };
const { Meta } = Card;

export default function PublicProducts() {
    const [loader, setLoader] = useState(true);
    const history = useHistory();
    const productList = useSelector(store=>store.productStore.product);
    const [cartQty, setCartQty] = useState(1);

    const dispatch = useDispatch();

    useEffect(()=>{
        setTimeout(() => { 
          setLoader(false);
        }, 2000);
      dispatch(GetAllProductAction());
    },[]);

    const viewProductDetails = (e, id) => { 
        e.preventDefault();

        history.push(`/product/${id}`);
    } 
 

    // const addToCart = (e) => {
    //     e.preventDefault(); 
    //     dispatch(cartAction(id,cartQty))
    // }

    const addToCart = (e, id) => {
        e.preventDefault(); 
        console.log(id,cartQty,"========added to cart======");
        dispatch(cartAction(id,cartQty));
    } 
    
  return <>
    {
      loader ? (
        <>
        <Loader />
        </>
        )  : (
    <>
    <Divider orientation="left">Public Products</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        { 
            productList.map((product) => {
            return <>
                <Col className="gutter-row" span={6}  style={{zIndex: 1}}>
                    <div style={style}>
                    <Card hoverable
                            style={{ width: "100%" }}
                            cover={<img alt="example" src={BASE_URL+product.image} onClick={(e)=>viewProductDetails(e, product._id)}/>}
                        >
                            <Meta title={product.title} onClick={(e)=>viewProductDetails(e, product._id)}/>
                            <h4 style={{paddingTop: "5px"}}>Price: {product.price} </h4>
                            {/* <Meta description={product.description} />  */}
                            <Button onClick={((e)=>addToCart(e, product?.id,))} type="primary"  size="medium" style={{zIndex: 22}}>
                                Add to cart
                            </Button>
                        </Card>
                    </div>
                </Col>
                </>
            })  
        }
        
    </Row>
    </>
  )
    }
    </>
}
