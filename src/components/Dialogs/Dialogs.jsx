import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Kostya'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Maksim'},
        {id: 5, name: 'Lexa'}
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi, how are you?'},
        {id: 3, message: 'Good'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ];

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
)
}

export default Dialogs;