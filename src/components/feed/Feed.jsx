import React , {useEffect, useState} from 'react';
import StoryReel from '../story-reel/StoryReel';
import MessageSender from '../../components/message-sender/MessageSender';
import './feed.scss';
import Post from '../../components/post/Post';
import db  from '../../firebase';

const Feed = () => {
  const[posts , setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').orderBy('timestamp' , 'desc').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc =>({id:doc.id ,post:doc.data()})))
    })
  }, [])
  
  return (
    <div className='feed'>
        <StoryReel />
        <MessageSender />
        {/* <Post
          profilePic='https://images.pexels.com/users/avatars/39047/scott-webb-409.jpeg?auto=compress&fit=crop&h=256&w=256'
          message={"This is working out"}
          timestamp={'entry.timestamp'}
          image={"https://images.pexels.com/photos/8086279/pexels-photo-8086279.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
          username={'miguel'}
        />
        <Post
          profilePic='https://images.pexels.com/photos/8086278/pexels-photo-8086278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          message={"This is working out"}
          timestamp={'entry.timestamp'}
          image={"https://images.pexels.com/photos/8086278/pexels-photo-8086278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
          username={'miguel'}
        />
        <Post
          profilePic='https://images.pexels.com/photos/7167635/pexels-photo-7167635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          message={"This is working out"}
          timestamp={'entry.timestamp'}
          image={"https://images.pexels.com/photos/7167635/pexels-photo-7167635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
          username={'miguel'}
        /> */}
        {
          posts.map(({id , post}) =>(
            <Post 
              key={id}
              profilePic = {post.profilePic}
              message = {post.message}
              timestamp = {post.timestamp}
              image = {post.image}
              username = {post.username}
            />
          ))
        }
    </div>
  )
}

export default Feed