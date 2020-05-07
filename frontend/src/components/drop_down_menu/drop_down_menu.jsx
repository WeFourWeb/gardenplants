import React from 'react'
import { Menu } from 'antd';

const DropDownMenu = (props) => {   
  return(
    <Menu >
    <Menu.Item onClick={() => {props.setDriverName('James Petrov')}}>
      <span>James May</span>  
    </Menu.Item>
    <Menu.Item onClick={() => {props.setDriverName('Richard Ivanov')}}>
      <span>Richard Sapagov</span> 
    </Menu.Item>
    <Menu.Item onClick={() => {props.setDriverName('Jeremy Sidorov')}}>
      <span>Jeremy Katamaranov</span> 
    </Menu.Item>
  </Menu>
  )
  }
 
export default DropDownMenu

