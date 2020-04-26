import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'
import style from './logistics.module.css'
import Maps from './map/map'
import { connect } from 'react-redux'
import { getOrders } from '../../redux/reducers/ordersReducer'
import Order from '../../components/order/Order'

const { Sider } = Layout;

const Logistics = (props: any) => {
    useEffect(() => {
        getOrders()
    }, [])

    let [ collapsed, setEditMode ] = useState(false);
  let changeEditMode = () => {
      if(collapsed == false){
          setEditMode(true);
      } else {
          setEditMode(false);
      }
  }
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Layout>
            <Sider collapsible collapsed={collapsed} onCollapse={changeEditMode}>
            
            <div className={style.ordersSider}>
            <Order/>
            <Order/>
            <Order/>
            <Order/>
            <Order/>
            <Order/>

            </div>
            
          </Sider>
            </Layout>
            <Layout>
            <Maps className={style.content} />
            </Layout>
        </div>
      
        
    )
}

let mapStateToProps = (state: any) =>({
    orders: state.orders
})

export default connect(mapStateToProps, {getOrders})(Logistics)