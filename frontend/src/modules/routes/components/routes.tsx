import React, { useState } from 'react'
import { Layout, Button } from 'antd'
import style from './routes.module.css'
import Route from '../../../components/route/Route';
import NewRoute from '../../../components/new_route/new_route';

const { Sider } = Layout;

const Routes = (props: any) => {
   
    let [ collapsed, setEditMode ] = useState(false);
    let [routes, editPoints] = useState([])
    const addNewPoint = (point: any) => {
        editPoints(point)
    }
    let changeEditMode = () => {
      if(collapsed == false){
          setEditMode(true);
      } else {
          setEditMode(false);
      }
    }
    
    return (
        <Sider className={style.sider}collapsible  onCollapse={changeEditMode}>
            <Button onClick={()=> addNewPoint('hi')}>Hi</Button>
                <NewRoute routes={routes} editPoints={editPoints}/>
            <Route/>
        </Sider> 
    )
}

export default Routes