import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import SidebarOption from './SidebarOption'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import CreateIcon from '@material-ui/icons/Create'
import { Button, Avatar } from '@material-ui/core'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <TwitterIcon className='siderbar__twitterIcon' />

      <SidebarOption active Icon={HomeIcon} text='Home' />
      <SidebarOption Icon={SearchIcon} text='Explore' />
      <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
      <SidebarOption Icon={MailOutlineIcon} text='Messages' />
      <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
      <SidebarOption Icon={ListAltIcon} text='List' />
      <SidebarOption Icon={PermIdentityIcon} text='Profile' />
      <SidebarOption Icon={MoreHorizIcon} text='More' />

      <Button variant='outlined' className='sidebar__tweet' fullWidth>
        Tweet
      </Button>
      <Button variant='outlined' className='sidebar__pen'>
        <CreateIcon />
      </Button>

      <div className='profile'>
        <Avatar src='https://pbs.twimg.com/profile_images/1330440540257726464/tn-Qj5cC_400x400.jpg' />
        <div className='profile__text'>
          <h3>U D O</h3>
          <p>@udosinachii</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
