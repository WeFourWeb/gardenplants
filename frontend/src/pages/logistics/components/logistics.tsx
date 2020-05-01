import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import style from './logistics.module.css'
import Maps from '../../../modules/map/map'
import Routes from '../../../modules/routes/components/routes'

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
    let [points, editPoints] = useState([])
    const addNewPoint = (point: any) => {
        editPoints(point)
    }
    return (
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            
            <Routes/>
           
           <div className={style.content}> 
                <Maps addNewPoint={addNewPoint} routes={routes} orders={orders}  />
           </div>
           
          
            
            
        </div>
      
        
    )
}

export default Logistics