import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    debugger;
    const dialogElements = props.data.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}></DialogItem>)
    const messageElements = props.data.messagesData.map(msg => <Message message={msg.message} key={msg.message}></Message>)

    return (
        <div className={css.dialogs}>

            <div className={css.dialogItems}>
                {dialogElements}
            </div>

            <div className={css.messages}>
                {messageElements}
            </div>

        </div>
    )
}

export default Dialogs;