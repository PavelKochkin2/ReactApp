import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    const dialogElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}></DialogItem>)
    const messageElements = props.messagesData.map(msg => <Message message={msg.message} key={msg.message}></Message>)

    let onUpdateNewMessageText = (event) => {
        let msgText = event.target.value;
        props.updateNewMessageText(msgText);

    }

    let onAddNewMsg = () => {
        props.addNewMsg();
    }


    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogElements}
            </div>
            <div className={css.messages}>
                {messageElements}
                <div>
                    <textarea value={props.newMsgText} placeholder='Enter your message asap baby' onChange={onUpdateNewMessageText}></textarea>
                    <button onClick={onAddNewMsg}>Send message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;