import React, {useState, useEffect} from 'react'
import style from './new_route.module.css'
import { Button, Input, Form } from 'antd'
import { reduxForm } from 'redux-form'

const { Search } = Input;
 
const NewRoute =({setDriverName, addNewRoute, newRoute}, props) => { 
  useEffect(() => {

  },[newRoute])   
 
let newRouteItems = newRoute.ordersId.map( (order) => <div key={order.ordersId} {...order}>{`Order ID: ${order}`} </div>)
console.log(newRoute)

let setAll = async (value) => {
  return (
    await setDriverName(value),
    await addNewRoute(newRoute)
  
  )
}
// let doIt = () => {
//   props.handleSubmit()
//   props.reset()
// }
  return(
    <div>
      <div className={style.new_route_title_c}>
          New route
      </div>
          
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}} className={style.add_new_route}>
              Items in the route: {newRouteItems}
          </div>
          <Form>
            <Form.Item
            rules={[
              {
                
                required: true,
                message: 'Please confirm your password!',
              }
            ]}>
            <Search
            placeholder="delivery name"
            enterButton="Add"
            size="small"
            style={{width: '85%', margin: "0 15px"}}
            disabled={(newRoute.coordinates.length !== 0) ? false : true} 
            onSearch={value => (setAll(value))}
            
          />
            </Form.Item>
          </Form>
          
          
          {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Button htmlType="submit" style={{width: '100%', margin: "0 15px"}}disabled={(newRoute.coordinates.length !== 0) ? false : true} onClick={() => addNewRoute(newRoute)}type='primary' >Add route</Button>
          </div>
           */}
    </div>
  )
  }
 
export default reduxForm({ form: 'deliveryNameForm'})(NewRoute)