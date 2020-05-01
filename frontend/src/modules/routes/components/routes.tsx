import React, { useState } from 'react'
import { Layout, Button } from 'antd'
import style from './routes.module.css'
import Route from '../../../components/route/Route';
import NewRoute from '../../../components/new_route/new_route';

const { Sider } = Layout;

const Routes = (props: any) => {
    let [routes, editPoints] = useState([])
    let [ collapsed, setEditMode ] = useState(false);
    let changeEditMode = () => {
      if(collapsed == false){
          setEditMode(true);
      } else {
          setEditMode(false);
      }
    }
    
    return (
        <Sider className={style.sider}collapsible  onCollapse={changeEditMode}>
                <NewRoute routes={routes} editPoints={editPoints}/>
            <Route/>
        </Sider> 
    )
}

export default Routes