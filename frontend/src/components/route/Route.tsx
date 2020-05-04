import React, { useState } from 'react'
import style from './route.module.css'
import { EllipsisOutlined, UpOutlined, EditTwoTone } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
//import DropDownMenu from '../drop_down_menu/drop_down_menu';

const DropDownMenu = () => {     
    return(
      <div>
      <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          delete
        </a>
      </Menu.Item>
    </Menu>
      </div>
    )
    }


const Route:React.FC =(props: any) => {   
  const[rolled, changeMode]=useState(true)
  let changeEditMode = () => {
    if(rolled == false){
        changeMode(true);
    } else {
        changeMode(false);
    }
}
// Points in Route
//let pointsArray = props.points.map( (order: any) => <div key={order._id} {...order} className={style.order}>Order 1231<EditTwoTone style={{marginLeft: '15px'}}/></div> )
  return(
    <div className={style.route_wrapper}>
        {
            rolled
            ?   <div onClick={changeEditMode} className={style.route}>
                    <div  className={style.route_header}>
                    route id 
                    <EllipsisOutlined rotate={90} style={{fontSize: '15px'}}/>
                    </div>  
                </div>
            :   <div onClick={changeEditMode} className={style.route}>
                    <div  className={style.route_header}>
                    route id 
                    
                    <div onClick={(() => {
                      return <div> Удалить </div>
                    })}>
                      <EllipsisOutlined rotate={90} style={{fontSize: '15px'}}/>
                    </div>
                    
                    </div>
                    <div className={style.orders_wrapper}>
                        {/* pointsArray */}
                    </div>
                </div>
        }
    </div>
  )
  }
 
export default Route