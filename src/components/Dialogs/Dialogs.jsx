import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path} className={({isActive}) => isActive && `${classes.active}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.dialog}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Kostya'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Maksim'},
        {id: 5, name: 'Lexa'}
    ];
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi, how are you?'},
        {id: 3, message: 'Good'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
)
}

export default Dialogs;