import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return <div className={classes.content}>
    <div className={classes.item}>
      <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/04/Avatar-2.jpg" alt="avatar" />
      {props.message}
      <br />
      <span>like</span>
    </div>
  </div>
}

export default Post;