import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col , Typography } from 'antd'; 
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import axios from 'axios';



export default function Login() {
  const [loginData, setloginData] = useState({
    email: '',
    password: ''
  }); 

  const loginInfo = (e,dataType) => {
      setloginData({
        ...loginData,[dataType]: e.target.value
      });  
  }

  const submitLogin = () => {
    axios.post('http://localhost:3000/signin',{"email": "test@gmail.com",
		"password": "12345678"
        })
        .then((response)=>{ 
           console.log(response.data, "===response in then") 
        }).catch((error)=>{
          console.log(error, "===response in catch") 
        });
  }
    

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const { Title } = Typography;

  return (
    <Row align="middle" style={{height: '100vh'}}>
      <Col span={12} offset={6}>
        
      <Title style={{textAlign: 'center'}}>User Login</Title>
      <Form
      name="normal_login"
      className="login-form" style={{maxWith: '750px',margin: '0 auto'}}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      
      <Form.Item
        name="email"
        onChange={(e) => loginInfo(e,'email')}
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        onChange={(e) => loginInfo(e,'password')}
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button onClick={submitLogin} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/registration">Register now!</Link>
      </Form.Item>
    </Form>  
      </Col>
    </Row>
  );
}; 