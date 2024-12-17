import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div className={classes.content}>
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add</button>
        <button>Remove</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you?' />
        <Post message="It's my first post" />
      </div>
    </div>
  </div>
}

export default MyPosts;