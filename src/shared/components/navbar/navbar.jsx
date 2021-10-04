import React, { useEffect, useState } from 'react';  
import { Link } from 'react-router-dom';
import { Layout, Menu, Badge, Image , Avatar , Dropdown } from 'antd';
import Logout from '../../../shared/components/logout/logout'; 
import {UnorderedListOutlined, DatabaseOutlined, PlusCircleOutlined, PicCenterOutlined, UserOutlined, LogoutOutlined, 
  VideoCameraOutlined,
  UploadOutlined,HomeOutlined, AppstoreOutlined, SettingOutlined,ShoppingCartOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../utils/helpers/history';
import { SignOutData } from '../../../store/action/signOutAction';
import { getCartAction } from '../../../store/action/cartAction';
import { useHistory } from 'react-router';  
import { GetProfileDetailsAction } from '../../../store/action/userAction';

const { Header, Sider, Content } = Layout;
 
export default  function NavBar({children}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [state,setState] = useState({ collapsed: false, });
    const authUser = useSelector((store)=>store.authStore);
    const cartList = useSelector((store)=>store.cartStore.data);
    const profileData = useSelector((store)=>store.userDetailsStore.userDetails);
    const cartLength = cartList?.length;

    // console.log(authUser.role,"user authUser.role=====");

    const loggedIn = () => {
      let isLoggedIn = false; 
        if(authUser.role != null || authUser.token != null || authUser.email != null){
          isLoggedIn = true;
        } 
      return isLoggedIn;
    }

    useEffect(()=>{
      dispatch(getCartAction());
      dispatch(GetProfileDetailsAction());
    },[]);
  

    // console.log(cartList,"user navbar cart list====");
    // console.log(cartList?.length,"user  length navbar cart list====");

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
      // dispatch(SignOutAction()); 
      dispatch(SignOutData());
      history.push('/login');
      // dispatch()
    } 
    // console.log(loggedIn(), "is logged in check");
    var menu = ( 
      <Menu>
      <Menu.Item>
        <Link to='/login'><UserOutlined /> Login</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/registration'><UserOutlined /> Registration</Link>
      </Menu.Item> 
    </Menu>
    );
    {
      loggedIn() && (
      menu = 
        <Menu>
        <Menu.Item>
          <Link to='/profile'><UserOutlined /> Profile</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/orders'><UnorderedListOutlined /> My Orders</Link>
        </Menu.Item>
        <Menu.Item >
          <div onClick={logout}><LogoutOutlined /> Logout </div>
        </Menu.Item>
      </Menu>
    )
    }
    return (
      <Layout> 
          <Header theme={"light"} className="site-layout-background" style={{ position: 'fixed', width: "100%", zIndex: 10, padding: "0 30px",  display: 'flex', justifyContent: "space-between", alignItems: "center"}} >
            <div className="logo" style={{color: '#fff', fontSize: '18px',lineHeight: '60px',textAlign: 'center',fontWeight: 'bold', display: 'flex', justifyContent: 'center'}} >
              <Link to='/'><Image style={{margin: "-17px 0px", width: '50px', }} src="logo.png" preview={false}/> <span style={{color: "#fff !important"}}>MI TECH</span></Link>
            </div>  
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} >
              <Badge count={cartLength} >
                  <ShoppingCartOutlined onClick={(e)=> goToCart()} shape="round" size="large" style={{color: "#fff", fontSize: "24px"}}/>
              </Badge>
              <Dropdown overlay={menu} placement="bottomRight">
                <div style={{cursor: "pointer"}}>
                  <Avatar size={40} icon={<UserOutlined />} style={{marginLeft: "15px"}}></Avatar>
                  <span style={{color: '#fff', paddingLeft: '5px'}}>{profileData?.username}</span>
                </div>
              </Dropdown> 
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '100vh',
              marginTop: '60px',
            }}
          >
            {children}
          </Content> 
      </Layout>
    ); 
}
 