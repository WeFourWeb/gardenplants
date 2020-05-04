import React, { useState } from 'react'
import { Layout, Button } from 'antd'
import style from './routes.module.css'
import Route from '../../../components/route/Route';
import NewRoute from '../../../components/new_route/new_route';

const { Sider } = Layout;

type RoutesProps = {
    routes: any,
    newRoute: any,
    addNewRoute: any,
    setDriverName: any,
    deleteRoute: any
}

const Routes: React.FC<RoutesProps> = ({setDriverName, deleteRoute, addNewRoute,newRoute, routes}, ...props) => {
   
    let [ collapsed, setEditMode ] = useState(false);
    let changeEditMode = () => {
      if(collapsed == false){
          setEditMode( false);
      } else {
          setEditMode(false);
      }
    }
    let addDeliveryName = (props: any) => {
        console.log('hi')
    }
    let routesArray = routes.map( (route: any) => <Route deleteRoute ={deleteRoute} key={route._id} {...route}/>)
    return (
        <Sider className={style.sider}collapsible  onCollapse={changeEditMode}>
                {newRoute.coordinates.length !== 0 
                    ? <NewRoute setDriverName={setDriverName} onSubmit={addDeliveryName}addNewRoute={addNewRoute} newRoute={newRoute}  /> 
                    : <h1/>   
                }
                <div className={style.routes_array}>
                { routesArray }
                </div>
                
        </Sider> 
    )
}

export default Routes