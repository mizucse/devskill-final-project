import React, { useEffect } from 'react'; 
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Badge } from 'antd';
import Logout from '../../../shared/components/logout/logout'; 
import {
  MenuUnfoldOutlined, UnorderedListOutlined, DatabaseOutlined, PlusCircleOutlined, PicCenterOutlined,
  MenuFoldOutlined,PlusSquareOutlined,
  UserOutlined,UserAddOutlined,
  VideoCameraOutlined,
  UploadOutlined,HomeOutlined, AppstoreOutlined, SettingOutlined,ShoppingCartOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../utils/helpers/history';
import { SignOutData } from '../../../store/action/signOutAction';
import { getCartAction } from '../../../store/action/cartAction';
import { useHistory } from 'react-router';

const { Header, Sider, Content } = Layout;
 
export default  function AdminNavBar({children}) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [state,setState] = useState({ collapsed: false, });
    const cartList = useSelector((store)=>store.cartStore.data);
    const cartLength = cartList?.length;

    useEffect(()=>{
      dispatch(getCartAction());
    },[]);
  

    // console.log(cartList,"navbar cart list====");
    // console.log(cartList?.length,"length navbar cart list====");

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };

    const goToCart = (e) => { 
      history.push('/admin/cart');
    }

    const logout = () => {
      console.log("Inside logout function after logout click");
      // dispatch(Logout());
      dispatch(SignOutData());
      history.push('/login');
    }
 
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={state.collapsed}>
          <div className="logo" style={{color: '#fff', fontSize: '18px',lineHeight: '60px',textAlign: 'center',fontWeight: 'bold'}} >MITECH Admin</div>
          <Menu theme="dark" style={{color: "#fff"}} mode="inline" defaultSelectedKeys={['1']}>
            {/* <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to='/admin/login'>Login</Link>
            </Menu.Item>*/}
            <Menu.Item key="3" icon={<HomeOutlined />}>
              <Link to='/admin'>Dashboard</Link>
            </Menu.Item>
            {/* <Menu.Item key="11" icon={<AppstoreOutlined />}>
              <Link to='/admin/public/products'>Public Products</Link>
            </Menu.Item> */}
            <Menu.Item key="4" icon={<UnorderedListOutlined />}>
              <Link to='/admin/orders'>Order List</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<DatabaseOutlined />}>
              <Link to='/admin/products'>Product List</Link>
            </Menu.Item> 
            <Menu.Item key="6" icon={<PlusCircleOutlined />}>
              <Link to='/admin/add-product'>Add Product</Link>
            </Menu.Item> 
            <Menu.Item key="7" icon={<PicCenterOutlined />}>
              <Link to='/admin/category'>Category List</Link>
            </Menu.Item> 
            <Menu.Item key="8" icon={<PlusSquareOutlined />}>
              <Link to='/admin/add-category'>Add Category</Link>
            </Menu.Item> 
            <Menu.Item key="9" icon={<UserOutlined />}>
              <Link to='/admin/users'>User List</Link>
            </Menu.Item> 
            <Menu.Item key="2" icon={<UserAddOutlined />}>
              <Link to='/admin/add-user'>Add New User</Link>
            </Menu.Item>   
            <Menu.Item key="10" icon={<UploadOutlined />}>
              <div onClick={logout}>Logout</div>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: "0 30px 0 0",  display: 'flex', justifyContent: "space-between", alignItems: "center", paddingRight: "30px" }} >
            {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style: {color: "#fff"},
              onClick: toggle,
            })}
            <div  >
            {/* <Badge count={cartLength}>
                <ShoppingCartOutlined onClick={(e)=> goToCart()} shape="round" size="large" style={{color: "#fff", fontSize: "24px"}}/>
            </Badge> */}

              {/* <ShoppingCartOutlined style={{color: "#fff", fontSize: "22px"}}/>

              <div style={{position: "absolute", top: 9, right: 0, border: "1px solid $fff"}}>3</div> */}
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
 