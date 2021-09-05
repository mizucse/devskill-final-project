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
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to='/admin/dashboard'>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to='/admin/products'>Product List</Link>
            </Menu.Item> 
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to='/admin/orders'>Orders
            </Link>
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
            Content
          </Content>
        </Layout>
      </Layout>
    ); 
}
 