import React from "react";

import { Layout, Menu, Breadcrumb } from "antd"; 
import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

export default function Navbar() {
  return (
    <>
      {/* <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <div  >
            <div >
            <Menu theme="dark" mode="horizontal">
                <Menu.Item  icon={<HomeOutlined />}>
                Home
                </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                Products
                </Menu.Item>
                 
                <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
                </Menu.Item>
            </Menu> 
            </div>
            
          </div>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 420 }}
          >
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          MI TECH ©2021 All Rights Reserved.
        </Footer>
      </Layout> */}
    </>
  );
}

///======================
 