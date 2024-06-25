import React from 'react'
import { Tabs } from 'antd'
import Products from "./Products/index"
function Profile() {
  return (
    <div>
         <Tabs defaultActiveKey='1'>
              <items tab="Products" key="1">
                   <Products />
              </items>
           
         </Tabs>
    </div>
  )
}

export default Profile
