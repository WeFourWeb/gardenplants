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
    deleteRoute: any,
    setRouteDeliveringDate: any,
}

const Routes: React.FC<RoutesProps> = ({setRouteDeliveringDate, setDriverName, deleteRoute, addNewRoute,newRoute, routes}, ...props) => {
    
    let addDeliveryName = (props: any) => {
        console.log('hi')
    }
    let routesArray = routes.map( (route: any) => <Route deleteRoute ={deleteRoute} key={route._id} {...route}/>)
    return (
        <div className={style.sider_wrapper}>
            <div className={style.sider}>
                {newRoute.coordinates.length !== 0 
                    ? <NewRoute setRouteDeliveringDate={setRouteDeliveringDate} setDriverName={setDriverName} onSubmit={addDeliveryName}addNewRoute={addNewRoute} newRoute={newRoute}  /> 
                    : undefined   
                }
                <div className={style.routes_array}>
                { routesArray }
                </div>
                
        </div> 
        </div>
        
    )
}

export default Routes