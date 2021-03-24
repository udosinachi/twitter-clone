import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar src='' />
      </div>
    </div>
  )
}

export default Post
