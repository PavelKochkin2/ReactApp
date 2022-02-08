import { connect } from 'react-redux';
import { createUpdateNewMsgTextAction } from '../../redux/dialogsReducer'
import { createAddNewMessageAction } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'

let addStateToProps = (state) => {
    return {
        messagesData: state.dialogComponentData.messagesData,
        dialogsData: state.dialogComponentData.dialogsData,
        newMsgText: state.dialogComponentData.newMessageText
    }
}

let addCallbacksToProps = (dispatch) => {
    return {
        addNewMsg: (newMsgText) => {
            let action = createAddNewMessageAction(newMsgText);
            dispatch(action);
        },
        updateNewMessageText: (msgText) => {
            let action = createUpdateNewMsgTextAction(msgText);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(addStateToProps, addCallbacksToProps)(Dialogs);

export default DialogsContainer;