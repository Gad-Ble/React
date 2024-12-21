import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.profileImage}
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/04/Avatar-2.jpg"
                     alt="avatar" className={classes.profileAvatar} />
                <h2>Borislav React</h2>
            </div>
        </div>
    )
}

export default ProfileInfo;