import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import style from './logistics.module.css'
import Maps from '../../../modules/map/map'
import Routes from '../../../modules/routes/components/routes'
import { LoadingOutlined } from '@ant-design/icons';
import MapboxGLMap from '../../../modules/map/MapboxGLMap'


type LogisticProps = {
    getRoutes: any,
    getOrders: any,
    orders: any,
    routes: any,
    setNewPointInRoute: any,
    newRoute: any,
    addNewRoute: any
    
}

const Logistics: React.FC<LogisticProps> = ({addNewRoute, newRoute, setNewPointInRoute, getOrders, getRoutes, routes, orders}, ...props) => {

    useEffect(() => { 
        getOrders()
        getRoutes()
    }, [routes])   
    
    const addNewPoint = (point: any) => {  
        setNewPointInRoute(point) 
    }
    return (
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            
            <Routes addNewRoute={addNewRoute} newRoute={newRoute} routes={routes}/>
           
           <div className={style.content}> 
           {
               orders.length !== 0
               ? <MapboxGLMap addNewPoint={addNewPoint} routes={routes} orders={orders}  />//<Maps addNewPoint={addNewPoint} routes={routes} orders={orders}  />
               : <LoadingOutlined />
           }
                
           </div>
           
          
            
            
        </div>
      
        
    )
}

export default Logistics