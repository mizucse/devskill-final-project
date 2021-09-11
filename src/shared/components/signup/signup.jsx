import { React , useState } from 'react';
import {BASE_URL} from '../../../utils/constants';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { useDispatch, useSelector } from 'react-redux'; 

import { signUpAction } from '../../../store/action/signUpAction';

export default function Signup() {

  const dispatch = useDispatch();

  const [signUpData, setSignUpData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    username: '',
    password: ''
  });

  const signupInfo = (e, dataType) => {
    setSignUpData({
      ...signUpData, [dataType]: e.target.value 
    });
  }
  const signupSubmit = () => {
      // console.log(signUpData,"signupdata===");

      dispatch(signUpAction(signUpData)); 
  }

  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    // console.log('BASE_URL=======', BASE_URL);
    // console.log('signUpData=======' );
      
  };


  return (
    <Row align="middle" style={{height: '100vh'}}>
      <Col span={12} offset={6}>
        
      <Form
      name="normal_login"
      className="login-form" style={{maxWidth: '550px',margin: '0 auto'}}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your First Name!',
          },
        ]}
      >
        <Input onKeyUp={(e) => signupInfo(e, 'firstname')} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
      </Form.Item>
      <Form.Item
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Please input your Last Name!',
          },
        ]}
      >
        <Input onKeyUp={(e) => signupInfo(e, 'lastname')} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input onKeyUp={(e) => signupInfo(e, 'email')} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input onKeyUp={(e) => signupInfo(e, 'phone')} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Phone Number" />
      </Form.Item>
      {/* <Form.Item
        name="address"
        rules={[
          {
            required: true,
            message: 'Please input your address!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Address" />
      </Form.Item> */}
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input onKeyUp={(e) => signupInfo(e, 'username')}  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input onKeyUp={(e) => signupInfo(e, 'password')}  prefix={<LockOutlined className="site-form-item-icon" />} type="password"
          placeholder="Password"
        />
      </Form.Item>
       
      <Form.Item>
        <Button type="primary" onClick={signupSubmit} htmlType="submit" className="login-form-button">
          Sign Up
        </Button> &nbsp;
        Already Registered! <Link to="/login"> Login Now</Link>
      </Form.Item>
    </Form>  
      </Col>
    </Row>
  );
}; 