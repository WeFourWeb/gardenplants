import React, { useState } from 'react'
import { Layout } from 'antd'
import style from './orders.module.css'
import Order from '../../components/order/Order'

const { Sider } = Layout;

const Orders = (props: any) => {
    let [ collapsed, setEditMode ] = useState(false);
    let changeEditMode = () => {
      if(collapsed == false){
          setEditMode(true);
      } else {
          setEditMode(false);
      }
    }
    return (
        <Sider width={'22vw'}className={style.sider}collapsible collapsed={collapsed} onCollapse={changeEditMode}>     
            <Order collapsed={collapsed} />
            <Order collapsed={collapsed}/>
            <Order collapsed={collapsed}/>
            <Order collapsed={collapsed}/>
            <Order collapsed={collapsed} />
            <Order collapsed={collapsed}/>
            <Order collapsed={collapsed}/>
            <Order collapsed={collapsed}/>
        </Sider> 
    )
}

export default Orders