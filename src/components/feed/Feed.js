import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from '../tweetbox/TweetBox'
import Post from '../post/Post'
import db from '../../firebase'
import FlipMove from 'react-flip-move'

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    )
  }, [])
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>

      <Post
        displayName='U D O'
        username='udosinachii'
        verified={true}
        text='different text to be observed'
        avatar='https://pbs.twimg.com/profile_images/1330440540257726464/tn-Qj5cC_400x400.jpg'
        image='https://media.giphy.com/media/8Lc5xmvzRhlLy/giphy.gif'
      />
    </div>
  )
}

export default Feed
