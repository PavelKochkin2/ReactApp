import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { createUpdateNewMsgTextAction } from '../../redux/state'
import { createAddNewMessageAction } from '../../redux/state'

const Dialogs = (props) => {

    const dialogElements = props.data.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}></DialogItem>)
    const messageElements = props.data.messagesData.map(msg => <Message message={msg.message} key={msg.message}></Message>)
    let newMsgText = props.data.newMessageText;

    let updateNewMessageText = (event) => {
        let msgText = event.target.value;
        let action = createUpdateNewMsgTextAction(msgText);
        props.dispatch(action);
    }

    let addNewMsg = () => {
        let action = createAddNewMessageAction(newMsgText);
        props.dispatch(action);
    }


    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogElements}
            </div>
            <div className={css.messages}>
                {messageElements}
                <div>
                    <textarea value={newMsgText} placeholder='Enter your message asap baby' onChange={updateNewMessageText}></textarea>
                    <button onClick={addNewMsg}>Send message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;