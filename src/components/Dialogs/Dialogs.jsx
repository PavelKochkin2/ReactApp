import css from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = () => {

    const dialogsData = [
        { id: "1", name: "Alex" },
        { id: "2", name: "Miha" },
        { id: "3", name: "Toha" },
        { id: "4", name: "Kroshka" }
    ]

    const dialogElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id}></DialogItem>)

    const messagesData = [
        { message: "Hi" },
        { message: "Hello" },
        { message: "Go sex" },
        { message: "WTF?!??!?" }
    ]

    const messageElements = messagesData.map(msg => <Message message={msg.message} key={msg.message}></Message>)

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