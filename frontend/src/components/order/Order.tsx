import React from 'react'
import { Layout } from 'antd'
import style from './order.module.css'

type OrderProps = {
    collapsed: boolean
}
 
const Order:React.FC<OrderProps> =({collapsed}) => {     
  return(
    <Layout className={style.order_wrapper}>
        {
            !collapsed
            ? <div >
                <div className={style.order_number}>№ 12654 Title</div>
                <div>description Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Ipsa provident optio, fugit adipisci doloribus sunt quo sed soluta error
                    molestiae atque laborum corrupti suscipit doloremque nulla, consectetur 
                    cum repellendus quaerat!</div>
              </div>
            : <div >
                <div className={style.order_number}>№ 12654</div>
                <div> Title</div>
              </div>
        }
    </Layout>
  )
  }
 
export default Order