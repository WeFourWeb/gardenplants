import React, { useEffect } from 'react'
import { Layout } from 'antd'
import style from './logistics.module.css'
import Maps from '../../../modules/map/map'
import Orders from '../../../modules/orders/orders'

type LogisticProps = {
    getOrders: any,
    orders: any
}

const Logistics: React.FC<LogisticProps> = ({getOrders, orders}, ...props) => {
    useEffect(() => {
        getOrders()
    }, [])    
    return (
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            
            <Orders/>
           
           <div className={style.content}> <Maps orders={orders}  /></div>
           
          
            
            
        </div>
      
        
    )
}

export default Logistics