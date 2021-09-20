import React, { useEffect } from 'react'; 
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Badge, Image } from 'antd';
import Logout from '../../../shared/components/logout/logout'; 
import {
  MenuUnfoldOutlined, UnorderedListOutlined, DatabaseOutlined, PlusCircleOutlined, PicCenterOutlined,
  MenuFoldOutlined,PlusSquareOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,HomeOutlined, AppstoreOutlined, SettingOutlined,ShoppingCartOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../utils/helpers/history';
import { signOutAction } from '../../../store/action/signOutAction';
import { getCartAction } from '../../../store/action/cartAction';
import { useHistory } from 'react-router'; 

const { Header, Sider, Content } = Layout;
 
export default  function NavBar({children}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [state,setState] = useState({ collapsed: false, });
    const authUser = useSelector((store)=>store.authStore);
    const cartList = useSelector((store)=>store.cartStore.data);
    const cartLength = cartList?.length;

    console.log(authUser.role,"user authUser.role=====");

    const loggedIn = () => {
      let isLoggedIn = true;

      if(authUser.role == null || authUser.token == null || authUser.email == null){
        isLoggedIn = false;
      }
       

      return isLoggedIn;
    }

    useEffect(()=>{
      dispatch(getCartAction());
    },[]);
  

    console.log(cartList,"user navbar cart list====");
    console.log(cartList?.length,"user  length navbar cart list====");

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };

    const goToCart = (e) => { 
      history.push('/cart');
    }

    const login = (e) => { 
      history.push('/login');
    }

    const logout = () => {
      console.log("Inside logout function after logout click");
      // dispatch(Logout());
      dispatch(signOutAction());
      // history.push('/');
    }
 
    console.log(loggedIn(), "is logged in check");

    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <div className="logo" style={{color: '#fff', fontSize: '18px',lineHeight: '60px',textAlign: 'center',fontWeight: 'bold'}} >
            MI TECH
          </div>
          <Menu theme="dark" style={{color: "#fff"}} mode="inline" defaultSelectedKeys={['1']}>
            
            <Menu.Item key="3" icon={<HomeOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item> 
            <Menu.Item key="4" icon={<UnorderedListOutlined />}>
              <Link to='/orders'>Order List</Link>
            </Menu.Item> 
            <Menu.Item key="9" icon={<UserOutlined />}>
              <Link to='/profile'>Profile</Link>
            </Menu.Item> 
            {/* <Menu.Item key="10" icon={<UploadOutlined />}>
              <div onClick={logout}>Logout</div>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: "0 30px 0 0",  display: 'flex', justifyContent: "space-between", alignItems: "center", paddingRight: "30px" }} >
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style: {color: "#fff"},
              onClick: toggle,
            })}
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} >
              <Badge count={cartLength}>
                  <ShoppingCartOutlined onClick={(e)=> goToCart()} shape="round" size="large" style={{color: "#fff", fontSize: "24px"}}/>
              </Badge>
               {
               !loggedIn() && <h1 style={{color: "#fff", paddingLeft: "20px"}} onClick={(e)=> login()}>{<UserOutlined />} Login</h1>
               }
               {
               loggedIn() && <h1 style={{color: "#fff", paddingLeft: "20px", cursor: "pointer"}} onClick={logout}>{<UploadOutlined />} Logout</h1>
               }
              
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    ); 
}
 