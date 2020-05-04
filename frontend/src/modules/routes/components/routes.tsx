import React, { useState } from 'react'
import { Layout, Button } from 'antd'
import style from './routes.module.css'
import Route from '../../../components/route/Route';
import NewRoute from '../../../components/new_route/new_route';

const { Sider } = Layout;

type RoutesProps = {
    routes: any,
    newRoute: any,
    addNewRoute: any
}

const Routes: React.FC<RoutesProps> = ({addNewRoute,newRoute, routes}, ...props) => {
   
    let [ collapsed, setEditMode ] = useState(false);
    let changeEditMode = () => {
      if(collapsed == false){
          setEditMode( false);
      } else {
          setEditMode(false);
      }
    }
    let routesArray = routes.map( (route: any) => <Route key={route._id} {...route}/>)
    return (
        <Sider className={style.sider}collapsible  onCollapse={changeEditMode}>
                {newRoute.coordinates.length !== 0 
                    ? <NewRoute addNewRoute={addNewRoute} newRoute={newRoute}  /> 
                    : <h1/>   
                }
                { routesArray }
        </Sider> 
    )
}

export default Routes