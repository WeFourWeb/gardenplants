import React, { useState } from 'react'
import style from './main_page.module.css'
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileDoneOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import Administration from './administration/administration';
import { Route } from 'react-router-dom';
import Logistics from './logistics/logistics';
import Orders from './orders/orders';


const { Header, Footer, Sider } = Layout;


const MainPage = (props:any) => {
  let [ collapsed, setEditMode ] = useState(false);
  let changeEditMode = () => {
      if(collapsed == false){
          setEditMode(true);
      } else {
          setEditMode(false);
      }
  }
  
      return (
        <Layout style={{ minHeight: '100vh' }}>
         <Sider collapsible collapsed={collapsed} onCollapse={changeEditMode}>
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
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Route path="/main_page/administration" render = { () => <Administration/>}/>
            <Route path="/main_page/logistics" render = { () => <Logistics/>}/>
            <Route path="/main_page/orders" render = { () => <Orders/>}/>
            <Footer style={{ textAlign: 'center' }}>Gardenplants ©2020 Created by Wefour</Footer>
          </Layout>
        </Layout>
      );
    
  }

export default MainPage