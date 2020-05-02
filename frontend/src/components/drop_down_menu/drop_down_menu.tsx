import React from 'react'
import { Menu } from 'antd';

 
const DropDownMenu:React.FC =(props: any) => {     
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
 
export default DropDownMenu