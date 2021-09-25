import { React, useState, useEffect } from "react";

import { Form, Input, Button, Checkbox, Upload, Space } from "antd";
import { UserOutlined, UploadOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { useHistory, Link } from "react-router-dom";
import { useParams } from 'react-router';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CategoryListAction } from "../../../store/action/categoryAction";
import { UpdateProductAction } from "../../../store/action/productAction";
import FileBase64 from "react-file-base64";

import { Select } from "antd";

export default function UpdateProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
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
  const [addProductData, setAddProductData] = useState({
    title: "",
    price: 0,
    description: "",
    image: "",
    stock: 0,
    category: {
      _id: "",
    },
  });

  const productCatInfo = (e, dataType) => {
    setAddProductData({
      ...addProductData,
      category: { ...addProductData.category, [dataType]: e },
    });
  };

  const productInfo = (e, dataType) => {
    console.log(e);
    console.log(dataType);
    setAddProductData({ ...addProductData, [dataType]: e.target.value });
  };

  const addProductSubmit = () => {
    dispatch(UpdateProductAction(id, addProductData));
    console.log(addProductData, "=====products info taken======");
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
    setAddProductData({ ...addProductData, image: e.base64 });
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
              onKeyUp={(e) => productInfo(e, "stock")}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Stock"
            />
          </Form.Item>

          <Select
            defaultValue="Select Category"
            onChange={(e) => productCatInfo(e, "_id")}
            style={{ width: "100%", marginBottom: "30px" }}
          >
            {category.map((cat, index) => {
              return (
                <option key={index} value={cat._id}>
                  {cat.name}
                </option>
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
