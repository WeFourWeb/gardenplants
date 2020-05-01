import React, { useState } from 'react'
import style from './route.module.css'
import { DownOutlined, UpOutlined,EditTwoTone } from '@ant-design/icons';

const Route:React.FC =(props: any) => {   
  const[rolled, changeMode]=useState(true)
  let changeEditMode = () => {
    if(rolled == false){
        changeMode(true);
    } else {
        changeMode(false);
    }
}
  return(
    <div className={style.route_wrapper}>
        {
            rolled
            ?   <div onClick={changeEditMode} className={style.route}>
                    <div  className={style.route_header}>
                    route id 
                    <DownOutlined  />
                    </div>  
                </div>
            :   <div onClick={changeEditMode} className={style.route}>
                    <div  className={style.route_header}>
                    route id 
                    <UpOutlined />
                    </div>
                    <div className={style.orders_wrapper}>
                        <div className={style.order}>Order 1231<EditTwoTone style={{marginLeft: '15px'}}/></div>
                        <div className={style.order}>Order 1231<EditTwoTone style={{marginLeft: '15px'}}/></div>
                        <div className={style.order}>Order 1231<EditTwoTone style={{marginLeft: '15px'}}/></div>
                        <div className={style.order}>Order 1231<EditTwoTone style={{marginLeft: '15px'}}/></div>
                    </div>
                </div>
        }
    </div>
  )
  }
 
export default Route