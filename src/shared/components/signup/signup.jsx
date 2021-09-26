import { React, useState } from "react";
import { BASE_URL } from "../../../utils/constants";
import { Form, Input, Button, Checkbox, Row, Col, Divider, Image } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  AimOutlined,
  BorderOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { signUpAction } from "../../../store/action/userAction";

export default function Signup() {
  const style = { padding: "8px 0" };

  const dispatch = useDispatch();

  const [signUpData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    address: {
      city: "",
      street: "",
      number: "",
      zipcode: "",
      geolocation: {
        lat: "",
        long: "",
      },
    },
  });
  
  const signupInfo = (e, dataType) => {
    setSignUpData({...signUpData,[dataType]: e.target.value});
  };

  const addressInfo = (e, dataType) => {
    setSignUpData({...signUpData, address: {...signUpData.address,[dataType]: e.target.value}});
  };

  const geolocationInfo = (e, dataType) => {
    setSignUpData({...signUpData, geolocation:{...signUpData.geolocation,[dataType]: e.target.value}});
  };
  const signupSubmit = () => {
    // console.log(signUpData,"signupdata===");

    dispatch(signUpAction(signUpData));
  };

  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    // console.log('BASE_URL=======', BASE_URL);
    // console.log('signUpData=======' );
  };

  return (
    <Row align="middle" style={{ height: "100vh" }}>
      <Col span={18} offset={3}>
        <div style={{textAlign: 'center'}}>
          <Link to="/"><Image  width={100} src="logo.png" preview={false}/></Link>
        </div>
        <h1 style={{ textAlign: "center" }}>Registration</h1>
        <Form
          name="normal_login"
          className="login-form"
          style={{ maxWidth: "", margin: "0 auto" }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Form.Item
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your First Name!",
                    },
                  ]}
                >
                  <Input
                    onKeyUp={(e) => signupInfo(e, "firstname")}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="First Name"
                  />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Form.Item
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Last Name!",
                    },
                  ]}
                >
                  <Input
                    onKeyUp={(e) => signupInfo(e, "lastname")}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Last Name"
                  />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input
                    onKeyUp={(e) => signupInfo(e, "email")}
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="email"
                  />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    onKeyUp={(e) => signupInfo(e, "phone")}
                    prefix={<PhoneOutlined className="site-form-item-icon" />}
                    placeholder="Phone Number"
                  />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Form.Item 
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "Please input your city!",
                    },
                  ]}
                >
                  <Input
                    onKeyUp={(e) => addressInfo(e, "city")}
                    prefix={<AimOutlined className="site-form-item-icon" />}
                    placeholder="City"
                  />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Form.Item
                  name="street"
                  rules={[
                    {
                      required: true,
                      message: "Please input your street!",
                    },
                  ]}
                >
                  <Input
                    onKeyUp={(e) => addressInfo(e, "street")} 
                    prefix={<AimOutlined className="site-form-item-icon" />}
                    placeholder="Street"
                  />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Form.Item
                  name="number"
                  rules={[
                    {
                      required: true,
                      message: "Please input your number!",
                    },
                  ]}
                >
                  <Input
                    onKeyUp={(e) => addressInfo(e, "number")} 
                    prefix={<AimOutlined className="site-form-item-icon" />}
                    placeholder="Number"
                  />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Form.Item
                  name="zipcode"
                  rules={[
                    {
                      required: true,
                      message: "Please input your zipcode!",
                    },
                  ]}
                >
                  <Input
                    onKeyUp={(e) => addressInfo(e, "zipcode")} 
                    prefix={<AimOutlined className="site-form-item-icon" />}
                    placeholder="Zipcode"
                  />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Form.Item
                  name="lat"
                  rules={[
                    {
                      required: true,
                      message: "Please input your geolocation latitude!",
                    },
                  ]}
                >
                  <Input
                    onKeyUp={(e) => geolocationInfo(e, "lat")} 
                    prefix={<AimOutlined className="site-form-item-icon" />}
                    placeholder="Latitude"
                  />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div style={style}>
                <Form.Item
                  name="long"
                  rules={[
                    {
                      required: true,
                      message: "Please input your geolocation longitude!",
                    },
                  ]}
                >
                  <Input
                    onKeyUp={(e) => geolocationInfo(e, "long")} 
                    prefix={<AimOutlined className="site-form-item-icon" />}
                    placeholder="Longitude"
                  />
                </Form.Item>
              </div>
            </Col>

            <Col className="gutter-row" span={8}>
          <div style={style}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              onKeyUp={(e) => signupInfo(e, "username")}
              prefix={<UserOutlined className="site-form-item-icon" autoComplete="off"/>}
              placeholder="Username"
            />
          </Form.Item>
          </div>
          </Col>
          
          <Col className="gutter-row" span={8}>
          <div style={style}>
          <Form.Item
            name="password" 
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              onKeyUp={(e) => signupInfo(e, "password")}
              prefix={<LockOutlined className="site-form-item-icon"  autoComplete="off"/>}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          </div>
          </Col>

          </Row>
          <Form.Item>
            <Button
              type="primary"
              onClick={signupSubmit}
              htmlType="submit"
              className="login-form-button"
            >
              Sign Up
            </Button>{" "}
            &nbsp; Already Registered! <Link to="/login"> Login Now</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
