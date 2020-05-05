import React, {useState, useEffect} from 'react'
import style from './new_route.module.css'
import { Button, Input, Form, Dropdown, DatePicker } from 'antd'
import { reduxForm } from 'redux-form'
import DropDownMenu from '../drop_down_menu/drop_down_menu'
import { CarTwoTone } from '@ant-design/icons';


const { Search } = Input;
 
const NewRoute =({setDriverName, addNewRoute, newRoute, setRouteDeliveringDate}, props) => { 
  useEffect(() => {

  },[newRoute])   
 
let newRouteItems = newRoute.ordersId.map( (order) => <div style={{paddingLeft: '15px'}}key={order.ordersId} {...order}>{`id: ${order}`} </div>)
console.log(newRoute)

let onDateChange = (date, dateString)=> {
  setRouteDeliveringDate(dateString);
}

  return(
    <div style={{borderBottom: "1px solid rgb(238, 238, 238)"}}>
      <div className={style.new_route_title_c}>
          New route
      </div>    
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}} className={style.add_new_route}>
              Orders in the route: {newRouteItems}
              <Dropdown overlay={<DropDownMenu setDriverName={setDriverName}/>}>
                <div style={{marginBottom: '10px', marginTop: '5px'}}className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  {newRoute.driver.length == 0 ? <a> <CarTwoTone style={{marginRight: '5px'}}/>Choose driver</a> : <div> <CarTwoTone style={{marginRight: '5px'}}/> <a>{newRoute.driver}</a></div> }
                </div>
              </Dropdown>
              <DatePicker style={{width:'100%'}} onChange={  onDateChange } />
              <Button 
                className={style.add_route_button}
                htmlType="submit" 
                type='primary'  
                onClick={() => addNewRoute(newRoute)}
                disabled={(newRoute.coordinates.length !== 0 && newRoute.driver !== '' && newRoute.deliveringDate !== '') ? false : true}
              >Add route</Button>
          </div>
          
          
          {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Button htmlType="submit" style={{width: '100%', margin: "0 15px"}}disabled={(newRoute.coordinates.length !== 0) ? false : true} onClick={() => addNewRoute(newRoute)}type='primary' >Add route</Button>
          </div>
           */}
    </div>
  )
  }
 
export default reduxForm({ form: 'deliveryNameForm'})(NewRoute)