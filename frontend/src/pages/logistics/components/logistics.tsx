import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import style from './logistics.module.css'
import Maps from '../../../modules/map/map'
import Routes from '../../../modules/routes/components/routes'
import { LoadingOutlined } from '@ant-design/icons';

type LogisticProps = {
    getRoutes: any,
    getOrders: any,
    orders: any,
    routes: any
}

const Logistics: React.FC<LogisticProps> = ({getOrders, getRoutes, routes, orders}, ...props) => {
    useEffect(() => {
        getOrders()
        getRoutes()
    }, [])   
    console.log(orders.length) 
    let [points, editPoints] = useState([])
    const addNewPoint = (point: any) => {
        editPoints(point)
    }
    return (
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            
            <Routes routes={routes}/>
           
           <div className={style.content}> 
           {
               orders.length !== 0
               ? <Maps addNewPoint={addNewPoint} routes={routes} orders={orders}  />
               : <LoadingOutlined />
           }
                
           </div>
           
          
            
            
        </div>
      
        
    )
}

export default Logistics