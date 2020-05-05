import React, { useState } from 'react'
import style from './route.module.css'
import { EllipsisOutlined, DeleteOutlined, ExclamationCircleOutlined, CarTwoTone } from '@ant-design/icons';
import { Dropdown, Menu, Modal } from 'antd';
//import DropDownMenu from '../drop_down_menu/drop_down_menu';

const { confirm } = Modal;

 


const Route:React.FC =(props: any) => {   
  console.log(props)
  
  const[rolled, changeMode]=useState(true)
  let changeEditMode = () => {
    if(rolled == false){
        changeMode(true);
    } else {
        changeMode(false);
    }
}

let showConfirm = () => {
  confirm({
    title: 'Do you want to delete these route?',
    icon: <ExclamationCircleOutlined />,
    content: `Route ${props._id} will be deleted`,
    onOk() {
        props.deleteRoute(props._id) 
    },
    onCancel() {}
  });
}
// Points in Route
let pointsArray = props.ordersId.map( (order: any) => <div key={order} {...order} style={{marginLeft: '10px'}}>id: {order}</div> )
  return(
    <div className={style.route_wrapper}>
        {
          rolled
          ?   <div onClick={changeEditMode} className={style.route}>
                  <div  className={style.route_header}>
                  <div style={{color: 'black'}}>Route id: </div> {props._id}
                  
                  <EllipsisOutlined rotate={90} style={{fontSize: '15px'}}/>
                  </div>  
              </div>
          :   <div onClick={changeEditMode} className={style.route}>
                  <div className={style.route_header}>
                    <div style={{color: 'black'}}>Route id: </div> {props._id}
                      <DeleteOutlined onClick={showConfirm}/>
                    </div>
                  <div >
                    <h5>Orders in the route</h5>
                  { pointsArray}
                  <div>Delivering date {props.deliveringDate}</div>
                  <div> <CarTwoTone style={{marginRight: '5px'}}/> <a>{props.driver}</a></div>
                    
                      
                  </div>
              </div>
        }
    </div>
  )
  }
 
export default Route