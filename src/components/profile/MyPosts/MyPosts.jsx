import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return <div className={classes.postsBlock}>
        <div>
            <h3>My posts</h3>
            <div className={classes.postArea}>
                <div>
                    <textarea className={classes.textArea} cols="100" rows="4"></textarea>
                </div>
                <div className={classes.buttons}>
                    <button>Add</button>
                </div>
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    </div>
}

export default MyPosts;