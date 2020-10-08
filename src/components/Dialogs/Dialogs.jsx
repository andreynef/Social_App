import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogsPage, sendMessage, updateNewMessageBody}) => {

    let dialogsElements = dialogsPage.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = dialogsPage.messages.map( m => <Message message={m.message} key={m.id} /> );
    let newMessageBody = dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        sendMessage();
    }

    let onNewMessageChange = (event) => {
        updateNewMessageBody(event.target.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>
                    { messagesElements }
                </div>
                <div>
                    <div>
                        <textarea 
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;