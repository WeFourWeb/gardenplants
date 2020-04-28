import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import style from './logistics.module.css'
import Maps from '../../modules/map/map'
import { connect } from 'react-redux'
import { getOrders } from '../../redux/reducers/ordersReducer'
import Order from '../../components/order/Order'
import Orders from '../../modules/orders/orders'



const Logistics = (props: any) => {
    useEffect(() => {
        getOrders()
    }, [])

    
    return (
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
            
            {/* <Orders/> */}
           
           <div> <Maps className={style.content} /></div>
           
          
            
            
        </div>
      
        
    )
}

let mapStateToProps = (state: any) =>({
    orders: state.orders
})

export default connect(mapStateToProps, {getOrders})(Logistics)