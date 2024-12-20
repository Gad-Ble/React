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
    let posts = postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {posts}
            </div>
        </div>
    </div>
}

export default MyPosts;