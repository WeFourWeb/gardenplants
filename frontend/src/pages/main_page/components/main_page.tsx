import React, { useState } from 'react'
import style from './main_page.module.css'
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileDoneOutlined
} from '@ant-design/icons';
import { NavLink, Redirect } from 'react-router-dom';
import Administration from '../../../modules/administration/administration';
import { Route } from 'react-router-dom';
import Logistics from '../../../pages/logistics';
<<<<<<< HEAD
import Routes from '../../../modules/routes/components/routes';
=======
import Orders from '../../../modules/orders/orders';
import ProductManagement from '../../productManagement/component/productManagement';
>>>>>>> master
import { connect } from 'react-redux';

const { Header, Footer, Sider } = Layout;


const MainPage = (props:any) => {
  let [ collapsed, setEditMode ] = useState(true);
  let changeEditMode = () => {
      if(collapsed == false){
          setEditMode(true);
      } else {
          setEditMode(false);
      }
  }
  if(!props.authData){
    return (
      <Redirect to='/'/>
    )
  }
  
      return (
      
        <Layout style={{ minHeight: '100vh' }}>
         <Sider  collapsed={collapsed} onCollapse={changeEditMode} onMouseEnter={() => (setEditMode(false))} onMouseLeave={() => (setEditMode(true))} >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <NavLink to="/main_page/administration">
                <DesktopOutlined />
                <span>Administration</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/main_page/logistics">
                  <PieChartOutlined />
                  <span>Logistics</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/main_page/orders">
                <FileDoneOutlined/>
                  <span>Orders</span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/main_page/product_management">
                <FileDoneOutlined/>
                  <span>Product management</span>
                </NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Route path="/main_page/administration" render = { () => <Administration/>}/>
            <Route path="/main_page/logistics" render = { () => <Logistics/>}/>
<<<<<<< HEAD
            {/* <Route path="/main_page/orders" render = { () => <Routes/>}/> */}
            </Layout>
=======
            <Route path="/main_page/orders" render = { () => <Orders/>}/>
            <Route path="/main_page/product_management" render = { () => <ProductManagement/>}/>
          </Layout>
>>>>>>> master
        </Layout>
      );
    
  }

export default MainPage;
