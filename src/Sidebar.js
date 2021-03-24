import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import SidebarOption from './SidebarOption'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Twitter icon */}
      <TwitterIcon />

      <SidebarOption Icon={HomeIcon} text='Home' />
      <SidebarOption text='Explore' />
      <SidebarOption text='Notifications' />
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* SidebarOption */}

      {/* Button -> Tweet */}
    </div>
  )
}

export default Sidebar
