import React, {useEffect} from 'react'
import { Layout } from 'antd'
import style from './logistics.module.css'
import Maps from './map'
import { connect } from 'react-redux'
import { getOrders } from '../../../redux/ordersReducer'

const Logistics = (props: any) => {
    useEffect(() => {
        getOrders()
    }, [])
    return (
      <Maps className={style.content} />
        
    )
}

let mapStateToProps = (state: any) =>({
    orders: state.orders
})

export default connect(mapStateToProps, {getOrders})(Logistics)