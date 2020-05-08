import React, { useState } from 'react'
import { Layout, Button } from 'antd'
import style from './routes.module.css'
import Route from '../../../components/route/Route';
import NewRoute from '../../../components/new_route/new_route';
import Order from '../../../components/order/Order';

const { Sider } = Layout;

type RoutesProps = {
   orders: any,
   addNewPoint: any
}

const OrdersBar: React.FC<RoutesProps> = ( {addNewPoint, orders}, ...props) => {
    
let ordersArray = orders.map( (order: any) => <Order addNewPoint={addNewPoint}{...order}/>)
    return (
        <div className={style.sider_wrapper}>
            <div className={style.sider}>
                <div className={style.routes_array}>
                { ordersArray }
                </div>
                
        </div> 
        </div>
        
    )
}

export default OrdersBar