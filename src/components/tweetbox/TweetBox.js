import { Button, Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from '../../firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')

  const sendTweet = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: 'U D O',
      username: 'udosinachii',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://pbs.twimg.com/profile_images/1330440540257726464/tn-Qj5cC_400x400.jpg',
    })
    setTweetImage('')
    setTweetMessage('')
  }
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar src='https://pbs.twimg.com/profile_images/1330440540257726464/tn-Qj5cC_400x400.jpg' />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type='text'
          />
        </div>
        <div className='input__flex'>
          <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className='tweetBox__imageInput'
            placeholder='Optional: Enter image URL'
            type='text'
          />
          <Button
            type='submit'
            onClick={sendTweet}
            className='tweetBox__tweetButton'
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  )
}

export default TweetBox
