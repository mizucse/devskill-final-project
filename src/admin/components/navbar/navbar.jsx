import React from 'react'; 
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
 
export default  function AdminNavBar() {
    const [state,setState] = useState({
        collapsed: false,
    });

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };
 
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <div className="logo" style={{color: '#fff', fontSize: '18px',lineHeight: '60px',textAlign: 'center',fontWeight: 'bold'}} >MITECH Admin</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to='/admin/login'>Login</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to='/admin/registration'>Registration</Link>
            </Menu.Item>  
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to='/admin/dashboard'>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              <Link to='/admin/orders'>Order List</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<VideoCameraOutlined />}>
              <Link to='/admin/products'>Product List</Link>
            </Menu.Item> 
            <Menu.Item key="6" icon={<VideoCameraOutlined />}>
              <Link to='/admin/add-products'>Add Product</Link>
            </Menu.Item> 
            <Menu.Item key="7" icon={<VideoCameraOutlined />}>
              <Link to='/admin/category'>Category List</Link>
            </Menu.Item> 
            <Menu.Item key="8" icon={<VideoCameraOutlined />}>
              <Link to='/admin/add-category'>Add Category</Link>
            </Menu.Item> 
            <Menu.Item key="9" icon={<VideoCameraOutlined />}>
              <Link to='/admin/users'>User List</Link>
            </Menu.Item> 
            <Menu.Item key="10" icon={<UploadOutlined />}>
              <Link to='/admin/logout'>Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
            }}
          >
            conent
          </Content>
        </Layout>
      </Layout>
    ); 
}
 