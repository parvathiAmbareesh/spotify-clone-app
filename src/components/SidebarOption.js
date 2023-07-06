import React from 'react'
import './SidebarOption.css'

function SidebarOption({title, Icon}) { /*Icon components are passed here*/
  return (
    <div className='sidebarOption'>
      {Icon && <Icon  className="sidebarOption__icon"/>}
      { Icon? <h4>{title}</h4> : <p>{title}</p> }
    </div>
  )
}

export default SidebarOption
