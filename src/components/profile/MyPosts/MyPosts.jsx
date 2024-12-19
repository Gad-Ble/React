import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    {id: 1, message: 'Hi, how are you', likesCount: 1},
    {id: 2, message: 'It\'s my first post', likesCount: 12},
    {id: 3, message: 'Good', likesCount: 11},
    {id: 4, message: 'Yo', likesCount: 18},
    {id: 5, message: 'Yo', likesCount: 3}
  ];

  return <div className={classes.postsBlock}>
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div className={classes.buttons}>
          <button>Add</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
        <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
        <Post message={postsData[3].message} likesCount={postsData[3].likesCount}/>
        <Post message={postsData[4].message} likesCount={postsData[4].likesCount}/>
      </div>
    </div>
  </div>
}

export default MyPosts;