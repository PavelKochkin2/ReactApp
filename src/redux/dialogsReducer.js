export const dialogsReducer = (state, action) => {
    debugger;
    switch (action.type) {

        case updateNewMsgText:
            state.newMessageText = action.newMessageText;
            return state;

        case addNewMsg:
            let messages = state.messagesData;
            let id = (messages.length) + 1;
            messages.push({ id: id.toString(), message: state.newMessageText });
            state.newMessageText = '';
            return state;

        default: return state;
    }


}

const updateNewMsgText = 'UPDATE_NEW_MESSAGE_TEXT'
const addNewMsg = 'ADD_NEW_MESSAGE'

export const createUpdateNewMsgTextAction = (newMsgText) => {
    return ({ type: updateNewMsgText, newMessageText: newMsgText })
}

export const createAddNewMessageAction = (msgText) => {
    return ({ type: addNewMsg, msgText: msgText })
}