import React, { useState } from 'react'
import style from './order.module.css'
import { EllipsisOutlined, DeleteOutlined, ExclamationCircleOutlined, CarTwoTone } from '@ant-design/icons';
import { Button, Modal } from 'antd';
//import DropDownMenu from '../drop_down_menu/drop_down_menu';

const { confirm } = Modal;

 


const Order:React.FC =(props: any) => {   
  console.log(props)
  
  const[rolled, changeMode]=useState(true)
  let changeEditMode = () => {
    if(rolled == false){
        changeMode(true);
    } else {
        changeMode(false);
    }
}
// Points in Route
  return(
    <div className={style.route_wrapper}>
        {
          rolled
          ?   <div onDoubleClick={changeEditMode} className={style.route}>
                  <div  className={style.route_header}>
                  <div style={{color: 'black'}}>Order id: {props.orderId} </div>
                  
                  <Button shape='circle' size='small' type='primary' onClick={ () => props.addNewPoint([props.lng , props.lat], props.orderId)}>+</Button>
                  </div>  
              </div>
          :   <div onDoubleClick={changeEditMode} className={style.route}>
                <div  className={style.route_header}>
                  <div style={{color: 'black'}}>Order id: {props.orderId} </div> 
                  <Button shape='circle' size='small' type='primary' onClick={ () => props.addNewPoint([props.lng , props.lat], props.orderId)}>+</Button>
                    
                  </div>  
                  <div>
                    <div style={{marginLeft: '10px'}}>
                      Postcode: {props.postcode}
                    </div>
                    <div style={{marginLeft: '10px'}}>
                      Latitude: {props.lat}
                    </div>
                    <div style={{marginLeft: '10px'}}>
                      Longitude: {props.lng}
                    </div>
                    </div>
              </div>
        }
    </div>
  )
  }
 
export default Order