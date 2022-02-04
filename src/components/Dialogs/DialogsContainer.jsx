import { createUpdateNewMsgTextAction } from '../../redux/dialogsReducer'
import { createAddNewMessageAction } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let updateNewMessageText = (msgText) => {
        let action = createUpdateNewMsgTextAction(msgText);
        props.store.dispatch(action);
    }

    let addNewMsg = (newMsgText) => {
        let action = createAddNewMessageAction(newMsgText);
        props.store.dispatch(action);
    }


    return (
        <Dialogs 
        dialogsData={state.dialogComponentData.dialogsData} 
        messagesData = {state.dialogComponentData.messagesData}
        addNewMsg = {addNewMsg}
        newMsgText = {state.dialogComponentData.newMessageText}
        updateNewMessageText={updateNewMessageText}
         />
    )
}

export default DialogsContainer;