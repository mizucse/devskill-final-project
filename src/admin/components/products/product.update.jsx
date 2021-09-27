import { React, useState, useEffect } from "react";

import { Form, Input, Button, Checkbox, Upload, Space } from "antd";
import { UserOutlined, UploadOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { useHistory, Link } from "react-router-dom";
import { useParams } from 'react-router';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CategoryListAction } from "../../../store/action/categoryAction";
import { GetProductDetailsAction, UpdateProductAction } from "../../../store/action/productAction";
import FileBase64 from "react-file-base64";

import { Select } from "antd";

export default function UpdateProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(GetProductDetailsAction(id));
  },[]);
  const productDetail = useSelector(store=>store.productDetailsStore.productDetail)

  const { category } = useSelector((store) => store.categoryStore);
  
  const { Option } = Select;

 

  function onChange(value) {
    console.log(`selected ${value}`);
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  // category.map((cat)=>{
  //   console.log(cat.name,'====map==');
  // })
  // console.log(category,'=== Category ===');

  const [image, setImage] = useState();
  const [productData, setProductData] = useState({
    title: productDetail?.title,
    price: productDetail?.price,
    description: productDetail?.description,
    image: productDetail?.image,
    stock: productDetail?.stock,
    category: {
      _id: productDetail.category?.name,
    },
  });

  const productCatInfo = (e, dataType) => {
    setProductData({
      ...productData,
      category: { ...productData.category, [dataType]: e },
    });
  };

  const productInfo = (e, dataType) => {
    console.log(e);
    console.log(dataType);
    setProductData({ ...productData, [dataType]: e.target.value });
  };

  console.log(productData ,"productData in product update ==========!!!");

  const addProductSubmit = () => {
    dispatch(UpdateProductAction(id, productData));
    console.log(productData, "=====products info taken======");
  };

  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    // console.log('BASE_URL=======', BASE_URL);
    // console.log('signUpData=======' );
  };

  useEffect(() => {
    dispatch(CategoryListAction());
  }, []);

  const handleImage = (e) => {
    setImage({ files: e });
    setProductData({ ...productData, image: e.base64 });
    // console.log(e.base64, "Image Event");
  };

  return (
    <Row align="" style={{ height: "100vh" }}>
      <Col span={12} offset={6}>
        <h1 style={{ textAlign: "center" }}>Product Update Form</h1>
        <Form
          name="normal_login"
          className="login-form"
          style={{ maxWidth: "550px", margin: "0 auto" }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: "Please input product title!",
              },
            ]}
          >
            <Input
              defaultValue={productData?.title}
              onKeyUp={(e) => productInfo(e, "title")}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Product Title"
            />
          </Form.Item>
          <Form.Item
            name="price"
            type="number"
            rules={[
              {
                required: true,
                message: "Please input product price!",
              },
            ]}
          >
            <Input
                defaultValue={productData.price}
              onKeyUp={(e) => productInfo(e, "price")}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Price"
            />
          </Form.Item>
          <Form.Item
            name="description"
            rules={[
              {
                required: true,
                message: "Please input product description!",
              },
            ]}
          >
            <Input
                defaultValue={productData.description}
              onKeyUp={(e) => productInfo(e, "description")}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Product description"
            />
          </Form.Item>
          <Space
            direction="vertical"
            style={{ width: "100%", marginBottom: "15px" }}
            size="large"
          >
            <FileBase64 onDone={handleImage} multiple={false} />
            {image ? <pre>Image Uploaded</pre> : null}
          </Space>
          <Form.Item
            name="stock"
            rules={[
              {
                required: true,
                message: "Please input product stock!",
              },
            ]}
          >
            <Input 
              defaultValue={productData.stock}
              onKeyUp={(e) => productInfo(e, "stock")}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Stock"
            />
          </Form.Item>

          <Select 
            // defaultValue="Select Category"
            defaultValue={productData.category?._id}
            onChange={(e) => productCatInfo(e, "_id")}
            style={{ width: "100%", marginBottom: "30px" }}
          >
            {category.map((cat, index) => {
              return (
                <Option key={index} value={cat._id}>
                  {cat.name}
                </Option>
              );
            })}
          </Select>

          <Form.Item>
            <Button
              type="primary"
              onClick={addProductSubmit}
              htmlType="submit"
              className="login-form-button"
            >
              Update
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
